import { useEffect, useRef } from "react";

export default function RiskFree() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("risk-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="risk-section">
      <div className="risk-container">

        <h2 className="risk-heading">
          Decide by lunch. <span>Zero risk.</span>
        </h2>

        <p className="risk-text">
          Join live. Watch the first builds. Ask your questions. If by the
          lunch break you feel this wasn't worth your Saturday, tell us
          before the second half starts and we refund 100%. No questions.
          No form. No awkward email chain.
        </p>

        <p className="risk-text">
          We can offer this because out of 25,000+ students, almost nobody
          has ever asked.
        </p>

        <p className="risk-final">
          Your risk on this page is <span>₹0</span>. Your only real risk is{" "}
          <strong>another year of watching.</strong>
        </p>

      </div>
    </section>
  );
}