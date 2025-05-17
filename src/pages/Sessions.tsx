
import React from 'react';
import Layout from '@/components/Layout';
import SessionCard from '@/components/SessionCard';
import { sessionsData } from '@/data/sessionsData';

const Sessions = () => {
  return (
    <Layout>
      <h1 className="page-title">Module Sessions</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        Explore our comprehensive sessions covering various aspects of IT careers, 
        industry expectations, and essential skills for professional success.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessionsData.map((session) => (
          <SessionCard
            key={session.id}
            id={session.id}
            date={session.date}
            title={session.title}
            instructor={session.instructor}
            summary={session.summary}
            images={session.images}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sessions;
