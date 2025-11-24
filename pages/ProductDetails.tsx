import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, ShieldCheck, ShoppingCart, Zap, Truck, Minus, Plus, Calendar } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORY_LABELS } from '../constants';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [days, setDays] = useState(1);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center flex-col bg-gray-50">
        <p className="text-gray-500 mb-4">ไม่พบสินค้า</p>
        <button onClick={() => navigate('/')} className="text-primary font-medium">กลับหน้าหลัก</button>
      </div>
    );
  }

  const handleIncrement = () => setDays(prev => Math.min(prev + 1, 30));
  const handleDecrement = () => setDays(prev => Math.max(prev - 1, 1));

  const handleRentNow = () => {
    // Navigate to checkout immediately
    navigate('/checkout', { state: { product, days } });
  };

  const handleAddToCart = () => {
    // Simulation of adding to cart
    alert(`เพิ่ม ${product.title} ลงในตะกร้าแล้ว! (Mock)`);
  };

  return (
    <div className="bg-white min-h-screen pb-32 relative">
      {/* Header Buttons */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-white/80 backdrop-blur-md p-2.5 rounded-full shadow-sm text-gray-700 hover:bg-white"
        >
          <ArrowLeft size={20} />
        </button>
        <button className="bg-white/80 backdrop-blur-md p-2.5 rounded-full shadow-sm text-gray-700 hover:bg-white">
          <Share2 size={20} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-square bg-gray-100 relative">
         <img 
           src={product.imageUrl} 
           alt={product.title} 
           className="w-full h-full object-cover"
         />
         {product.isPopular && (
            <span className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              ยอดฮิต 🔥
            </span>
         )}
      </div>

      {/* Content Container */}
      <div className="-mt-6 bg-white rounded-t-[2rem] relative z-0 p-6 shadow-[-4px_0_15px_rgba(0,0,0,0.05)]">
         {/* Category Tag */}
         <div className="mb-2">
           <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">
             {CATEGORY_LABELS[product.category]}
           </span>
         </div>

         {/* Title & Price */}
         <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{product.title}</h1>
         <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold text-primary">฿{product.pricePerDay}</span>
            <span className="text-gray-400 text-sm">/วัน</span>
         </div>

         {/* Rental Duration Selector */}
         <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
           <div className="flex justify-between items-center mb-2">
             <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
               <Calendar size={16} /> ระยะเวลาเช่า
             </span>
             <span className="text-xs text-gray-500">คืนสินค้าภายใน {days} วัน</span>
           </div>
           <div className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
             <button onClick={handleDecrement} className="p-2 text-gray-500 hover:text-primary active:scale-95 transition-transform">
               <Minus size={20} />
             </button>
             <span className="text-xl font-bold text-gray-800 w-12 text-center">{days}</span>
             <button onClick={handleIncrement} className="p-2 text-gray-500 hover:text-primary active:scale-95 transition-transform">
               <Plus size={20} />
             </button>
           </div>
         </div>

         {/* Guarantee Badges */}
         <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100 overflow-x-auto no-scrollbar">
           <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg whitespace-nowrap">
             <ShieldCheck size={16} className="text-green-500"/>
             <span>ของแท้ 100%</span>
           </div>
           <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg whitespace-nowrap">
             <ShieldCheck size={16} className="text-blue-500"/>
             <span>ทำความสะอาดแล้ว</span>
           </div>
           <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg whitespace-nowrap">
             <Truck size={16} className="text-orange-500"/>
             <span>ส่งด่วน 1 ชม.</span>
           </div>
         </div>

         {/* Description */}
         <div className="mb-8">
           <h3 className="font-bold text-gray-800 mb-2">รายละเอียดสินค้า</h3>
           <p className="text-gray-500 text-sm leading-relaxed">
             {product.description}
             <br /><br />
             สินค้านี้เหมาะสำหรับการสะสม ถ่ายรูปเล่น หรือใช้เป็นพร็อพสำหรับงานปาร์ตี้และการคอสเพลย์ 
             สภาพสินค้าสมบูรณ์พร้อมกล่องและการ์ด (ถ้ามี)
           </p>
         </div>

         {/* Action Bar */}
         <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-area-bottom max-w-md mx-auto z-20">
           <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500">รวมทั้งหมด ({days} วัน)</span>
              <span className="text-xl font-bold text-primary">฿{(product.pricePerDay * days).toLocaleString()}</span>
           </div>
           <div className="flex gap-3">
             <button 
               onClick={handleAddToCart}
               className="flex-1 bg-gray-100 text-gray-800 font-bold py-3.5 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
             >
               <ShoppingCart size={20} />
               ใส่ตะกร้า
             </button>
             <button 
               onClick={handleRentNow}
               className="flex-1 bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-transform flex items-center justify-center gap-2"
             >
               <Zap size={20} fill="currentColor" />
               เช่าเลย
             </button>
           </div>
         </div>
      </div>
    </div>
  );
};

export default ProductDetails;