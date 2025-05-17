
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-edu-primary text-white py-8 mt-12">
      <div className="education-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">University Module Portfolio</h3>
            <p className="text-gray-300">
              A comprehensive guide to the IT Industry and Career Paths module.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/sessions" className="text-gray-300 hover:text-white transition-colors">Sessions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Northern University</p>
            <p className="text-gray-300">Email: module@university.edu</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} IT Industry and Career Paths Module. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
