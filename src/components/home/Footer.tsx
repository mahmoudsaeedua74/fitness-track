import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-black rounded mr-2"></div>
              <span className="font-bold text-xl">FITGURU</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Accusamus quos nesciunt veniam nam quis
            </p>
            <p className="text-gray-600 text-sm mb-4">shahshaan254@gmail.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">📘</a>
              <a href="#" className="text-gray-600 hover:text-black">🐦</a>
              <a href="#" className="text-gray-600 hover:text-black">📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Lorem Ipsum */}
          <div>
            <h3 className="font-semibold mb-4">Lorem Ipsum</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
            </ul>
          </div>

          {/* Lorem Ipsum 2 */}
          <div>
            <h3 className="font-semibold mb-4">Lorem Ipsum</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black text-sm">Lorem</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;