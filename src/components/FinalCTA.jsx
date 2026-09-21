import { useEffect, useRef } from "react";

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("final-cta-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="final-cta-section">
      <div className="final-cta-container">

        <p className="final-cta-eyebrow">
          Saturday, Aug 29. Six hours. Five agents.
        </p>

        <h2 className="final-cta-heading">
          Two kinds of people will read this. One will bookmark it.
          <br />
          The other will spend Saturday building. Guess which
          <br />
          one has a{" "}
          <span>business running on AI by Monday</span>
        </h2>

        <p className="final-cta-subtext">
          <span>25,000+</span> Indians have already crossed that line.
        </p>

        <div className="final-cta-info">
          <div>🎁 ₹4,999 programme, free</div>
          <div>✅ Only [64] seats left</div>
          <div>⏰ 00:00:00</div>
        </div>

        <a href="#seat" className="final-cta-button">
          Claim My Free Seat <span>→</span>
        </a>

        <p className="final-cta-note">
          Instant access to the 3-hour pre-work
        </p>

      </div>
    </section>
  );
}