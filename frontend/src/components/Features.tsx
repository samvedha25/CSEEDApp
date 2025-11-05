import React from 'react';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  iconEmoji: string;
  linkHref?: string;
  linkText?: string;
}> = ({ title, description, iconEmoji, linkHref, linkText }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{iconEmoji}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {linkHref && linkText && (
        <a
          className="feature-link"
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          <FeatureCard
            title="Daily Meditation"
            description="Find peace with guided meditation sessions designed for every experience level."
            iconEmoji="🧘‍♀️"
          />
          <FeatureCard
            title="Mindful Journaling"
            description="Express your thoughts and feelings in a private, therapeutic space."
            iconEmoji="📔"
          />
          <FeatureCard
            title="Walks in Nature"
            description="Explore the outdoors with guided nature walks to rejuvenate your mind and body."
            iconEmoji="🌿"
            linkHref="https://magazine.hms.harvard.edu/articles/walk-woods-may-boost-mental-health"
            linkText="Harvard Medical School — Benefits of the Environment"
          />

        </div>
      </div>
    </section>
  );
};

export default Features;