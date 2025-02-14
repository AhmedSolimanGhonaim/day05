import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../css/Home.css'; 
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">E-Commerce Website</h1>
            <Button variant="light" size="lg" className="cta-button">
              <Link className='text-light text-decoration-none' to="/products">
                Explore Products
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}