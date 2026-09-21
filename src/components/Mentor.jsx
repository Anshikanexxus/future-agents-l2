import { useEffect, useRef } from "react";

export default function Mentor() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("mentor-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mentor-section">
      <div className="mentor-container">

        <div className="mentor-heading">
          <p className="mentor-label">MEET YOUR MENTOR</p>

          <h2>
            You're learning from someone{" "}
            <span>who runs this,</span>
            <br />
            not someone who reads about it.
          </h2>
        </div>

        <div className="mentor-content">

          <div className="mentor-image-wrapper">

            <div className="mentor-corner mentor-corner-tl" />
            <div className="mentor-corner mentor-corner-tr" />
            <div className="mentor-corner mentor-corner-bl" />
            <div className="mentor-corner mentor-corner-br" />

            <img
              src="/Users/anshika/Desktop/future-agents-l2/public/ mentor.png"
              alt="Pritam Nagrale"
              className="mentor-image"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: 1,
                visibility: "visible"
              }}
            />
          </div>

          <div className="mentor-info">

            <h3>Pritam Nagrale</h3>

            <p className="mentor-role">
              Founder & CEO, Future Agents
            </p>

            <p className="mentor-intro">
              20+ years in digital business. 200,000+ students since 2005.
              25,000+ trained live in AI. ₹45 Cr+ generated for clients using
              AI agents. Ratan Tata Business Excellence Awardee.
            </p>

            <p className="mentor-description">
              Pritam isn't a course seller who discovered AI last year. He runs
              a 7-figure AI automation business, ships production agents for
              enterprise clients, and teaches only what's already running in
              real systems - his own and his clients'.
            </p>

            <div className="mentor-stats">

              <div className="mentor-stat">
                <strong>206K</strong>
                <span>YouTube subscribers</span>
              </div>

              <div className="mentor-stat">
                <strong>52.6K</strong>
                <span>Instagram followers</span>
              </div>

              <div className="mentor-stat">
                <strong>4.8★</strong>
                <span>across 16,000+ reviews</span>
              </div>

            </div>

            <p className="mentor-specialisms">
              Specialisms: Custom AI agents · Voice AI systems · Marketing
              automation · Backend process automation · AI strategy consulting
            </p>

            <p className="mentor-footer">
              Featured across podcasts, radio and news platforms · Corporate
              trainer and speaker at premier colleges · Ran a 156-attendee live
              event at Radisson Blu, Pune
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
