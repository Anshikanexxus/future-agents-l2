export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Live Cohort · Saturday, Aug 29, 2026 · 11 AM IST
        </div>

        <h1 className="hero-title">
          Build Your Business OS
          <br />
          With <span>12+ AI Tools</span> In
          <br />
          One Saturday
        </h1>

        <p className="hero-description">
          Not a tools tour. You'll build a working system that drafts your
          proposals, chases your follow-ups, pulls your reports and produces
          your content, set up live, on your business, before the day ends.
          25,000+ builders have done it. Most say the first week back paid for
          the Saturday.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-icon">🧑‍🤝‍🧑</span>
            <div>
              <strong>25,000+</strong>
              <span>Builders trained</span>
            </div>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-icon">🏆</span>
            <div>
              <strong>Ratan Tata</strong>
              <span>Business Excellence Awardee</span>
            </div>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-icon">⭐</span>
            <div>
              <strong>4.8/5</strong>
              <span>(16,000+ reviews)</span>
            </div>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-icon">🚫</span>
            <div>
              <strong>Zero coding</strong>
              <span>Required</span>
            </div>
          </div>
        </div>

        <a href="#seat" className="hero-button">
          Claim My Free Seat <span>→</span>
        </a>

        <p className="hero-note">
          Free. No card required. Instant access to the 3-hour pre-work.
          <br />
          Live only, no recordings. Only [X] seats left.
        </p>

        <a href="#curriculum" className="hero-bottom-link">
          See everything you'll build <span>↓</span>
        </a>
      </div>
    </section>
  );
}