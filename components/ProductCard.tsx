import React from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick(product)}
      className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full active:scale-95 transition-transform duration-100"
    >
      <div className="relative aspect-square w-full">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {product.isPopular && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            ยอดฮิต
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-medium text-sm text-gray-800 line-clamp-2 leading-tight mb-1">
            {product.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1 mb-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-primary font-bold text-sm">
            ฿{product.pricePerDay}
            <span className="text-[10px] text-gray-400 font-normal">/วัน</span>
          </div>
          <button className="bg-gray-100 p-1.5 rounded-full text-gray-700">
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;