
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8 pb-16">
        <div className="education-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
