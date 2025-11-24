import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, CreditCard, QrCode, ShieldCheck, CheckCircle, Smartphone, Loader2, Upload } from 'lucide-react';
import { Product, Order, OrderStatus } from '../types';

interface LocationState {
  product: Product;
  days: number;
}

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'credit'>('qr');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'processing' | 'confirming' | 'success'>('processing');

  // Load user data to prefill form
  useEffect(() => {
    const savedUser = localStorage.getItem('gvglent_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setFormData({
        name: user.name,
        phone: '081-234-5678', // Mock default phone for logged in user
        address: '123/45 ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110' // Mock default address
      });
    }
  }, []);

  // Redirect if no product state
  useEffect(() => {
    if (!state?.product) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state?.product) return null;

  const { product, days } = state;
  const totalPrice = product.pricePerDay * days;
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + days);

  const formatDate = (date: Date) => date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });

  const isFormValid = formData.name.trim() !== '' && formData.phone.trim() !== '' && formData.address.trim() !== '';

  const handleInitiatePayment = () => {
    if (!isFormValid) return;
    
    setShowPaymentModal(true);
    setPaymentStep('processing');
    
    if (paymentMethod === 'credit') {
      // Auto-process for credit card
      setTimeout(() => {
        completeOrder();
      }, 3000);
    } else {
      // QR Code stays on processing until user confirms
      setTimeout(() => {
        setPaymentStep('confirming'); // Show QR and waiting for slip
      }, 1000);
    }
  };

  const completeOrder = () => {
    setPaymentStep('success');
    
    const newOrder: Order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      productId: product.id,
      productTitle: product.title,
      productImage: product.imageUrl,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      totalPrice: totalPrice,
      status: OrderStatus.ACTIVE
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('gvglent_orders') || '[]');
    localStorage.setItem('gvglent_orders', JSON.stringify([newOrder, ...existingOrders]));

    // Navigate to orders after delay
    setTimeout(() => {
      navigate('/orders');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-white p-4 sticky top-0 z-10 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-gray-700">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">ยืนยันคำสั่งซื้อ</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Address Form (Now Editable) */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-gray-800 font-bold">
            <MapPin size={18} className="text-primary" />
            ข้อมูลจัดส่ง
          </div>
          <div className="space-y-3">
            <input 
              type="text"
              placeholder="ชื่อ-นามสกุล ผู้รับ"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
            <input 
              type="tel"
              placeholder="เบอร์โทรศัพท์ติดต่อ"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
            <textarea 
              rows={3}
              placeholder="ที่อยู่จัดส่ง (บ้านเลขที่, ซอย, ถนน, เขต/อำเภอ, จังหวัด)"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* Product Summary */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 mb-3">สรุปรายการสินค้า</h2>
          <div className="flex gap-4 mb-4">
            <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden shrink-0">
               <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                 <h3 className="font-medium text-sm text-gray-800 line-clamp-2">{product.title}</h3>
                 <p className="text-xs text-gray-500 mt-1">ระยะเวลาเช่า: {days} วัน</p>
              </div>
              <p className="font-bold text-primary self-end">฿{totalPrice.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="border-t border-dashed border-gray-200 pt-3 space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>วันที่เริ่มเช่า</span>
              <span>{formatDate(startDate)}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>วันที่ต้องคืน</span>
              <span>{formatDate(endDate)}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>ค่ามัดจำอุปกรณ์</span>
              <span>฿0 (โปรโมชั่น)</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 mb-3">เลือกวิธีการชำระเงิน</h2>
          <div className="space-y-3">
            <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'qr' ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200'}`}>
              <div className="flex h-5 items-center">
                <input 
                  type="radio" 
                  name="payment" 
                  value="qr" 
                  checked={paymentMethod === 'qr'} 
                  onChange={() => setPaymentMethod('qr')}
                  className="accent-primary w-4 h-4"
                />
              </div>
              <div className="p-2.5 bg-blue-900 rounded-lg text-white"><QrCode size={20} /></div>
              <div className="flex-1">
                <span className="text-sm font-bold text-gray-800 block">Thai QR PromptPay</span>
                <span className="text-xs text-gray-500">ฟรีค่าธรรมเนียม • ยืนยันทันที</span>
              </div>
            </label>

            <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'credit' ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200'}`}>
              <div className="flex h-5 items-center">
                <input 
                  type="radio" 
                  name="payment" 
                  value="credit" 
                  checked={paymentMethod === 'credit'} 
                  onChange={() => setPaymentMethod('credit')}
                  className="accent-primary w-4 h-4"
                />
              </div>
               <div className="p-2.5 bg-gray-800 rounded-lg text-white"><CreditCard size={20} /></div>
              <div className="flex-1">
                <span className="text-sm font-bold text-gray-800 block">บัตรเครดิต / เดบิต</span>
                <span className="text-xs text-gray-500">Visa, Mastercard, JCB</span>
              </div>
            </label>
          </div>
        </div>
        
        {/* Info Box */}
        <div className="flex gap-3 bg-blue-50 p-3 rounded-lg text-blue-700 text-xs items-start">
            <ShieldCheck size={16} className="shrink-0 mt-0.5" />
            <p>การชำระเงินของคุณปลอดภัยด้วยมาตรฐาน SSL</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 safe-area-bottom max-w-md mx-auto z-20">
        <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 text-sm">ยอดชำระสุทธิ</span>
            <div className="text-right">
              <span className="text-xl font-bold text-primary">฿{totalPrice.toLocaleString()}</span>
            </div>
        </div>
        <button 
          onClick={handleInitiatePayment}
          disabled={!isFormValid}
          className={`w-full text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform ${isFormValid ? 'bg-gradient-to-r from-primary to-purple-600 shadow-primary/30' : 'bg-gray-300 shadow-none cursor-not-allowed'}`}
        >
          <ShieldCheck size={20} />
          {isFormValid ? 'ชำระเงินและเช่าสินค้า' : 'กรุณากรอกที่อยู่ให้ครบถ้วน'}
        </button>
      </div>

      {/* Payment Simulation Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl transform transition-all">
            
            {/* 1. Credit Card Processing */}
            {paymentMethod === 'credit' && paymentStep === 'processing' && (
              <div className="p-8 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mb-6">
                    <CreditCard size={32} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-800 mb-2">กำลังตัดบัตรเครดิต...</h3>
                 <p className="text-sm text-gray-500 mb-6">กรุณาอย่าปิดหน้าต่างนี้</p>
                 <Loader2 size={32} className="text-primary animate-spin" />
              </div>
            )}

            {/* 2. QR Code Display & Confirm */}
            {paymentMethod === 'qr' && (paymentStep === 'processing' || paymentStep === 'confirming') && (
               <div className="p-6 text-center">
                 <h3 className="text-lg font-bold text-gray-800 mb-1">สแกนเพื่อจ่าย</h3>
                 <p className="text-sm text-gray-500 mb-4">Thai QR PromptPay</p>
                 
                 <div className="bg-white border-2 border-gray-200 rounded-xl p-4 mb-4 mx-auto w-48 h-48 flex items-center justify-center relative">
                    {paymentStep === 'processing' ? (
                       <Loader2 size={40} className="text-primary animate-spin" />
                    ) : (
                       // Mock QR Code
                       <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
                          <QrCode size={100} />
                       </div>
                    )}
                 </div>

                 <p className="text-xl font-bold text-primary mb-4">฿{totalPrice.toLocaleString()}</p>
                 
                 {paymentStep === 'confirming' && (
                   <button 
                     onClick={completeOrder}
                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-transform"
                   >
                     <Upload size={18} />
                     ยืนยันการโอนเงิน
                   </button>
                 )}
               </div>
            )}

            {/* 3. Success State */}
            {paymentStep === 'success' && (
              <div className="p-8 flex flex-col items-center justify-center text-center animate-scale-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">ชำระเงินสำเร็จ!</h3>
                <p className="text-sm text-gray-500 mb-6">
                  ขอบคุณที่ใช้บริการ <br/>
                  หมายเลขคำสั่งซื้อ: #ORD-{Date.now().toString().slice(-6)}
                </p>
                <div className="w-full bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-400">กำลังพาคุณไปดูประวัติการเช่า...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;