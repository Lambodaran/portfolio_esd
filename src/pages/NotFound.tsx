
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold text-edu-primary mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button asChild className="bg-edu-primary hover:bg-edu-primary/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
