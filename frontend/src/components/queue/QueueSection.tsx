import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { QueueContent } from "./QueueContent";
import { usePlayerStore } from "@/stores/playerStore";

export const QueueSection = () => {
  const queue = usePlayerStore((state) => state.playbackState.queue);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">播放佇列 ({queue.length})</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <QueueContent className="h-full" />
      </CardContent>
    </Card>
  );
};
