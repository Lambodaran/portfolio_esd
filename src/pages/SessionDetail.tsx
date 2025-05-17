
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sessionsData } from '@/data/sessionsData';

const SessionDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const session = sessionsData.find(s => s.id === id);
  const currentIndex = sessionsData.findIndex(s => s.id === id);
  const prevSession = currentIndex > 0 ? sessionsData[currentIndex - 1] : null;
  const nextSession = currentIndex < sessionsData.length - 1 ? sessionsData[currentIndex + 1] : null;
  
  if (!session) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Session Not Found</h1>
          <p className="mb-6">Sorry, the requested session does not exist.</p>
          <Button asChild>
            <Link to="/sessions">Back to Sessions</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/sessions" className="text-edu-secondary hover:text-edu-primary flex items-center">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Sessions
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-edu-primary text-white px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{session.title}</h1>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm">
              {session.date}
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm">
              {session.instructor}
            </span>
          </div>
          <p className="text-xl text-white/90">{session.summary}</p>
        </div>
        
        <div className="p-6">
          <section className="mb-8">
            <h2 className="section-title">Overview</h2>
            <p className="text-gray-700">{session.overview}</p>
          </section>
          
          {/* Display images if available */}
          {session.images && session.images.length > 0 && (
            <section className="mb-8">
              <h2 className="section-title">Session Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {session.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image} 
                      alt={`${session.title} - Image ${index + 1}`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
          
          <section className="mb-8">
            <h2 className="section-title">Key Topics Covered</h2>
            <ul className="space-y-4">
              {session.keyTopics.map((topic, index) => (
                <li key={index}>
                  <Card className="p-4">
                    <h3 className="subsection-title">{topic.title}</h3>
                    {topic.items && (
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        {topic.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {topic.description && <p className="mt-2 text-gray-700">{topic.description}</p>}
                  </Card>
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="section-title">Key Takeaways</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {session.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="bg-edu-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-edu-primary">{takeaway.title}</h3>
                  <p className="text-gray-700">{takeaway.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Navigation between sessions */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {prevSession && (
          <Button variant="outline" asChild className="justify-start">
            <Link to={`/sessions/${prevSession.id}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous: {prevSession.title}
            </Link>
          </Button>
        )}
        {nextSession && (
          <Button variant="outline" asChild className="justify-end col-start-2">
            <Link to={`/sessions/${nextSession.id}`}>
              Next: {nextSession.title}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default SessionDetail;
