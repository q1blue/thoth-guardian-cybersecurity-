import React from 'react';
import { Shield, Code, Cloud, Brain, AlertTriangle, PenTool as Tool, BookOpen, LayoutGrid, FileText, BookOpen as Guide, Film as Tutorial, FileBarChart as Reference, FileBox as Template, GitCompare as Comparison, Search, Menu, X, ChevronRight, ArrowLeft, Link, Share, Bookmark, Printer, Home } from 'lucide-react';

type IconName = 
  | 'Shield' 
  | 'Code' 
  | 'Cloud' 
  | 'Brain' 
  | 'AlertTriangle' 
  | 'Tool' 
  | 'BookOpen' 
  | 'LayoutGrid'
  | 'FileText'
  | 'Guide'
  | 'Tutorial'
  | 'Reference'
  | 'Template'
  | 'Comparison'
  | 'Search'
  | 'Menu'
  | 'X'
  | 'ChevronRight'
  | 'ArrowLeft'
  | 'Link'
  | 'Share'
  | 'Bookmark'
  | 'Printer'
  | 'Home';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const IconMap: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const icons: Record<IconName, React.ReactNode> = {
    Shield: <Shield size={size} className={className} />,
    Code: <Code size={size} className={className} />,
    Cloud: <Cloud size={size} className={className} />,
    Brain: <Brain size={size} className={className} />,
    AlertTriangle: <AlertTriangle size={size} className={className} />,
    Tool: <Tool size={size} className={className} />,
    BookOpen: <BookOpen size={size} className={className} />,
    LayoutGrid: <LayoutGrid size={size} className={className} />,
    FileText: <FileText size={size} className={className} />,
    Guide: <Guide size={size} className={className} />,
    Tutorial: <Tutorial size={size} className={className} />,
    Reference: <Reference size={size} className={className} />,
    Template: <Template size={size} className={className} />,
    Comparison: <Comparison size={size} className={className} />,
    Search: <Search size={size} className={className} />,
    Menu: <Menu size={size} className={className} />,
    X: <X size={size} className={className} />,
    ChevronRight: <ChevronRight size={size} className={className} />,
    ArrowLeft: <ArrowLeft size={size} className={className} />,
    Link: <Link size={size} className={className} />,
    Share: <Share size={size} className={className} />,
    Bookmark: <Bookmark size={size} className={className} />,
    Printer: <Printer size={size} className={className} />,
    Home: <Home size={size} className={className} />
  };

  return <>{icons[name]}</>;
};

export default IconMap;