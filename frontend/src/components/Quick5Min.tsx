import React from 'react';

const Quick5MinCard: React.FC<{
  title: string;
  description: string;
  iconEmoji: string;
  linkHref?: string;
  linkText?: string;
}> = ({ title, description, iconEmoji, linkHref, linkText }) => {
  return (
    <div className="quick5min-card">
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

const Quick5Min: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    <Quick5MinCard
                        title="Grow a Plant"
                        description="Taking care of a plant can help to believe in the process and nurture patience."
                        iconEmoji="🌱"
                    />
                    <Quick5MinCard
                        title="Spending time near Water"
                        description="Being near water can have a calming effect and lower stress levels."
                        iconEmoji="🌊"
                    />
                    <Quick5MinCard
                        title="Gratitude Check-in"
                        description="Take a moment to write down 3 things you are grateful for today."
                        iconEmoji="🌸"
                    />

                </div>

            </div>

      </section>
      );
    };

    export default Quick5Min;