import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    icon: "/working-professionals.png",
    title: "Working professionals & IT folks",
  },
  {
    icon: "/ai-founders.png",
    title: "Aspiring AI agency / AI startup founders",
  },
  {
    icon: "/small-business-owners.png",
    title: "Small business owners",
  },
  {
    icon: "/developers.png",
    title: "Developers",
  },
  {
    icon: "/students-graduates.png",
    title: "Students & fresh graduates",
  },
  {
    icon: "/freelancers-agency-owners.png",
    title: "Freelancers & agency owners",
  },
  {
    icon: "/coaches-consultants-solopreneurs.png",
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
                <img
                  src={item.icon}
                  alt=""
                  className="audience-icon-image"
                />
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