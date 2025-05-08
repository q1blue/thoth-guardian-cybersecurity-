import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../types';
import IconMap from './IconMap';

interface ResourceCardProps {
  resource: Resource;
  variant?: 'default' | 'compact';
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, variant = 'default' }) => {
  const getResourceTypeIcon = (type: string) => {
    switch(type) {
      case 'Guide':
        return 'Guide';
      case 'Tutorial':
        return 'Tutorial';
      case 'Reference':
        return 'Reference';
      case 'Template':
        return 'Template';
      case 'Comparison':
        return 'Comparison';
      default:
        return 'FileText';
    }
  };

  const getResourceTypeColor = (type: string) => {
    switch(type) {
      case 'Guide':
        return 'bg-blue-100 text-blue-800';
      case 'Tutorial':
        return 'bg-green-100 text-green-800';
      case 'Reference':
        return 'bg-purple-100 text-purple-800';
      case 'Template':
        return 'bg-orange-100 text-orange-800';
      case 'Comparison':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (variant === 'compact') {
    return (
      <Link 
        to={`/resource/${resource.slug}`}
        className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 group"
      >
        <div className="flex items-start">
          <div className={`flex-shrink-0 rounded-md p-2 ${getResourceTypeColor(resource.type)}`}>
            <IconMap name={getResourceTypeIcon(resource.type)} size={18} />
          </div>
          <div className="ml-3">
            <span className="text-xs font-medium uppercase text-slate-500">{resource.type}</span>
            <h3 className="font-medium text-slate-800 group-hover:text-cyan-700 transition-colors">
              {resource.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{resource.date}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/resource/${resource.slug}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`rounded-md px-2.5 py-1 text-xs font-medium ${getResourceTypeColor(resource.type)} flex items-center`}>
            <IconMap name={getResourceTypeIcon(resource.type)} size={14} className="mr-1" />
            {resource.type}
          </div>
        </div>
        <h3 className="text-lg font-medium text-slate-800 group-hover:text-cyan-700 transition-colors mb-2">
          {resource.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          {resource.description}
        </p>
        <div className="flex items-center justify-between mt-4 text-sm text-slate-500">
          <span>{resource.date}</span>
          <span>{resource.readTime}</span>
        </div>
        <div className="flex items-center justify-end mt-2">
          <span className="text-sm font-medium text-cyan-600 group-hover:text-cyan-700 transition-colors">
            Read More
          </span>
          <IconMap name="ChevronRight" className="ml-1 text-cyan-600 group-hover:text-cyan-700 transition-colors" size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;