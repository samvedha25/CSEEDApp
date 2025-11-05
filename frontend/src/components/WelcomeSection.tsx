import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <h1 className="welcome-title">
            Find Your <span style={{ color: 'var(--forest-light)' }}>Inner Joy</span>
          </h1>
          <p className="welcome-description">
            Begin your journey to calm and clarity with us today.
          </p>
          <button className="cta-button">
            Start Your Journey
          </button>

          <button className="cta-button">
            Quick 5 Minutes
          </button>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;