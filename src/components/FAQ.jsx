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
      "",
  },
  {
    question: "What if I can't attend live?",
    answer:
      "",
  },
  {
    question: "I'm not sure I can keep up with a live build.",
    answer:
      "",
  },
  {
    question: "Can I really earn from this?",
    answer:
      "",
  },
  {
    question: "What do I need to have ready?",
    answer:
      "",
  },
  {
    question: "AI changes so fast, will this still be useful next year?",
    answer:
      "",
  },
  {
    question: "How is this different from every other AI course right now?",
    answer:
      "",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "",
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