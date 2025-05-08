import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import IconMap from '../components/IconMap';
import { getResourceBySlug } from '../data/resources';
import { getCategoryById } from '../data/categories';
import ReactMarkdown from 'react-markdown';

const ResourceDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const resource = getResourceBySlug(slug);
  
  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Resource not found</h2>
        <p className="text-slate-600 mb-6">The resource you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="text-cyan-600 hover:text-cyan-700 font-medium">
          Return to Home
        </Link>
      </div>
    );
  }

  const category = getCategoryById(resource.category);
  
  const breadcrumbs = [
    { label: 'Resources', path: '/resources' },
    category ? { label: category.title, path: `/category/${category.slug}` } : null,
    { label: resource.title, path: `/resource/${resource.slug}` }
  ].filter(Boolean) as { label: string; path: string }[];

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

  return (
    <div>
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-6">
            <Link 
              to={category ? `/category/${category.slug}` : '/resources'} 
              className="inline-flex items-center text-sm text-cyan-600 hover:text-cyan-700 transition-colors mb-4"
            >
              <IconMap name="ArrowLeft" size={14} className="mr-1" />
              <span>Back to {category ? category.title : 'Resources'}</span>
            </Link>
            
            <div>
              <div className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${getResourceTypeColor(resource.type)}`}>
                {resource.type}
              </div>
              
              <h1 className="text-3xl font-bold text-slate-800 mt-3">
                {resource.title}
              </h1>
              
              <div className="flex items-center mt-4 text-sm text-slate-500">
                <span>{resource.date}</span>
                <span className="mx-2">•</span>
                <span>{resource.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-8">
                {resource.content ? (
                  <div className="prose prose-slate max-w-none">
                    <ReactMarkdown>{resource.content}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="prose prose-slate max-w-none">
                    <h2>Introduction</h2>
                    <p>
                      {resource.description} This is a placeholder content since the full content for this resource 
                      is not available. In a real application, this would contain the complete document.
                    </p>
                    <h2>Key Concepts</h2>
                    <p>
                      The key concepts section would explain the fundamental principles and ideas that form the foundation
                      of this topic. This would include definitions, explanations, and the significance of each concept.
                    </p>
                    <h2>Implementation Steps</h2>
                    <p>
                      This section would provide a step-by-step guide on how to implement the solutions or practices
                      described in this resource. It would include code examples, configuration settings, and practical advice.
                    </p>
                    <h2>Conclusion</h2>
                    <p>
                      The conclusion would summarize the main points of the resource and provide recommendations for
                      next steps or additional resources to explore.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h3 className="text-lg font-medium text-slate-800 mb-4">Resource Actions</h3>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center gap-2 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors">
                    <IconMap name="Link" size={16} />
                    <span>Copy Link</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors">
                    <IconMap name="Share" size={16} />
                    <span>Share</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors">
                    <IconMap name="Bookmark" size={16} />
                    <span>Save</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors">
                    <IconMap name="Printer" size={16} />
                    <span>Print</span>
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-medium text-slate-800 mb-4">Related Resources</h3>
                  
                  <div className="space-y-3">
                    <Link to="/resource/another-guide" className="block text-cyan-600 hover:text-cyan-700 transition-colors">
                      Security Monitoring Best Practices
                    </Link>
                    <Link to="/resource/another-template" className="block text-cyan-600 hover:text-cyan-700 transition-colors">
                      Incident Response Framework Template
                    </Link>
                    <Link to="/resource/another-guide" className="block text-cyan-600 hover:text-cyan-700 transition-colors">
                      Security Policy Development Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceDetail;