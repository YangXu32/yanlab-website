
import React from 'react';
import { Link } from 'react-router-dom';

const People = () => {
  return (
    <main className="people-main-container" style={{ background: '#fff', marginTop: '1rem', minHeight: '60vh' }}>
      <div className="people-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', textAlign: 'center', padding: '3rem 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#232946', marginBottom: '2rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif' }}>People</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#475569' }}>
          Please select a section below:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to="/people/pi-yan" style={{ background: '#3b82f6', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(59,130,246,0.08)' }}>
            PI Yan
          </Link>
          <Link to="/people/our-team" style={{ background: '#64748b', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(100,116,139,0.08)' }}>
            Our Team
          </Link>
        </div>
      </div>
    </main>
  );
};

export default People;