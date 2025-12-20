import React, { useState } from 'react';
import './App.css';

const tips = [
  'Look outside for 10 seconds and notice one calming thing.',
  'Place your hand on your heart and take one slow breath.',
  'Find three colors around you.'
];

const TryOutside = () => {
  const [tip, setTip] = useState(null);
  function suggest() {
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }
  return (
    <section className="try-outside-section">
      <div className="outside-box container">
        <h4>Try This Outside</h4>
        <p className="muted small">Quick, real-world mini practices to ground you.</p>
        <div className="outside-row">
          <button className="cta-button cta-small" onClick={suggest}>Suggest</button>
          <div className="outside-suggestion">{tip || 'Tap suggest for a mini activity'}</div>
        </div>
      </div>
    </section>
  );
};

export default TryOutside;
