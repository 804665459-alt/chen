import React, { useEffect, useState } from 'react';
import { MOCK_ORDERS } from '../constants';
import { Order, OrderStatus } from '../types';
import { Clock, Calendar, CheckCircle, AlertCircle, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Orders: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Merge mock orders with local storage orders
    const localOrders = JSON.parse(localStorage.getItem('gvglent_orders') || '[]');
    // Sort by date descending (assuming Mock data is static, we put new local orders first)
    setOrders([...localOrders, ...MOCK_ORDERS]);
  }, []);

  const activeOrders = orders.filter(o => o.status === OrderStatus.ACTIVE);
  const pastOrders = orders.filter(o => o.status !== OrderStatus.ACTIVE);

  const StatusBadge = ({ status }: { status: OrderStatus }) => {
    switch (status) {
      case OrderStatus.ACTIVE:
        return <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><Clock size={10}/> กำลังเช่า</span>;
      case OrderStatus.COMPLETED:
        return <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><CheckCircle size={10}/> คืนแล้ว</span>;
      case OrderStatus.CANCELLED:
        return <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><AlertCircle size={10}/> ยกเลิก</span>;
      default:
        return null;
    }
  };

  return (
    <div className="pb-24 pt-6 px-4 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">ประวัติการเช่า</h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
           <div className="bg-gray-100 p-6 rounded-full mb-4">
             <ShoppingBag size={48} className="opacity-50" />
           </div>
           <p className="mb-4">ยังไม่มีประวัติการเช่า</p>
           <button 
             onClick={() => navigate('/')}
             className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium"
           >
             ไปเช่าของเล่นกัน
           </button>
        </div>
      ) : (
        <>
          {/* Active Orders Section */}
          {activeOrders.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">กำลังดำเนินการ</h2>
              <div className="space-y-3">
                {activeOrders.map(order => (
                  <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm border border-green-100 animate-fade-in">
                    <div className="flex gap-4">
                      <img src={order.productImage} alt={order.productTitle} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{order.productTitle}</h3>
                          <StatusBadge status={order.status} />
                        </div>
                        <div className="mt-2 space-y-1">
                           <div className="flex items-center text-xs text-gray-500">
                             <Calendar size={12} className="mr-1" />
                             คืน: {order.endDate}
                           </div>
                           <p className="text-xs font-semibold text-primary">ยอดรวม: ฿{order.totalPrice.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-white border border-primary text-primary text-xs py-2 rounded-lg font-medium">
                      แจ้งคืนสินค้า
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Orders */}
          {pastOrders.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">ประวัติเก่า</h2>
              <div className="space-y-3">
                {pastOrders.map(order => (
                  <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm opacity-80">
                    <div className="flex gap-4">
                      <img src={order.productImage} alt={order.productTitle} className="w-16 h-16 rounded-lg object-cover grayscale opacity-80" />
                      <div className="flex-1">
                         <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{order.productTitle}</h3>
                            <StatusBadge status={order.status} />
                          </div>
                          <div className="mt-2 text-xs text-gray-400">
                             วันที่เช่า: {order.startDate}
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs font-medium text-gray-600">฿{order.totalPrice.toLocaleString()}</span>
                            <button onClick={() => navigate('/')} className="text-primary text-xs font-medium underline">เช่าซ้ำ</button>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;