import { activities } from "./data";

export function Activities() {
  return (
    <section className="section" id="activities" aria-labelledby="activities-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Five ways to practise</p>
          <h2 id="activities-title">Find a prompt that gets you talking.</h2>
          <p>Every activity is available across every level. Start with the one that feels right today.</p>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => (
            <article className={`activity-card ${activity.className}`} key={activity.number}>
              <span className="activity-card__number" aria-hidden="true">{activity.number}</span>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
