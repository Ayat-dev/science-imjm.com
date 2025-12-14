import React from 'react';

interface FilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-tech-blue text-white shadow-soft'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
