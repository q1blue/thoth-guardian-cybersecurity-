import React from 'react';
import { FilterType } from '../types';

interface ResourceSortFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const ResourceSortFilter: React.FC<ResourceSortFilterProps> = ({ activeFilter, onFilterChange }) => {
  const filters: FilterType[] = ['Newest', 'Most Popular', 'A-Z'];
  
  return (
    <div className="flex items-center text-sm mb-6 border-b border-slate-200 pb-3">
      <span className="text-slate-500 mr-3">Sort by:</span>
      <div className="flex gap-4">
        {filters.map((filter) => (
          <button 
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`pb-1 transition-colors ${
              activeFilter === filter 
                ? 'text-cyan-600 border-b-2 border-cyan-600 font-medium' 
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourceSortFilter;