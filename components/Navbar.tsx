import React from 'react';
import { Home, Package, User, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path ? 'text-primary' : 'text-gray-400';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50 shadow-lg safe-area-bottom">
      <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/')}`}>
        <Home size={24} />
        <span className="text-[10px] font-medium">หน้าแรก</span>
      </Link>
      
      <Link to="/ai-chat" className={`flex flex-col items-center gap-1 ${isActive('/ai-chat')}`}>
        <Sparkles size={24} />
        <span className="text-[10px] font-medium">AI ช่วยเลือก</span>
      </Link>

      <Link to="/orders" className={`flex flex-col items-center gap-1 ${isActive('/orders')}`}>
        <Package size={24} />
        <span className="text-[10px] font-medium">คำสั่งซื้อ</span>
      </Link>

      <Link to="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile')}`}>
        <User size={24} />
        <span className="text-[10px] font-medium">โปรไฟล์</span>
      </Link>
    </nav>
  );
};

export default Navbar;