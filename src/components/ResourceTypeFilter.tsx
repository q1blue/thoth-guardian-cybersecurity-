import React from 'react';
import { ResourceType } from '../types';

interface ResourceTypeFilterProps {
  activeType: string;
  onTypeChange: (type: string) => void;
}

const ResourceTypeFilter: React.FC<ResourceTypeFilterProps> = ({ activeType, onTypeChange }) => {
  const types: ResourceType[] = ['Guide', 'Tutorial', 'Reference', 'Template', 'Comparison'];
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button 
        onClick={() => onTypeChange('All')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
          activeType === 'All' 
            ? 'bg-slate-800 text-white' 
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
      >
        All Resources
      </button>
      
      {types.map((type) => (
        <button 
          key={type}
          onClick={() => onTypeChange(type)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeType === type 
              ? 'bg-slate-800 text-white' 
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {type}s
        </button>
      ))}
    </div>
  );
};

export default ResourceTypeFilter;