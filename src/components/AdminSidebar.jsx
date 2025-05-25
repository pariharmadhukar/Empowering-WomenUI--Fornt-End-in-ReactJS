import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaCalendar, FaBook, FaCog } from 'react-icons/fa';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin/dashboard', icon: FaUsers, label: 'Dashboard' },
    { path: '/admin/users', icon: FaUsers, label: 'Users' },
    { path: '/admin/resources', icon: FaBook, label: 'Resources' },
    { path: '/admin/events', icon: FaCalendar, label: 'Events' },
    { path: '/admin/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-purple-800 text-white p-4">
      <div className="text-2xl font-bold mb-8">Admin Panel</div>
      <nav>
        {menuItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center p-3 mb-2 rounded ${
              location.pathname === path ? 'bg-purple-900' : 'hover:bg-purple-700'
            }`}
          >
            <Icon className="mr-3" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;