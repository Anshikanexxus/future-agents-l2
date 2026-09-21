import { useEffect, useRef } from "react";

const benefits = [
  "3-hour foundation video, yours before Saturday",
  "Six hours live — building, not watching",
  "Your Business OS built on your real business: 12+ tools, agents running",
  "Setup guide, agent prompts, reusable templates",
  "25,000 premium LLM API tokens included",
  "Live Q&A — stuck mid-build, unstuck same session",
  "Participation certificate",
];

export default function SeatIncludes() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("seat-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="seat-section"
      id="seat"
    >
      <div className="seat-container">

        <h2 className="seat-heading">
          WHAT YOUR SEAT INCLUDES
        </h2>

        <div className="seat-card">

          <p className="seat-small-title">
            Your Free Seat
          </p>

          <h3 className="seat-free">
            FREE
          </h3>

          <p className="seat-price">
            ₹4,999 programme · FREE today · No card required
          </p>

          <p className="seat-for">
            For: I'll definitely be free all Saturday and I only want the
            live session.
          </p>

          <ul className="seat-benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span className="seat-check">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="seat-condition">
          <h3>
            One condition: You have to be there.
          </h3>

          <p>
            This runs live once. There are no recordings, no replay, no
            catch-up link. Block the Saturday or take the next cohort.
          </p>
        </div>

        <a href="#claim" className="seat-button">
          Claim My Free Seat <span>→</span>
        </a>

      </div>
    </section>
  );
}