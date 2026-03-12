import { usePlayerStore } from "@/stores/playerStore";
import { Badge } from "@/components/ui/badge";

export const ConnectionStatus = () => {
  const connectionStatus = usePlayerStore((state) => state.connectionStatus);

  const statusConfig = {
    connected: {
      variant: "success" as const,
      text: "已連線",
      color: "bg-green-500",
    },
    connecting: {
      variant: "warning" as const,
      text: "連線中...",
      color: "bg-yellow-500",
    },
    disconnected: {
      variant: "error" as const,
      text: "未連線",
      color: "bg-red-500",
    },
  };

  const config = statusConfig[connectionStatus];

  return (
    <>
      {/* 桌面版：顯示完整狀態 */}
      <div className="hidden lg:flex items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">狀態:</span>
        <Badge variant={config.variant}>{config.text}</Badge>
      </div>

      {/* 手機版：僅顯示指示圓點 */}
      <div className="lg:hidden flex items-center" title={config.text}>
        <span
          className={`h-2 w-2 rounded-full ${config.color} ${connectionStatus === "connecting" ? "animate-pulse" : ""}`}
        />
      </div>
    </>
  );
};
