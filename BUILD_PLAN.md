# Speak Rando MVP Build Plan

## Product purpose

Speak Rando helps language learners start speaking earlier and with more confidence through short, structured speaking prompts.

## MVP scope

### Learners and learning settings

- Supported languages: English, Italian, Spanish, and German.
- Supported levels: A1, A2, B1, and B2.
- Every activity is available at every level. Recommendations can guide a learner but must never restrict access.

### Speaking activities

1. **Speaking Challenge** — speak for 30, 60, or 90 seconds.
2. **What Would You Do If…?**
3. **Explain Without Saying the Word.**
4. **Explain How to Do Something.**
5. **Choose, Compare & Defend.**

### Prompt shuffles and practice

- Prompts are selected from the database; the vertical scrolling shuffle is visual animation only.
- Free users receive three prompt shuffles per day across all activities. Pro users have unlimited shuffles.
- Generating a new prompt or skipping the current prompt consumes one shuffle. A failed generation does not consume one.
- Minimal progress tracking records whether the learner practiced today.

### Product flows

- Signup and authentication.
- Language and level selection.
- Home and practice flows.
- Profile and subscription flows.
- Admin flow for operational work.

### Platform and operations

- Supabase provides authentication and the database.
- Paddle handles international payments.
- Egyptian users can submit an Instapay payment for manual review.
- Admin capabilities include roles, moderation, subscription management, and audit logs.
- Mixpanel and Microsoft Clarity may be used for analytics, subject to privacy safeguards.

### Pricing and disclosures

Launch pricing is available through **December 31, 2026**:

| Market | Launch monthly price | Price after launch offer |
| --- | ---: | ---: |
| Egypt | EGP 200 | EGP 450 |
| International | $6 | $10 |

- The later price must be clearly disclosed before purchase.
- The launch price is not grandfathered.

### Explicit MVP exclusions

- AI speaking evaluation.
- Audio recording or playback.
- Shadowing.
- Leaderboards.
- Unnecessary gamification.

## Development roadmap

### Phase 1 — Foundation

- Confirm product decisions and data ownership.
- Establish Next.js conventions, environment handling, database migration workflow, and server-side authorization patterns.
- Define privacy safeguards and analytics consent requirements before analytics implementation.

### Phase 2 — Authentication and learner setup

- Implement Supabase authentication.
- Add signup and session handling.
- Build server-validated language and level preferences.
- Create the home/profile data model and minimal “practiced today” state.

### Phase 3 — Prompt library and core practice

- Model prompts by language, level, and activity in the database.
- Implement the five activity flows and level recommendations without access restrictions.
- Implement database-backed prompt selection and a purely visual shuffle animation.
- Enforce daily free shuffle limits and Pro unlimited access server-side.

### Phase 4 — Administration and moderation

- Add role-based admin access.
- Provide prompt moderation and management.
- Add subscription-management tools and immutable/reviewable audit logs.

### Phase 5 — Payments and subscriptions

- Integrate Paddle for international subscriptions.
- Implement Egyptian Instapay submission and secure manual-review workflow.
- Validate payment state, subscription status, price disclosures, and entitlement changes server-side.

### Phase 6 — Analytics and privacy

- Add Mixpanel and Microsoft Clarity only after privacy safeguards and consent requirements are decided.
- Track only the product events needed to evaluate activation, practice, and subscription flows.

### Phase 7 — Testing and deployment

- Test access control, shuffle enforcement, payment state changes, admin actions, and pricing disclosures.
- Run lint, type/build checks, and focused integration tests as the feature set grows.
- Prepare production environment configuration, migrations, monitoring, and a deployment checklist.

## Open questions

- **Daily shuffle reset rule:** What timezone and reset mechanism define a “day” for the three free shuffles?
- **Untimed activity completion:** What action or condition marks practice complete for activities without a timer?
- **Prompt generation wording:** Does “failed generation” refer solely to a database/query failure, or are there other generation paths planned?
- **Instapay review:** What evidence is submitted, who reviews it, and what approval/rejection states and notifications are required?
- **Subscription lifecycle:** What are the cancellation, retry, refund, and access-expiry rules for Paddle and manually reviewed Instapay payments?
- **Privacy safeguards:** What consent model, retention periods, and regional requirements govern Mixpanel and Microsoft Clarity?
