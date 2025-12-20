import React, { useState } from 'react';

const WelcomeSection = () => {
  const [message, setMessage] = useState('');

  const messages = [
    "Even on hard days, there is still light ahead. Let’s find it.",
    "Every journey begins with one gentle step. Here’s yours.",
    "Pause. Breathe. You are doing the best you can — and that is enough.",
    "Wherever you are today, start from there. You will get through."
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <section className="welcome-section">
      {/* background wrapper */}
      <div className="welcome-bg">
        <div className="welcome-content">
          <h1 className="welcome-title">
            Find Your <span style={{ color: 'var(--forest-light)' }}>Inner Joy</span>
          </h1>
          <p className="welcome-description">
            Begin your journey to calm and clarity with us today.
          </p>

          <button className="cta-button" onClick={handleClick}>
            Start Your Journey
          </button>

          {message && (
            <p className="journey-message" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
