import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-purple-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EmpowerHer</h3>
            <p className="text-purple-200">
              Empowering women through community, resources, and support.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-200 hover:text-white">Home</Link></li>
              <li><Link to="/resources" className="text-purple-200 hover:text-white">Resources</Link></li>
              <li><Link to="/community" className="text-purple-200 hover:text-white">Community</Link></li>
              <li><Link to="/events" className="text-purple-200 hover:text-white">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-purple-200 mb-4">Stay updated with our latest news and events.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg md:w-[200px] w-full text-gray-800"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
          <p>&copy; 2024 EmpowerHer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;