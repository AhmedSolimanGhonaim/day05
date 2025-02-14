import React from 'react';
import '../css/NotFound.css'; 
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title"> Oops! Page Not Found </h1>
        <p className="not-found-message">
          The page you are looking for might have been removed, or the link is incorrect.
        </p>
        <Link className="home-button" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}