import { Navbar } from '@/components/Navigation/Navbar/Navbar';
import Sidebar from '@/components/Navigation/Sidebar/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <div className="sidebar flex" style={{ height: 'calc(100vh - 64px)' }}>
        <Sidebar />
        <div className="flex flex-1 overflow-x-auto bg-gray-900 p-4 text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
