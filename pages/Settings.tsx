import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, CreditCard, Bell, User, Plus } from 'lucide-react';

const Settings: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [notificationState, setNotificationState] = useState({
    promotions: true,
    orders: true,
    chat: false
  });

  const getTitle = () => {
    switch (type) {
      case 'account': return 'ตั้งค่าบัญชี';
      case 'notifications': return 'การแจ้งเตือน';
      case 'payment': return 'วิธีชำระเงิน';
      default: return 'ตั้งค่า';
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'account':
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">ชื่อโปรไฟล์</label>
                <input type="text" defaultValue="Somchai Jaidee" className="w-full bg-gray-50 rounded-lg p-2 text-sm border-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">อีเมล</label>
                <input type="email" defaultValue="somchai@example.com" className="w-full bg-gray-50 rounded-lg p-2 text-sm border-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">เบอร์โทรศัพท์</label>
                <input type="tel" defaultValue="081-234-5678" className="w-full bg-gray-50 rounded-lg p-2 text-sm border-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-medium shadow-lg shadow-primary/20 flex justify-center items-center gap-2 active:scale-95 transition-transform">
              <Save size={18} />
              บันทึกข้อมูล
            </button>
          </div>
        );

      case 'notifications':
        return (
          <div className="bg-white p-2 rounded-xl shadow-sm">
             {Object.entries({
               promotions: 'ข่าวสารและโปรโมชั่น',
               orders: 'สถานะคำสั่งซื้อ',
               chat: 'ข้อความจากผู้ช่วย AI'
             }).map(([key, label]) => (
               <div key={key} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-none">
                 <span className="text-sm text-gray-700">{label}</span>
                 <button 
                   onClick={() => setNotificationState(prev => ({...prev, [key]: !prev[key as keyof typeof notificationState]}))}
                   className={`w-11 h-6 rounded-full relative transition-colors ${notificationState[key as keyof typeof notificationState] ? 'bg-primary' : 'bg-gray-200'}`}
                 >
                   <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${notificationState[key as keyof typeof notificationState] ? 'left-[calc(100%-1.35rem)]' : 'left-0.5'}`} />
                 </button>
               </div>
             ))}
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
               <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                 <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                   <CreditCard size={20} />
                 </div>
                 <div className="flex-1">
                   <p className="text-sm font-bold text-gray-800">Visa •••• 4242</p>
                   <p className="text-xs text-gray-500">หมดอายุ 12/25</p>
                 </div>
                 <span className="text-xs font-medium text-blue-600 bg-white px-2 py-1 rounded">หลัก</span>
               </div>
               
               <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-transparent">
                 <div className="p-2 bg-gray-200 text-gray-500 rounded-lg">
                   <CreditCard size={20} />
                 </div>
                 <div className="flex-1">
                   <p className="text-sm font-bold text-gray-800">Mastercard •••• 8888</p>
                   <p className="text-xs text-gray-500">หมดอายุ 08/24</p>
                 </div>
               </div>
            </div>
            
            <button className="w-full bg-white border border-gray-200 text-gray-600 py-3 rounded-xl font-medium flex justify-center items-center gap-2 active:bg-gray-50">
              <Plus size={18} />
              เพิ่มบัตรเครดิต/เดบิต
            </button>
          </div>
        );

      default:
        return <div className="text-center text-gray-400 py-10">ไม่พบหน้าที่ต้องการ</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white p-4 sticky top-0 z-10 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-gray-700 p-1 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">{getTitle()}</h1>
      </div>
      <div className="p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;