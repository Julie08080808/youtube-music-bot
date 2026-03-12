import { useState } from "react";
import { QueueList } from "./QueueList";
import { Empty } from "@/components/ui/empty";
import { useToast } from "@/components/ui/toast";
import { usePlayerStore } from "@/stores/playerStore";
import { api } from "@/services/api";
import { cn } from "@/lib/utils";

interface QueueContentProps {
  className?: string;
}

export const QueueContent = ({ className }: QueueContentProps) => {
  const [removingIndex, setRemovingIndex] = useState<number | null>(null);
  const queue = usePlayerStore((state) => state.playbackState.queue);
  const { showToast } = useToast();

  const handleRemove = async (index: number) => {
    setRemovingIndex(index);
    try {
      const response = await api.removeFromQueue(index);
      if (response.success) {
        showToast({ message: "已從佇列移除", type: "success" });
      } else {
        showToast({ message: response.error || "移除失敗", type: "error" });
      }
    } catch (error) {
      showToast({ message: "移除發生錯誤", type: "error" });
    } finally {
      setRemovingIndex(null);
    }
  };

  if (queue.length === 0) {
    return <Empty title="播放佇列為空" description="搜尋並加入歌曲到佇列" />;
  }

  return (
    <div className={cn("overflow-auto", className)}>
      <QueueList
        queue={queue}
        onRemove={handleRemove}
        removingIndex={removingIndex}
      />
    </div>
  );
};
