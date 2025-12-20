import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TryOutside from './TryOutside';

const sessions = [
  {
    id: 'shoulders',
    title: 'Drop Your Shoulders (1 min) 🌿',
    duration: 60,
    steps: [
      'Stand or sit tall. Take a slow breath in.',
      "As you exhale, imagine your shoulders releasing like leaves dropping from a branch.",
      'Repeat this slow inhale-exhale cycle while feeling the weight melt away.'
    ]
  },
  {
    id: 'grounding-steps',
    title: 'Grounding Steps (30 sec) 👣',
    duration: 30,
    steps: [
      'Stand and take ten slow steps in place or around a small area.',
      'With each step, imagine roots growing from your feet into the earth, grounding you.',
      'Breathe gently and feel each step connect you to the ground.'
    ]
  },
  {
    id: 'reach-tree',
    title: 'Reach like a Tree (45 sec) 🌳',
    duration: 45,
    steps: [
      'Stand tall. Inhale and slowly raise your arms as if you are tree branches reaching sunlight.',
      'Hold for a breath, feeling the stretch and openness in your chest.',
      'Exhale as you soften your arms and return to neutral.'
    ]
  }
];

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(1, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

const Meditate = () => {
  const [active, setActive] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef(null);
  const stepIndexRef = useRef(0);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function startSession(session) {
    clearInterval(intervalRef.current);
    setActive(session.id);
    setTimeLeft(session.duration);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setActive(null);
          return 0;
        }
        // advance step every chunk of time
        return prev - 1;
      });
    }, 1000);
  }

  function stopSession() {
    clearInterval(intervalRef.current);
    setActive(null);
    setTimeLeft(0);
  }

  

  const activeSession = sessions.find(s => s.id === active);
  const currentStep = activeSession ? Math.min(activeSession.steps.length - 1, Math.floor(((activeSession.duration - timeLeft) / activeSession.duration) * activeSession.steps.length)) : 0;

  return (
    <>
      <section className="meditate-page">
        <div className="meditate-container">
  <h2 className="meditate-title">Meditate with Movement ✨</h2>
  <p className="muted">Short, embodied practices to bring calm and presence.</p>
  <p className="muted">Try the prompts gently — move only what feels comfortable.</p>

        <div className="meditate-layout">
          <div className="meditate-left">
            <TryOutside />
          </div>

          <div className="meditate-right">
            <div className="sessions-grid">
              {sessions.map(s => (
                <div key={s.id} className="session-card">
                  <h3>{s.title}</h3>
                  <p className="muted small">{s.steps[0]}</p>
                  <div className="session-controls">
                    <button className="cta-button cta-small" onClick={() => startSession(s)}>Start</button>
                  </div>
                </div>
              ))}
            </div>

            {activeSession && (
              <div className="session-active">
                <h3>{activeSession.title}</h3>
                <div className="session-timer">{formatTime(timeLeft)}</div>
                <p className="session-step">{activeSession.steps[currentStep]}</p>
                <div>
                  <button className="cta-button cta-small" onClick={stopSession}>Stop</button>
                </div>
              </div>
            )}
          </div>
        </div>

        </div>
      </section>

        
      
    </>
  );
};

export default Meditate;
