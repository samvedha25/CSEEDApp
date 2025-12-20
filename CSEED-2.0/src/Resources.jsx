import React, { useState } from 'react';
import './App.css';

const miniGuides = [
  {
    id: 'calm60',
    title: 'How to calm down in 60 seconds',
    steps: [
      'Close your eyes and place a hand on your belly.',
      'Take one slow 4-count inhale.',
      'Hold for 2 counts, then 6-count exhale.',
      'Repeat twice and notice the body soften.'
    ]
  },
  {
    id: 'ground-overthinking',
    title: 'How to ground yourself when overthinking',
    steps: [
      'Pause and name 5 things you can see.',
      'Name 4 things you can touch, 3 you can hear.',
      'Slowly take three grounding breaths.',
      'Place feet flat and feel the floor under you.'
    ]
  },
  {
    id: 'daily-ritual',
    title: 'How to create a small daily ritual',
    steps: [
      'Choose a consistent time (morning or night).',
      'Pick 2 simple actions (tea, 1-min breath, write one thought).',
      'Anchor it to an existing habit (after brushing teeth).',
      'Keep it under 5 minutes to build consistency.'
    ]
  }
];

const moodResources = [
  {
    mood: 'Stressed',
    color: 'green',
    items: ['Breathing animations (4-6-8)', 'Short guided breathing video', 'Quick grounding visual']
  },
  {
    mood: 'Overwhelmed',
    color: 'yellow',
    items: ['Break tasks into one gentle task', '5-minute tidy ritual', 'Prioritize 3 items']
  },
  {
    mood: 'Sad',
    color: 'blue',
    items: ['Grounding audio tracks', 'Reflection prompts', 'Gentle movement suggestions']
  },
  {
    mood: 'Anxious',
    color: 'orange',
    items: ['Progressive muscle relaxation guide', 'Box-breathing practice', 'Short calming playlist']
  }
];

const Resources = () => {
  const [openGuide, setOpenGuide] = useState(null);

  return (
    <section className="resources-page">
      <div className="resources-container">
        <h2 className="resources-title">Resources</h2>
        <p className="muted">Mini guides and quick resources by mood to help you in the moment.</p>

        <div className="guides-section">
          <h3 className="section-sub">Mini Guides</h3>
          <div className="guides-grid">
            {miniGuides.map(g => (
              <div key={g.id} className="guide-card">
                <div className="guide-card-head">
                  <strong>{g.title}</strong>
                  <button className="guide-toggle" onClick={() => setOpenGuide(openGuide === g.id ? null : g.id)}>
                    {openGuide === g.id ? 'Hide' : 'Open'}
                  </button>
                </div>
                {openGuide === g.id && (
                  <ol className="guide-steps">
                    {g.steps.map((s, i) => <li key={i}>{s}</li>)}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mood-section">
          <h3 className="section-sub">Mood-by-Mood Resources</h3>
          <div className="mood-grid">
            {moodResources.map(m => (
              <div key={m.mood} className="mood-card">
                <div className={`mood-badge mood-${m.color}`}></div>
                <div className="mood-body">
                  <strong>{m.mood}</strong>
                  <ul>
                    {m.items.map((it, idx) => <li key={idx}>{it}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resources;
