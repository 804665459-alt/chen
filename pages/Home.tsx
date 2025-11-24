import React, { useState, useMemo } from 'react';
import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { CategoryType, Product } from '../types';
import ProductCard from '../components/ProductCard';
import CategoryPills from '../components/CategoryPills';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'ALL'>('ALL');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'ALL' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="pb-24 pt-4 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="px-4 mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">GVGlent</h1>
          <p className="text-xs text-gray-500">เช่าของเล่นและของสะสมง่ายๆ</p>
        </div>
        <button className="p-2 bg-white rounded-full shadow-sm text-gray-600">
          <Bell size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหา Art Toy, การ์ด..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-none rounded-2xl py-3 pl-10 pr-4 text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <CategoryPills selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      {/* Product Grid */}
      <div className="px-4">
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-lg font-bold text-gray-800">สินค้าแนะนำ</h2>
          <span className="text-xs text-primary font-medium">ดูทั้งหมด</span>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <p>ไม่พบสินค้าที่คุณค้นหา</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={handleProductClick} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;