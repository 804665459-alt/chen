import React, { useState, useEffect } from 'react';
import { User, Settings, HelpCircle, LogOut, ChevronRight, CreditCard, Bell, UserPlus, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockLogin, mockLogout } from '../services/authService';
import { User as UserType } from '../types';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);

  // Load user from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('gvglent_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userData = await mockLogin();
      setUser(userData);
      localStorage.setItem('gvglent_user', JSON.stringify(userData));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await mockLogout();
    setUser(null);
    localStorage.removeItem('gvglent_user');
  };

  const MenuItem = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) => (
    <div onClick={onClick} className="flex items-center justify-between p-4 bg-white mb-1 last:mb-0 active:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-full text-gray-600">
          <Icon size={18} />
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <ChevronRight size={16} className="text-gray-300" />
    </div>
  );

  return (
    <div className="pb-24 min-h-screen bg-gray-50">
      {/* Header Profile Section */}
      <div className="bg-white p-6 pb-8 rounded-b-[2rem] shadow-sm mb-6">
        {user ? (
          <div className="flex flex-col items-center animate-fade-in">
             <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-3" />
             <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
             <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
              <User size={40} />
            </div>
            <p className="text-gray-500 text-sm mb-6 text-center">ยินดีต้อนรับสู่ GVGlent<br/>เข้าสู่ระบบเพื่อเริ่มเช่าของเล่น</p>
            
            <div className="flex gap-3 w-full max-w-xs">
              <button 
                onClick={handleLogin}
                disabled={loading}
                className="flex-1 bg-primary text-white border border-transparent px-4 py-2.5 rounded-xl font-medium shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                {loading ? <span className="animate-spin">⌛</span> : <LogIn size={18} />}
                <span>เข้าสู่ระบบ</span>
              </button>
              
              <button 
                onClick={handleLogin} // Reuse mock login for simplicity
                disabled={loading}
                className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-medium shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                {loading ? <span className="animate-spin">⌛</span> : <UserPlus size={18} />}
                <span>สมัครสมาชิก</span>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-4">*ไม่ต้องยืนยันเบอร์/อีเมล (Mock Mode)</p>
          </div>
        )}
      </div>

      {/* Settings List */}
      <div className="px-4 space-y-4">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <MenuItem 
            icon={Settings} 
            label="ตั้งค่าบัญชี" 
            onClick={() => navigate('/settings/account')}
          />
          <MenuItem 
            icon={Bell} 
            label="การแจ้งเตือน" 
            onClick={() => navigate('/settings/notifications')}
          />
          <MenuItem 
            icon={CreditCard} 
            label="วิธีชำระเงิน" 
            onClick={() => navigate('/settings/payment')}
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-sm">
          <MenuItem 
            icon={HelpCircle} 
            label="ช่วยเหลือและสนับสนุน" 
            onClick={() => navigate('/help')}
          />
        </div>

        {user && (
          <div className="rounded-xl overflow-hidden shadow-sm mt-6">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 p-4 bg-white text-red-500 font-medium active:bg-red-50"
            >
              <LogOut size={18} />
              ออกจากระบบ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;