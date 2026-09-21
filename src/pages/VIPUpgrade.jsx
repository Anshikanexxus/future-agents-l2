import { useEffect, useRef } from "react";

const inclusions = [
  {
    title: "30 day access to recording",
    text: "Rewatch all sessions whenever you want. The methods stay with you, not just the live days.",
  },
  {
    title: "100,000 Premium LLM API Tokens",
    text: "OpenAI, Claude & Gemini — enough to build 5+ agents end-to-end",
  },
  {
    title: "Priority Support During Live Session",
    text: "Your questions answered first",
  },
  {
    title: "Pro Builder Certificate",
    text: "",
  },
];

export default function VIPUpgrade() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("vip-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="vip-section">
      <div className="vip-container">

        <div className="vip-badge">
          <span className="vip-dot"></span>
          One-time upgrade for registered attendees
        </div>

        <h1 className="vip-heading">
          <span>Your spot is saved.</span>
          <strong>Your access isn't.</strong>
        </h1>

        <div className="vip-card">

          <h2>THE VIP FAST PASS</h2>

          <div className="vip-inclusions">
            {inclusions.map((item) => (
              <div className="vip-inclusion" key={item.title}>
                <p className="vip-inclusion-title">
                  ✓ {item.title}
                </p>

                {item.text && (
                  <p className="vip-inclusion-text">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="vip-price">
            <span className="vip-current-price">₹499</span>

            <span className="vip-old-price">
              ₹6,495
            </span>
          </div>

          <p className="vip-saving">
            You save ₹5,996 (92% off)
          </p>

          <button className="vip-button">
            Yes — upgrade me to VIP for ₹499
          </button>

          <p className="vip-payment-note">
            All five inclusions unlock the moment payment clears
          </p>

        </div>

        <button className="vip-no-thanks">
          No thanks, take me to my free group access
        </button>

        <p className="vip-free-note">
          You'll still attend the live event and join the WhatsApp group.
        </p>

      </div>
    </section>
  );
}