import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="home__header">
        <div className="home__overlay"></div>
        <div className="home__hero-content">
          <h1 className="home__title">Welcome to <span>inSight</span></h1>
         
          <a href="#features" className="home__cta-button">Explore Features</a>
        </div>
      </header>

      {/* Content Section */}
      <section className="home__content" id="features">
        <h2 className="home__section-title">Your Smart Parking Solution</h2>
        <p className="home__section-description">
          With advanced <strong>License Plate Recognition (LPR)</strong>, real-time monitoring, and intuitive dashboards,
          we make parking secure, efficient, and hassle-free.
        </p>
        <div className="home__features">
          <div className="feature-card">
            <h3>Real-Time Monitoring</h3>
            <p>Monitor parking spaces and vehicle movement in real-time with cutting-edge technology.</p>
          </div>
          <div className="feature-card">
            <h3>Advanced Security</h3>
            <p>Ensure safety with accurate License Plate Recognition (LPR) and security integration.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Dashboard</h3>
            <p>Gain insights with an intuitive and user-friendly dashboard tailored to your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
