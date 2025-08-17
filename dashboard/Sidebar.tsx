import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  Calendar,
  Settings,
  BarChart2,
  HelpCircle,
  LogOut
} from 'lucide-react';

const SidebarLink = ({ to, icon: Icon, children }: {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg
      ${isActive 
        ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
        : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
      }
    `}
  >
    <Icon className="h-5 w-5" />
    {children}
  </NavLink>
);

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-sidebar-background border-r border-sidebar-border">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          {/* <h1 className="text-xl font-bold text-sidebar-primary">Nova Nest</h1> */}
        <svg width="162" height="36" viewBox="0 0 162 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.921 34.9259L0.202271 0.941566H7.91711L15.1437 26.3322L21.7843 3.48063C22.1749 1.82047 23.2491 0.941566 25.2023 0.941566H30.1827L18.5616 34.9259H11.921ZM33.5031 0.941566H36.921C39.0695 0.941566 40.1437 2.01579 40.1437 4.16422V6.11735H33.5031V0.941566ZM33.5031 8.4611H36.921C39.0695 8.4611 40.1437 9.53532 40.1437 11.6838V34.9259H33.5031V8.4611ZM66.5109 34.9259H63.0929C60.8468 34.8283 59.7726 33.7541 59.7726 31.6056V18.0314C59.5773 15.297 58.1124 13.9298 55.1827 13.9298C52.2531 13.9298 50.6906 15.297 50.6906 18.0314V34.9259H43.9523V19.3986C43.9523 11.8791 47.6632 8.07047 55.2804 8.07047C62.7999 8.07047 66.5109 11.8791 66.5109 19.3986V34.9259Z" fill="#088597"/>
<path d="M70.0265 24.2814H76.7648C76.9601 27.8947 79.3038 29.6525 83.796 29.6525C88.1906 29.6525 90.339 28.2853 90.339 25.4533C90.339 23.8908 89.2648 22.7189 87.214 22.133C85.1632 21.547 82.9171 20.9611 80.4757 20.2775C73.8351 18.6173 70.5148 15.4923 70.5148 11.0002C70.6124 3.87125 74.9093 0.355629 83.3077 0.355629C91.3156 0.355629 95.5148 3.87125 95.9054 10.9025H91.9991C90.5343 10.9025 89.4601 10.3166 88.8741 8.94938C87.7023 6.99625 85.6515 6.01969 82.7218 6.01969C79.1085 6.11735 77.2531 7.48454 77.1554 10.0236C77.1554 12.172 79.3038 13.7345 83.796 14.7111C86.3351 15.297 88.9718 16.0783 91.9015 17.0548C95.6124 18.422 97.4679 21.1564 97.2726 25.4533C96.882 32.0939 92.3898 35.4142 83.796 35.4142C74.8116 35.4142 70.2218 31.7033 70.0265 24.2814ZM117.097 15.9806C116.023 14.7111 114.655 14.0275 112.995 14.0275C111.14 14.0275 109.773 14.7111 108.796 15.9806C107.819 17.3478 107.331 19.2033 107.331 21.3517V34.9259H100.691V0.941566H104.011C106.159 0.941566 107.331 2.11344 107.331 4.26188V12.172C110.651 8.26579 114.851 7.19157 119.831 8.94938C123.542 10.3166 125.3 13.9298 125.105 19.5939V34.9259H118.464V21.3517C118.464 18.8127 117.976 17.0548 117.097 15.9806ZM128.523 0.941566H131.941C134.089 0.941566 135.163 2.01579 135.163 4.16422V6.11735H128.523V0.941566ZM128.523 8.4611H131.941C134.089 8.4611 135.163 9.53532 135.163 11.6838V34.9259H128.523V8.4611ZM145.612 18.8127L153.816 9.43766H161.823L152.644 19.2033L161.921 34.9259H153.913L149.226 26.2345C148.347 24.7697 147.468 23.9884 146.687 23.9884C145.905 24.1838 145.612 24.5744 145.612 25.258V34.9259H138.972V0.941566H142.39C143.171 0.941566 143.952 1.33219 144.636 1.91813C145.222 2.50407 145.612 3.28532 145.612 4.16422V18.8127Z" fill="black"/>
</svg>

        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          <SidebarLink to="/" icon={Home}>Dashboard</SidebarLink>
          <SidebarLink to="/team" icon={Users}>Team</SidebarLink>
          <SidebarLink to="/schedule" icon={Calendar}>Schedule</SidebarLink>
          <SidebarLink to="/analytics" icon={BarChart2}>Analytics</SidebarLink>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-sidebar-border space-y-1">
          <SidebarLink to="/settings" icon={Settings}>Settings</SidebarLink>
          <SidebarLink to="/help" icon={HelpCircle}>Help Center</SidebarLink>
          <button 
            onClick={() => {/* Implement logout */}} 
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg w-full text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;