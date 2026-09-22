import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Do I need coding or a technical background?",
    answer:
      "None. Zero. We use no-code tools, n8n, Make.com, Vapi, ManyChat. If you can use a smartphone and follow steps on a screen, you can build every agent in this bootcamp. Most of our best builders come from sales, HR, teaching and small business, not engineering.",
  },
  {
    question: "What exactly will I own when it's over?",
    answer:
      "The AI Business OS architecture, a working LinkedIn content agent, an email & proposal agent, a WhatsApp support & sales agent, a live-built AI app, the voice agent blueprint, plus every prompt and template we use. Yours, running, on your accounts.",
  },
  {
    question: "What if I can't attend live?",
    answer:
      "Get the Pro Builder Pass (₹999) 30 days of full recordings. Watch every build at your own pace and still finish all five agents. The Live Pass has no recordings, so if your Saturday is uncertain, Pro Builder is the safer choice.",
  },
  {
    question: "I'm not sure I can keep up with a live build.",
    answer:
      "Day 1's recorded setup gets everyone to the same starting line before Saturday. During the live session we build one step at a time and wait. And with the Pro Builder Pass you can rewind any moment for 30 days.",
  },
  {
    question: "Can I really earn from this?",
    answer:
      "The skills are in demand, businesses pay ₹50,000–₹5,00,000 for the kind of systems you'll learn to build, and we teach the exact monetisation blueprint. What you earn depends on the work you put in after Saturday. We give you the skill and the map, not a guarantee.",
  },
  {
    question: "What do I need to have ready?",
    answer:
      "A laptop, stable internet, and about 3 hours before Saturday for the pre-work. Free-tier tool accounts (we walk you through setup) and the LLM API tokens included in your pass. No extra spend needed to complete the builds.",
  },
  {
    question: "AI changes so fast, will this still be useful next year?",
    answer:
      "We teach agent architecture, not one tool's menu. The tools will change; goals, memory, tools and orchestration won't. That's why we lead with the thinking and use the tools as the vehicle.",
  },
  {
    question: "How is this different from every other AI course right now?",
    answer:
      "Most teach prompting. We teach building. Ours is a live build session where you construct working systems alongside a mentor who runs an AI automation business, not a lecture with a slide deck.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes 100%, no questions, requested any time before the lunch break on live day.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("faq-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="faq-section" id="faq">
      <div className="faq-container">

        <div className="faq-heading">
          <h2>FAQ</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}