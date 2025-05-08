import React from 'react';
import { Link } from 'react-router-dom';
import IconMap from './IconMap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-cyan-500 p-1.5 rounded-md">
                <IconMap name="Shield" className="text-slate-900" size={16} />
              </div>
              <h2 className="text-lg font-bold text-white">Thoth Guardian</h2>
            </div>
            <p className="text-sm">
              Your comprehensive cybersecurity knowledge repository and documentation hub.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/network-security" className="hover:text-cyan-400 transition-colors">Network Security</Link></li>
              <li><Link to="/category/application-security" className="hover:text-cyan-400 transition-colors">Application Security</Link></li>
              <li><Link to="/category/cloud-security" className="hover:text-cyan-400 transition-colors">Cloud Security</Link></li>
              <li><Link to="/category/threat-intelligence" className="hover:text-cyan-400 transition-colors">Threat Intelligence</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-3">Resource Types</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/guides" className="hover:text-cyan-400 transition-colors">Guides</Link></li>
              <li><Link to="/resources/tutorials" className="hover:text-cyan-400 transition-colors">Tutorials</Link></li>
              <li><Link to="/resources/references" className="hover:text-cyan-400 transition-colors">References</Link></li>
              <li><Link to="/resources/templates" className="hover:text-cyan-400 transition-colors">Templates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Thoth Guardian</Link></li>
              <li><Link to="/contribute" className="hover:text-cyan-400 transition-colors">Contribute</Link></li>
              <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800 text-sm text-center text-slate-400">
          <p>© {new Date().getFullYear()} Thoth Guardian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;