import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconMap from './IconMap';

interface BreadcrumbProps {
  items?: {
    label: string;
    path: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  
  // If no items provided, auto-generate from current path
  const breadcrumbs = items || generateBreadcrumbsFromPath(location.pathname);
  
  return (
    <nav className="text-sm text-slate-500 py-3">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="flex items-center hover:text-cyan-600 transition-colors">
            <IconMap name="Home" size={14} className="mr-1" />
            <span>Home</span>
          </Link>
        </li>
        
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center">
              <IconMap name="ChevronRight" size={14} className="mx-1 text-slate-400" />
            </li>
            <li>
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-slate-700">{item.label}</span>
              ) : (
                <Link to={item.path} className="hover:text-cyan-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

// Helper to generate breadcrumbs from URL path
function generateBreadcrumbsFromPath(path: string) {
  const parts = path.split('/').filter(Boolean);
  
  return parts.map((part, index) => {
    // Format the label (capitalize, replace dashes with spaces)
    const label = part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create the path up to this part
    const path = '/' + parts.slice(0, index + 1).join('/');
    
    return { label, path };
  });
}

export default Breadcrumbs;