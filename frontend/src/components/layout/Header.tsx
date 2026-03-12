import { ConnectionStatus } from "./ConnectionStatus";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSearchClick?: () => void;
}

export const Header = ({ onSearchClick }: HeaderProps) => {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3 lg:px-6 lg:py-4 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        {/* Logo - 手機版縮小 */}
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-50">
          🎵 <span className="hidden sm:inline">YouTube Music Bot</span>
        </h1>

        <div className="flex items-center gap-2 lg:gap-4">
          {/* 搜尋按鈕 - 手機版隱藏 */}
          <Button
            variant="outline"
            size="md"
            onClick={onSearchClick}
            className="gap-2 hidden lg:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span>搜尋音樂</span>
            <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-xs text-gray-600">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          {/* 連線狀態 */}
          <ConnectionStatus />
        </div>
      </div>
    </header>
  );
};
