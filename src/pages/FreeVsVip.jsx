import { useEffect, useRef } from "react";

const comparisonRows = [
  ["Attend the live sessions", true, true],
  ["WhatsApp community access", true, true],
  ["Lifetime access to recordings", false, true],
  ["Extra VIP-only training day", false, true],
  ["Live doubt-clearing session", false, true],
  ["Personal 1-on-1 review", false, true],
  ["Notes and printable workbooks", false, true],
];

export default function FreeVsVip() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("comparison-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="comparison-section"
    >
      <div className="comparison-container">

        <div className="comparison-heading">
          <h2>FREE VS VIP</h2>
          <p>
            Everything the free ticket includes, plus what it doesn't.
          </p>
        </div>

        <div className="comparison-table">

          <div className="comparison-header">
            <div>What you get</div>
            <div>Free</div>
            <div>VIP</div>
          </div>

          {comparisonRows.map(([title, free, vip]) => (
            <div className="comparison-row" key={title}>
              <div className="comparison-feature">
                {title}
              </div>

              <div className="comparison-status">
                {free ? "✓" : "—"}
              </div>

              <div className="comparison-status">
                {vip ? "✓" : "—"}
              </div>
            </div>
          ))}

          <div className="comparison-price-row">
            <div className="comparison-feature">
              Price
            </div>

            <div className="comparison-price">
              ₹0
            </div>

            <div className="comparison-price">
              ₹499
            </div>
          </div>

        </div>

        <a href="#vip" className="comparison-button">
          Upgrade to VIP — ₹499
        </a>

        <p className="comparison-payment">
          UPI · Cards · Netbanking · Wallets
        </p>

      </div>
    </section>
  );
}