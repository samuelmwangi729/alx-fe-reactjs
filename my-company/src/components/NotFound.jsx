import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f9f9f9',
    padding: '2rem',
  };

  const headingStyle = {
    fontSize: '6rem',
    margin: '0',
    color: '#ff6b6b',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  };

  const linkStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007BFF',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={subheadingStyle}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={linkStyle}>Go Back Home</Link>
    </div>
  );
};

export default NotFound;
