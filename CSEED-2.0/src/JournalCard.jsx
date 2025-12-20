import React from 'react';

const JournalCard = ({ entry, onDelete }) => {
  const date = new Date(entry.date).toLocaleDateString();
  return (
    <div className="journal-card">
      <div className="journal-card-date">{date}</div>
      <div className="journal-card-text">{entry.text}</div>
      <button className="journal-delete" onClick={() => onDelete(entry.id)}>Delete</button>
    </div>
  );
};

export default JournalCard;
