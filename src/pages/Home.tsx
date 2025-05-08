import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ResourceCard from '../components/ResourceCard';
import IconMap from '../components/IconMap';
import categoryData from '../data/categories';
import { getLatestResources } from '../data/resources';

const Home: React.FC = () => {
  const latestResources = getLatestResources(3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cyan-400">The Wisdom of Thoth</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Your comprehensive cybersecurity knowledge repository and documentation hub
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for cybersecurity resources..."
                className="w-full px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white shadow-lg"
              />
              <button className="absolute right-3 top-0 bottom-0 my-auto p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <IconMap name="Search" />
              </button>
            </div>
            <div className="mt-6 flex justify-center space-x-4 text-sm">
              <Link to="/categories" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Browse Categories
              </Link>
              <span className="text-slate-600">|</span>
              <Link to="/resources" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Latest Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Cybersecurity Knowledge Categories</h2>
            <p className="text-slate-600">
              Explore our comprehensive documentation organized into key cybersecurity domains to find the information you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Resources Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Latest Resources</h2>
              <p className="text-slate-600">
                Stay updated with our newest cybersecurity documentation, guides, and references.
              </p>
            </div>
            <Link 
              to="/resources" 
              className="hidden md:flex items-center text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <span className="font-medium">View All Resources</span>
              <IconMap name="ChevronRight" size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/resources" 
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <span className="font-medium">View All Resources</span>
              <IconMap name="ChevronRight" size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;