import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    icon: "👨‍💼",
    title: "Working professionals & IT folks",
  },
  {
    icon: "🚀",
    title: "Aspiring AI agency / AI startup founders",
  },
  {
    icon: "🏬",
    title: "Small business owners",
  },
  {
    icon: "👨‍💻",
    title: "Developers",
  },
  {
    icon: "👨‍💻",
    title: "Students & fresh graduates",
  },
  {
    icon: "💻",
    title: "Freelancers & agency owners",
  },
  {
    icon: "🏬",
    title: "Coaches, consultants & solopreneurs",
  },
];

export default function Audience() {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("audience-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="audience-section"
      id="who-this-is-for"
    >
      <div className="audience-container">
        <div className="audience-heading">
          <span className="audience-eyebrow">WHO THIS IS FOR</span>
        </div>

        <div className="audience-grid">
          {audiences.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`audience-card audience-card-${index + 1} ${
                activeCard === index ? "is-active" : ""
              }`}
              onClick={() =>
                setActiveCard(activeCard === index ? null : index)
              }
            >
              <span className="audience-icon">
                {item.icon}
              </span>

              <span className="audience-title">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}