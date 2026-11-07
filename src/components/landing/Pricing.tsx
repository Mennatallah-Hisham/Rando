export function Pricing() {
  return (
    <section className="section section--soft" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Simple launch pricing</p>
          <h2 id="pricing-title">Keep the conversation going.</h2>
          <p>Free learners can explore daily prompts. Pro unlocks unlimited shuffles.</p>
          <p className="pricing-launch-date">Launch offer ends December 31, 2026.</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <p className="price-card__label">Free</p>
            <p className="price-card__price"><strong>$0</strong><span>/ forever</span></p>
            <p>For trying the activities and building your first speaking habit.</p>
            <ul className="feature-list">
              <li>All five speaking activities</li>
              <li>Four languages, A1–B2 levels</li>
              <li>3 free prompt shuffles per day, shared across all activities</li>
            </ul>
            <a className="button button--outlined" href="#activities">Start for free</a>
          </article>
          <article className="price-card price-card--pro price-card--egypt">
            <p className="price-card__badge">Launch offer</p>
            <h3>Pro — Egypt <span role="img" aria-label="Egypt">🇪🇬</span></h3>
            <p className="price-card__price"><strong>EGP 200</strong><span>/ month</span></p>
            <p className="price-card__saving">Save EGP 250 with the launch price</p>
            <p className="price-card__standard">Standard price: EGP 450/month. Your subscription renews at the standard price after the launch offer. </p>
            <ul className="feature-list">
              <li>Unlimited prompt shuffles</li>
              <li>All five activities, four languages and levels A1–B2</li>
              <li>Instapay payment option with manual verification</li>
            </ul>
            <a className="button button--primary" href="#activities">Get unlimited shuffles</a>
          </article>
          <article className="price-card price-card--pro price-card--international">
            <p className="price-card__badge">Launch offer</p>
            <h3>Pro — International</h3>
            <p className="price-card__price"><strong>$6</strong><span>/ month</span></p>
            <p className="price-card__saving">Save $4 with the launch price</p>
            <p className="price-card__standard">Standard price: $10/month. Your subscription renews at the standard price after the launch offer.</p>
          
            <ul className="feature-list">
              <li>Everything in Free</li>
              <li>Unlimited prompt shuffles</li>
              <li>All five activities, all supported languages and levels</li>
              <li>Switch between saved language-level combinations</li>
            </ul>
            <a className="button button--primary" href="#activities">Get unlimited shuffles</a>
          </article>
        </div>
      </div>
    </section>
  );
}
