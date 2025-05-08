import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ResourceCard from '../components/ResourceCard';
import ResourceTypeFilter from '../components/ResourceTypeFilter';
import ResourceSortFilter from '../components/ResourceSortFilter';
import IconMap from '../components/IconMap';
import { getCategoryBySlug } from '../data/categories';
import { getResourcesByCategory, filterResourcesByOrder } from '../data/resources';
import { FilterType, Resource } from '../types';

const CategoryDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug);
  const allCategoryResources = getResourcesByCategory(category?.id || '');
  
  const [activeType, setActiveType] = useState<string>('All');
  const [activeFilter, setActiveFilter] = useState<FilterType>('Newest');
  
  // Filter resources by type
  const filteredByTypeResources = activeType === 'All' 
    ? allCategoryResources 
    : allCategoryResources.filter(resource => resource.type === activeType);
    
  // Then sort by selected order
  const resources = filterResourcesByOrder(filteredByTypeResources, activeFilter);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Category not found</h2>
        <p className="text-slate-600 mb-6">The category you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="text-cyan-600 hover:text-cyan-700 font-medium">
          Return to Home
        </a>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Categories', path: '/categories' },
    { label: category.title, path: `/category/${category.slug}` }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-2">
            <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400 mr-4">
              <IconMap name={category.icon as any} size={28} />
            </div>
            <h1 className="text-3xl font-bold">{category.title}</h1>
          </div>
          <p className="text-slate-300 max-w-3xl ml-16">
            {category.description}
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{category.title} Resources</h2>
            
            <ResourceTypeFilter 
              activeType={activeType} 
              onTypeChange={setActiveType} 
            />
            
            <ResourceSortFilter 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
            
            {resources.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-slate-600 mb-4">No resources found for the selected filters.</p>
                <button 
                  onClick={() => {
                    setActiveType('All');
                    setActiveFilter('Newest');
                  }}
                  className="text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;