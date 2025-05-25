import React from 'react';
import { FaUsers, FaCalendar, FaBook, FaCog, FaTachometerAlt, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const menuItems = [
    { path: '/admin/dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
    { path: '/admin/users', icon: FaUsers, label: 'Users' },
    { path: '/admin/resources', icon: FaBook, label: 'Resources' },
    { path: '/admin/events', icon: FaCalendar, label: 'Events' },
    { path: '/admin/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidde ">
     
      <div className="fixed inset-y-0 left-0 w-64 bg-purple-800 text-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-purple-700">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-300 hover:bg-purple-700 hover:text-white'
                  }`
                }
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

     
      <div className="flex-1 ml-64 fixed inset-y-0 left-0 w-full shadow-lg ">
        
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin User</span>
            </div>
          </div>
        </header>
        <main className="p-8 overflow-y-auto  h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;