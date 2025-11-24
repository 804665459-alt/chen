import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ChevronDown, Mail } from 'lucide-react';

const Help: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    { q: 'เช่าของเล่นต้องมัดจำไหม?', a: 'สำหรับลูกค้าใหม่ มีการมัดจำ 20% ของมูลค่าสินค้า แต่หากเป็นสมาชิกระดับ Gold ขึ้นไป ไม่ต้องวางมัดจำค่ะ' },
    { q: 'คืนของช้ามีค่าปรับไหม?', a: 'หากคืนล่าช้ากว่ากำหนด มีค่าปรับวันละ 10% ของราคาเช่าต่อวันค่ะ' },
    { q: 'ของเสียหายต้องทำอย่างไร?', a: 'กรณีเสียหายเล็กน้อย เรามีประกันครอบคลุมค่ะ แต่หากเสียหายหนัก อาจมีค่าใช้จ่ายเพิ่มเติมตามจริง' },
    { q: 'จัดส่งสินค้านานไหม?', a: 'พื้นที่ กทม. ส่งด่วนภายใน 2 ชม. ต่างจังหวัด 1-2 วันทำการค่ะ' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-white p-4 sticky top-0 z-10 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-gray-700 p-1 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">ช่วยเหลือ</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Contact Options */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <span className="text-sm font-bold text-gray-700">แชทกับเรา</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
             <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Mail size={20} />
            </div>
            <span className="text-sm font-bold text-gray-700">อีเมล</span>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="font-bold text-gray-800 mb-3">คำถามที่พบบ่อย (FAQ)</h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm font-medium text-gray-800">{faq.q}</h3>
                  <ChevronDown size={16} className="text-gray-300 mt-1" />
                </div>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed border-t border-gray-50 pt-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;