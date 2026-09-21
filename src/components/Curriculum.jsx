import { useEffect, useRef } from "react";

const curriculumItems = [
  {
    number: "01",
    title: "Agent architecture: goals, memory, tools, prompts",
    description:
      "How agents actually think: goals, memory, tools, prompts. Master this once and you can build any agent you can imagine, long after today's tools change.",
    tag: "FOUNDATION",
    type: "foundation",
  },
  {
    number: "02",
    title: "LinkedIn Content Agent - research → write → post",
    description:
      "Researches trending topics → writes the post → gets it ready to publish. Your first real agent, built by your own hands. (Our students' agents write the LinkedIn posts you'll see below. Unedited.)",
    tag: "Build with me",
    type: "build",
  },
  {
    number: "03",
    title: "Email & Proposal Agent",
    description:
      "Reads the enquiry, drafts the reply, generates the proposal. The agent every service business asks for first.",
    tag: "Build with me",
    type: "build",
  },
  {
    number: "04",
    title: "WhatsApp Support & Sales Agent",
    description:
      "Answers leads instantly, qualifies them, books calls. Businesses in India pay ₹50,000+ for exactly this one.",
    tag: "Build with me",
    type: "build",
  },
  {
    number: "05",
    title: "AI Voice Agent - human-like calls & summaries",
    description:
      "Takes calls, sounds human, captures details, writes the summary. Watch it built end-to-end, take the blueprint home.",
    tag: "Live build + blueprint",
    type: "live",
  },
  {
    number: "06",
    title: "Your AI Business OS - the skill of 2026",
    description:
      "Describe it in plain English, watch the software build itself. Walk out with a real app you can demo to a client on Monday.",
    tag: "Crown jewel",
    type: "crown",
  },
  {
    number: "07",
    title: "Build your first AI app / MVP - without code",
    description:
      "All your agents wired into one system, marketing, sales, support and ops working like a team that never sleeps.",
    tag: "Build with me",
    type: "build",
  },
  {
    number: "08",
    title: "Monetisation: pricing, packaging, finding your first buyer",
    description:
      "Exactly how people are getting paid for this: selling single agents, building the AI Business OS for clients, or launching your own SaaS. Pricing, positioning, where to find the first buyer.",
    tag: "Blueprint",
    type: "blueprint",
  },
  {
    number: "09",
    title: "Live Q&A until your questions run out",
    description: "",
    tag: "Open floor",
    type: "open",
  },
];

export default function Curriculum() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("curriculum-visible");
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
      className="curriculum-section"
      id="curriculum"
    >
      <div className="curriculum-container">

        <div className="curriculum-heading">
          <p className="curriculum-label">CURRICULUM</p>

          <h2>
            The complete 2-day build schedule
          </h2>
        </div>

        {/* DAY 1 */}

        <div className="curriculum-day-one">
          <h3>
            <span>DAY 1</span>
            <strong> · Self-paced · 3 hours · Watch anytime before Saturday</strong>
          </h3>

          <p>
            Recorded setup + Agentic AI foundations. Tool accounts, n8n setup,
            how agents think. Guided, step-by-step, beginner-proof. Come to
            Saturday ready to build instead of ready to install.
          </p>
        </div>

        {/* DAY 2 */}

        <div className="curriculum-day-two">

          <h3 className="curriculum-day-two-title">
            <span>DAY 2</span>
            <strong>
              {" "}
              · LIVE · Saturday Aug 29, 11:00 AM IST · 6+ hours on Zoom
            </strong>
          </h3>

          <div className="curriculum-timeline">
            {curriculumItems.map((item) => (
              <article
                className={`curriculum-item curriculum-item-${item.type}`}
                key={item.number}
              >
                <div className="curriculum-number">
                  {item.number}
                </div>

                <div className="curriculum-item-content">
                  <h4>{item.title}</h4>

                  {item.description && (
                    <p>{item.description}</p>
                  )}
                </div>

                <div className="curriculum-tag">
                  {item.type === "build" && (
                    <span className="tag-dot" />
                  )}

                  {item.type === "live" && <span>◉</span>}
                  {item.type === "crown" && <span>☆</span>}
                  {item.type === "blueprint" && <span>♙</span>}

                  {item.tag}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}