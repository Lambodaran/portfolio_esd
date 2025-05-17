
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-b from-white to-edu-secondary/10 rounded-xl">
          <h1 className="page-title mb-4">IT Industry and Career Paths</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Explore the fundamentals of the IT industry, discover various career paths, 
            and develop essential skills for your professional journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-edu-primary hover:bg-edu-primary/90">
              <Link to="/sessions">Explore Sessions</Link>
            </Button>
          </div>
        </section>

        {/* Module Overview */}
        <section>
          <h2 className="section-title">Module Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="subsection-title">Module Vision</h3>
              <p className="text-gray-700">
                This module aims to equip students with a comprehensive understanding of the IT industry landscape, 
                various career paths available, and the essential skills required to succeed in this fast-paced field. 
                Through expert-led sessions, students gain insights into both technical and soft skills, preparing them 
                for a successful career in IT or related fields.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="subsection-title">Learning Journey</h3>
              <p className="text-gray-700">
                Throughout this module, students will learn from industry experts, gain practical insights into 
                the IT profession, develop essential technical and soft skills, understand legal aspects of business, 
                and prepare for various career paths. Each session is designed to provide valuable knowledge and 
                practical takeaways that will help students in their professional development.
              </p>
            </Card>
          </div>
        </section>

        {/* Key Highlights */}
        <section>
          <h2 className="section-title">Key Module Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="module-card">
              <h3 className="subsection-title">Industry Insights</h3>
              <p>Learn directly from industry professionals about current trends, expectations, and opportunities.</p>
            </div>
            <div className="module-card">
              <h3 className="subsection-title">Career Guidance</h3>
              <p>Discover various career paths in IT and non-IT fields to help you make informed decisions.</p>
            </div>
            <div className="module-card">
              <h3 className="subsection-title">Skill Development</h3>
              <p>Develop technical and soft skills essential for career success in the modern workplace.</p>
            </div>
            <div className="module-card">
              <h3 className="subsection-title">Professional Networking</h3>
              <p>Learn how to build and maintain professional relationships that can advance your career.</p>
            </div>
            <div className="module-card">
              <h3 className="subsection-title">Business Fundamentals</h3>
              <p>Understand basic business concepts, including business law and entrepreneurship.</p>
            </div>
            <div className="module-card">
              <h3 className="subsection-title">Work-Life Balance</h3>
              <p>Learn strategies to manage stress and maintain health while pursuing your career goals.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-edu-primary text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Dive into our comprehensive sessions and discover insights that will shape your IT career journey.
          </p>
          <Button asChild className="bg-white text-edu-primary hover:bg-gray-100">
            <Link to="/sessions">View All Sessions</Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
