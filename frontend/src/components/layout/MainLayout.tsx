import { Header } from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
  onSearchClick?: () => void;
}

export const MainLayout = ({ children, onSearchClick }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Header onSearchClick={onSearchClick} />
      <main className="flex-1 overflow-hidden lg:overflow-visible">
        {/* 桌面版：有 padding 和 max-width */}
        <div className="hidden lg:block mx-auto max-w-7xl p-6 h-full">
          {children}
        </div>
        {/* 手機版：全高度 */}
        <div className="lg:hidden h-full">{children}</div>
      </main>
    </div>
  );
};
