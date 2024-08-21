import { SideNavbar } from '@/components/SideNavbar';
import { cn } from '@/lib/utils';
import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const Dashboardlayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <>
    <div className="min-h-screen w-full bg-white text-black flex">
        {/* SideNavbar */}
        <SideNavbar />
        {/* main page */}
        <div className="w-full max-h-screen overflow-auto">{props.children}</div>
      </div>
    
    </>
  )
}

export default Dashboardlayout;