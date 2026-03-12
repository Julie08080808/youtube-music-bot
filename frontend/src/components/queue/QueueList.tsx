import { QueueItem } from "./QueueItem";
import type { Track } from "@/types";

interface QueueListProps {
  queue: Track[];
  onRemove: (index: number) => void;
  removingIndex: number | null;
}

export const QueueList = ({
  queue,
  onRemove,
  removingIndex,
}: QueueListProps) => {
  return (
    <div className="space-y-2 p-4">
      {queue.map((track, index) => (
        <QueueItem
          key={`${track.videoId}-${index}`}
          track={track}
          index={index}
          onRemove={onRemove}
          isRemoving={removingIndex === index}
        />
      ))}
    </div>
  );
};
