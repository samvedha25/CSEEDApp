import React, { useEffect, useState } from 'react';
import JournalCard from './JournalCard';
import './App.css';

const STORAGE_KEY = 'journalEntries';

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setEntries(JSON.parse(raw));
      } catch (e) {
        console.error('Failed to parse journal entries', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  function addEntry() {
    if (!text.trim()) return;
    const newEntry = { id: uid(), date, text: text.trim() };
    setEntries([newEntry, ...entries]);
    setText('');
  }

  function deleteEntry(id) {
    setEntries(entries.filter(e => e.id !== id));
  }

  return (
    <section className="journal-page">
      <div className="journal-container">
  <h2 className="journal-title">Calm Journal 🌿</h2>
        <p className="journal-sub">Write a short reflection — the act of noting helps.</p>

        <div className="journal-form">
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          <textarea
            placeholder="Write a few sentences..."
            value={text}
            onChange={e => setText(e.target.value)}
            rows={4}
          />
          <div>
            <button className="cta-button cta-small" onClick={addEntry}>Add Entry</button>
          </div>
        </div>

        <div className="journal-list">
          {entries.length === 0 && <p className="muted">No entries yet — try writing one.</p>}
          {entries.map(entry => (
            <JournalCard key={entry.id} entry={entry} onDelete={deleteEntry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
