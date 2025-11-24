import React from 'react';
import { CategoryType } from '../types';
import { CATEGORY_LABELS } from '../constants';

interface CategoryPillsProps {
  selectedCategory: CategoryType | 'ALL';
  onSelect: (category: CategoryType | 'ALL') => void;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ selectedCategory, onSelect }) => {
  const categories = ['ALL', ...Object.values(CategoryType)];

  return (
    <div className="flex overflow-x-auto space-x-3 px-4 py-2 no-scrollbar">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        const label = cat === 'ALL' ? 'ทั้งหมด' : CATEGORY_LABELS[cat as CategoryType];
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat as CategoryType | 'ALL')}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              isSelected 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-100'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryPills;