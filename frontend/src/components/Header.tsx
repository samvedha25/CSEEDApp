import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="container header-nav">
        <h1 className="header-logo">You Will Get Through It</h1>
        <div className="header-nav-links">
          <a href="/">Home</a>
          <a href="/meditate">Meditate</a>
          <a href="/journal">Journal</a>
          <a href="/resources">Resources</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;