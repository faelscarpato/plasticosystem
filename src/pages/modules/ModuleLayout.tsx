
import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

interface ModuleLayoutProps {
  title: string;
  children: ReactNode;
}

const ModuleLayout: React.FC<ModuleLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar title={title} />
        
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModuleLayout;
