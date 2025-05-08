import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconMap from './IconMap';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="bg-cyan-500 p-2 rounded-lg">
              <IconMap name="Shield" className="text-slate-900" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Thoth Guardian</h1>
              <p className="text-xs text-slate-300">The Wisdom of Thoth</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleSearch}
              className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
            >
              <IconMap name="Search" size={18} />
              <span>Search</span>
            </button>
            
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-cyan-400 transition-colors">Browse Categories</Link></li>
                <li><Link to="/resources" className="hover:text-cyan-400 transition-colors">Latest Resources</Link></li>
              </ul>
            </nav>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleSearch}
              className="hover:text-cyan-400 transition-colors"
            >
              <IconMap name="Search" size={18} />
            </button>
            <button 
              onClick={toggleMenu}
              className="hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <IconMap name="X" size={20} /> : <IconMap name="Menu" size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 border-t border-slate-700">
            <ul className="space-y-3">
              <li><Link to="/" onClick={toggleMenu} className="block py-1 hover:text-cyan-400 transition-colors">Browse Categories</Link></li>
              <li><Link to="/resources" onClick={toggleMenu} className="block py-1 hover:text-cyan-400 transition-colors">Latest Resources</Link></li>
            </ul>
          </nav>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pb-2 border-t border-slate-700 pt-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for cybersecurity resources..." 
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
              <button className="absolute right-2 top-2 text-slate-400 hover:text-cyan-500">
                <IconMap name="Search" size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;