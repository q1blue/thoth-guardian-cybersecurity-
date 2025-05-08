import React from 'react';
import { Link } from 'react-router-dom';
import IconMap from '../components/IconMap';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-slate-50">
      <div className="text-center px-4 py-12 max-w-md">
        <div className="bg-slate-800 p-4 rounded-full inline-block mb-6">
          <IconMap name="AlertTriangle" className="text-yellow-400" size={36} />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">Oops! Page not found</h2>
        <p className="text-slate-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-cyan-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;