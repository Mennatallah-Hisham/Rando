import { faqItems } from "./data";

export function FrequentlyAskedQuestions() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="section-heading">
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title">Frequently asked questions.</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
