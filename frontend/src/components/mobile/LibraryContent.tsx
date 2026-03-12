import { Empty } from "@/components/ui/empty";

export const LibraryContent = () => {
  return (
    <div className="lg:hidden flex flex-col h-full items-center justify-center px-6">
      <Empty
        title="媒體庫"
        description="即將推出"
        icon={
          <svg
            className="w-16 h-16 text-gray-300 dark:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        }
      />
      <div className="mt-8 text-center space-y-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          未來功能規劃：
        </p>
        <ul className="text-xs text-gray-400 dark:text-gray-500 space-y-2">
          <li>• 播放歷史記錄</li>
          <li>• 喜愛的歌曲</li>
          <li>• 自訂播放清單</li>
          <li>• 離線下載</li>
        </ul>
      </div>
    </div>
  );
};
