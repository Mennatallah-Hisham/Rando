const steps = [
  ["01", "Choose your language", "Start with English, Italian, Spanish, or German."],
  ["02", "Pick an activity", "Choose the kind of speaking practice you want today."],
  ["03", "Start speaking", "Follow the prompt and build confidence one attempt at a time."],
];

export function HowItWorks() {
  return (
    <section className="section section--soft" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="container how-it-works">
        <div className="section-heading">
          <p className="eyebrow">Simple by design</p>
          <h2 id="how-it-works-title">A small practice habit can go a long way.</h2>
        </div>
        <ol className="steps-list">
          {steps.map(([number, title, description]) => (
            <li className="step" key={number}>
              <span className="step__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
