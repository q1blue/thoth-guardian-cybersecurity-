import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import IconMap from './IconMap';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2.5 rounded-full bg-slate-100 text-cyan-600 group-hover:bg-cyan-50 group-hover:text-cyan-700 transition-colors">
            <IconMap name={category.icon as any} size={24} />
          </div>
          <h3 className="ml-3 text-lg font-medium text-slate-800 group-hover:text-cyan-700 transition-colors">
            {category.title}
          </h3>
        </div>
        <p className="text-slate-600 text-sm mb-4">
          {category.description}
        </p>
        <div className="flex items-center justify-end">
          <span className="text-sm font-medium text-cyan-600 group-hover:text-cyan-700 transition-colors">
            Explore
          </span>
          <IconMap name="ChevronRight" className="ml-1 text-cyan-600 group-hover:text-cyan-700 transition-colors" size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;