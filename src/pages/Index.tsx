import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Phone, MapPin, Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Personal Introduction Section */}
        <section className="bg-gradient-to-r from-edu-primary/10 to-edu-secondary/10 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src="/uploads/profile.jpeg" alt="Vinayagamurthi Lambodaran" />
                <AvatarFallback className="text-2xl font-bold bg-edu-primary text-white">VL</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-edu-primary mb-2">Vinayagamurthi Lambodaran</h1>
              <p className="text-xl text-edu-secondary mb-4">Fullstack Developer Intern</p>
              
              <div className="bg-white/80 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-edu-primary mb-3">Profile Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am pursuing a degree in Software Engineering at the University of Bedfordshire at SLIIT Northern Uni. 
                  I have a good understanding of programming, system design, and software development. I am eager to apply 
                  my knowledge to real-world problems. With my passion for learning and innovation, I aim to grow in 
                  fast-changing, technology-driven environments.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+94770180881</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Veerapathirajan, Karanavai South</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a 
                    href="mailto:vinajagamoorthylambotharan@gmail.com"
                    className="hover:text-edu-primary transition-colors"
                  >
                    vinajagamoorthylambotharan@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-edu-secondary">
                  <Linkedin className="w-4 h-4" />
                  <a 
                    href="https://www.linkedin.com/in/lambodaran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-edu-primary transition-colors"
                  >
                    LinkedIn: /lambodaran
                  </a>
                </div>
                <div className="flex items-center gap-2 text-edu-secondary">
                  <Github className="w-4 h-4" />
                  <a 
                    href="https://github.com/Lambodaran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-edu-primary transition-colors"
                  >
                    GitHub: Lambodaran
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-b from-white to-edu-secondary/10 rounded-xl">
          <h2 className="page-title mb-4">IT Industry and Career Paths</h2>
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

        {/* Academic & Technical Background */}
        <section>
          <h2 className="section-title">Academic & Technical Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="subsection-title">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-edu-primary">BSc (Hons) in Software Engineering</h4>
                  <p className="text-gray-600">University of Bedfordshire at SLIIT Northern Uni</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="subsection-title">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-edu-secondary">Languages:</h4>
                  <p className="text-sm text-gray-600">Java, Python, HTML, CSS, SQL, PHP, C++</p>
                </div>
                <div>
                  <h4 className="font-semibold text-edu-secondary">Frameworks:</h4>
                  <p className="text-sm text-gray-600">Bootstrap</p>
                </div>
                <div>
                  <h4 className="font-semibold text-edu-secondary">Tools:</h4>
                  <p className="text-sm text-gray-600">Visual Studio Code, Eclipse, NetBeans, Android Studio, Figma, RStudio, XAMPP</p>
                </div>
              </div>
            </Card>
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