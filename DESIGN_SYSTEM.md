# Speak Rando Design System

> This document is the authoritative visual reference for implementing Speak Rando. It complements [BUILD_PLAN.md](BUILD_PLAN.md), which remains the product source of truth. Do not change an **APPROVED** specification without product approval.

## Decision labels

- **APPROVED** — explicitly decided for Speak Rando.
- **PROPOSED** — recommended default; obtain approval before treating it as fixed product direction.
- **OPEN** — needs a product or design decision.

## 1. Design philosophy

- **APPROVED:** Speak Rando is bright, light, friendly, playful, approachable, modern, and engaging.
- **APPROVED:** The experience should make learners comfortable speaking early. It must feel fun without becoming visually overwhelming.
- **APPROVED:** Use white primary surfaces, warm off-white secondary surfaces, soft pastel cards, generous whitespace, rounded components, and occasional colourful decorative elements.
- **APPROVED:** Do not use real human photography.
- **PROPOSED:** Use a calm, focused practice interface: decoration belongs at page and section level, while prompts and controls remain visually quiet and easy to scan.

## 2. Brand identity and assets

### Source assets

| Asset | Intended role | Status |
| --- | --- | --- |
| `Assets/brand/Rando Logo - Transparent.svg` | Primary logo | **APPROVED:** use the original asset without colour, gradient, filename, or content changes. |
| `Assets/Illustrations/line-1.svg`–`line-16.svg` | Decorative line flourishes | **APPROVED:** decorative only; never functional icons. |
| `Assets/inspiration/refrence 4.png` | Primary layout and visual-structure reference only | **APPROVED:** do not reproduce its human-photo elements. |
| `Assets/inspiration/refrence 3.png` | Secondary reference for learning layouts and cards | **APPROVED** |
| `Assets/inspiration/inspo 4.png`, `Assets/inspiration/refrence 2.png` | Occasional inspiration | **APPROVED** |

### Logo

- **APPROVED:** Preserve the logo’s original colours and gradients.
- **APPROVED:** Logo colours are dominant orange `#F5AB2A`, supporting yellow `#F8C954`, vivid yellow/lime `#E5E900`, teal approximately `#018FA6`, and coral approximately `#FE696E`.
- **APPROVED:** The orange logo represents brand identity. The blue interaction colour does not need to appear in the logo.
- **PROPOSED:** Give the logo clear space equal to at least the height of its looping mark; use it at a size where the wordmark remains legible rather than treating it as a generic icon.

## 3. Color palette and semantic color rules

### Approved palette

| Semantic purpose | Token suggestion | Value | Status |
| --- | --- | ---: | --- |
| Main background | `background-primary` | `#FFFFFF` | **APPROVED** |
| Secondary background | `background-secondary` | `#FAF8F2` | **APPROVED** |
| Primary button / product interaction | `action-primary` | `#2B4BFF` | **APPROVED** |
| Accent button | `action-accent` | `#FF952B` | **APPROVED** |
| Secondary button | `action-secondary` | `#000000` | **APPROVED** |
| Main text | `text-primary` | `#000000` | **APPROVED** |
| Supporting text | `text-secondary` | `#666666` | **APPROVED** |
| Secondary metadata | `text-metadata` | `#999999` | **APPROVED** |
| Borders and shadows | `surface-soft` | `#FAF8F2` | **APPROVED** |

### Brand colour rules

- **APPROVED:** Orange represents brand identity, blue represents product interaction, pastels represent activities/content categories, and neutrals provide structure and readability.
- **APPROVED:** Use solid blue, not gradient, primary buttons.
- **APPROVED:** Use `#000000` for primary reading text, `#666666` for supporting text, and `#999999` for secondary metadata. Verify text contrast, especially on pastel backgrounds.
- **PROPOSED:** Use blue for a single dominant action in a view. Orange should support brand moments, promotional emphasis, or a deliberately selected accent action—not compete with every primary button.

### Approved complementary pastels

These light colours are approved for card/background use.

| Name | Approved value | Best use |
| --- | ---: | --- |
| Soft blue | `#E7F3FF` | Calm information and Speaking Challenge |
| Soft orange | `#FFF0DE` | Conversation and scenario prompts |
| Soft lavender | `#F0EAFF` | Wordplay and explanation tasks |
| Soft green | `#E8F8E8` | How-to and progress-oriented content |
| Soft yellow | `#FFF7D6` | Comparison/decision tasks |
| Soft pink | `#FBE8F4` | Supporting highlights, tags, and decorative compositions |

- **APPROVED:** Verify text contrast when applying any pastel surface.

## 4. Typography system

- **APPROVED:** Outfit is the only interface and marketing font family.
- **APPROVED:** All headings and body text use Outfit.

### Approved heading scale

| Element | Size | Weight | Primary role |
| --- | ---: | --- | --- |
| H1 | 64px desktop; 48px tablet; 36px mobile | Semi-bold | Marketing/landing-page headline |
| H2 | 42px | Semi-bold | Major section heading |
| H3 | 38px | Semi-bold | Major in-page group heading |
| H4 | 28px | Semi-bold | Card group or prominent screen heading |
| H5 | 24px | Semi-bold | Card/title heading |
| H6 | 20px | Semi-bold | Compact section/card heading |

### Text hierarchy

| Element | Size | Weight | Line height | Status |
| --- | ---: | --- | ---: | --- |
| Display / H1 | 64px desktop; 48px tablet; 36px mobile | Semi-bold | 1.08 | **APPROVED** |
| H2 | 42px | Semi-bold | 1.14 | **APPROVED** |
| H3 | 38px | Semi-bold | 1.16 | **APPROVED** |
| H4 | 28px | Semi-bold | 1.22 | **APPROVED** |
| H5 | 24px | Semi-bold | 1.25 | **APPROVED** |
| H6 | 20px | Semi-bold | 1.30 | **APPROVED** |
| Lead body | 20px | Regular | 1.50 | **APPROVED** |
| Body large | 18px | Regular | 1.50 | **APPROVED** |
| Body default | 16px | Regular | 1.50 | **APPROVED** |
| Body small | 14px | Regular/Medium | 1.43 | **APPROVED** |
| Caption/metadata | 12px | Regular/Medium | 1.33 | **APPROVED** |
| Button/label | 14–16px | Semi-bold | 1.20 | **APPROVED** |

- **APPROVED:** Available body sizes are 20px, 18px, 16px, 14px, and 12px; available weights are Regular, Medium, Semi-bold, and Bold.
- **PROPOSED:** Use sentence case, avoid all-caps UI labels, and constrain long marketing copy to readable text widths.

## 5. Spacing and grid

- **APPROVED:** Use an 8-point spacing system wherever practical.
- **APPROVED:** Major sections are separated by 96px or 120px.
- **APPROVED:** Desktop uses a 12-column grid with 60px page margins and 24px gutters.
- **APPROVED:** Tablet page margins are 40px; mobile page margins are 24px.

| Breakpoint | Grid and layout behaviour | Status |
| --- | --- | --- |
| Desktop: above 1024px | 12 columns; 60px margins; 24px gutters | **APPROVED** |
| Tablet: 768px–1024px | Preserve 40px margins and adapt columns for the available width | **APPROVED** |
| Mobile: below 768px | Preserve 24px margins and adapt columns for the available width | **APPROVED** |

- **PROPOSED:** Use 8, 16, 24, 32, 40, 48, 64, 80, 96, and 120px as the primary spacing steps. Use non-8 values only when typography or icon optical alignment requires it.

## 6. Border radius and shadows

- **APPROVED:** Available corner radii are 8px, 12px, 16px, 24px, and 32px.
- **APPROVED:** Buttons are always fully pill-shaped.
- **APPROVED:** Cards have rounded corners. Shadows are smooth, simple, subtle, and never harsh/heavy.

| Component | Radius recommendation | Status |
| --- | --- | --- |
| Small input, tag, compact control | 8–12px | **PROPOSED** |
| Standard card / modal sub-section | 16px | **PROPOSED** |
| Feature card / large surface | 24px | **PROPOSED** |
| Hero media / prominent promotional surface | 32px | **PROPOSED** |
| Any button | `9999px` / fully pill-shaped | **APPROVED** |

- **APPROVED:** Use a soft, low-opacity shadow with a modest vertical offset and a subtle `#FAF8F2` border when separation is needed. Use one standard card shadow and a slightly stronger overlay shadow. Avoid heavy or harsh shadows.

## 7. Buttons

| Variant | Fill | Text | Usage | Status |
| --- | --- | --- | --- | --- |
| Primary | `#2B4BFF` | White | Primary action per view | **APPROVED** colour; **PROPOSED** usage rule |
| Accent | `#FF952B` | Contrast-verified dark text or white | Brand/promotion emphasis | **APPROVED** colour; **PROPOSED** text treatment |
| Secondary | `#000000` | White | Alternative high-emphasis action | **APPROVED** |
| Outlined | Transparent, visible border | Main text/blue as context requires | Lower-emphasis alternative | **PROPOSED** |
| Text-only | Transparent | Blue or black, contrast verified | Tertiary navigation/action | **PROPOSED** |

- **APPROVED:** Buttons are fully pill-shaped and primary buttons are solid blue.
- **APPROVED:** Default buttons use 16px horizontal padding, 12px vertical padding, and a 44px minimum height. Hero buttons use 16px vertical padding and retain the pill shape.
- **APPROVED:** Hover slightly darkens the background; active provides subtle press feedback; disabled reduces emphasis while preserving legibility; focus uses a visible external focus ring.
- **APPROVED:** Never signal state using colour alone; preserve accessible contrast in every state.

## 8. Cards

- **APPROVED:** Use a mix of white cards and light pastel cards with subtle borders, smooth shadows, and rounded corners.
- **APPROVED:** Cards should feel friendly and light—not heavy or overly decorative.
- **APPROVED:** Every activity keeps one consistent pastel colour across home, activity selection, and relevant practice screens.
- **PROPOSED:** Use white cards for dense or interactive information, and the assigned pastel card surface for activity discovery, onboarding, and promotional grouping.
- **PROPOSED:** Keep each card’s decoration optional and secondary; text, title, prompt, and action must retain clear visual priority.

## 9. Activity color assignments

The following assignments are approved and must remain consistent across the home page, activity selection, and relevant practice screens.

| Activity | Approved pastel | Rationale |
| --- | --- | --- |
| Speaking Challenge | Soft blue `#E7F3FF` | Calm, focused, low-pressure timed speaking |
| What Would You Do If…? | Soft orange `#FFF0DE` | Warm, energetic scenarios and imagination |
| Explain Without Saying the Word | Soft lavender `#F0EAFF` | Playful word association and creative explanation |
| Explain How to Do Something | Soft green `#E8F8E8` | Clear, step-by-step instructional thinking |
| Choose, Compare & Defend | Soft yellow `#FFF7D6` | Deliberation, contrast, and discussion |

- **OPEN:** Decide whether each activity needs a distinct companion icon. Any future icons must be separate from the decorative `line-*.svg` assets.

## 10. Hero layout

- **APPROVED:** The hero uses one center-aligned text column with a clear headline, concise supporting text, and prominent primary CTA.
- **APPROVED:** Never use two columns of text in the hero.
- **APPROVED:** Never create a split hero with text left and text right. Decorative graphics may surround centered content but cannot turn it into a multi-column text layout.
- **APPROVED:** Use line-flourish SVGs sparingly around the content; keep the hero spacious, clean, and engaging.
- **APPROVED:** Use Reference 4’s generous white space and restrained orange flourishes as the principal hero composition. Treat it as a layout and visual-structure reference only; do not reproduce its human-photo elements. Keep supporting copy shorter than the headline and give the CTA visual breathing room.

## 11. Illustrations and decorative elements

- **APPROVED:** The line SVGs use the gradient `#FF952B → #FAB42A → #F4D329 → #FAB42A → #FF952B`.
- **APPROVED:** Use them selectively and asymmetrically around hero content, between sections, in empty states, around selected promotional/CTA areas, and in occasional decorative compositions.
- **APPROVED:** Do not use line SVGs as functional icons, repeat them in every card, create dense decorative backgrounds, or allow them to compete with text.
- **APPROVED:** Do not use real human photography.
- **APPROVED:** Keep decorative SVG illustrations static for the MVP. Place them in non-interactive layers and omit them on constrained mobile views where they reduce clarity.
- **APPROVED:** Retain the vertical prompt-card shuffle animation as a functional interaction. Respect `prefers-reduced-motion` and avoid unnecessary animation or motion effects.

## 12. Responsive rules

### Desktop

- **APPROVED:** Above 1024px, use 60px page margins and 12 columns with 24px gutters.
- **PROPOSED:** Use multi-card rows for discovery and account summaries only when each card remains comfortably readable; retain the centered single-column hero.

### Tablet

- **APPROVED:** From 768px through 1024px, use 40px page margins and adapt grid columns for the available width.
- **PROPOSED:** Move from three-card to two-card layouts where applicable; use a compact navigation pattern before labels become crowded; reduce heading scale only where wrapping becomes awkward.

### Mobile

- **APPROVED:** Below 768px, use 24px page margins and adapt grid columns for the available width.
- **PROPOSED:** Stack cards intentionally in one column, retain 44px minimum touch targets, allow buttons to become full-width when helpful, and simplify/omit purely decorative flourishes.
- **APPROVED:** Use the 36px mobile H1 size. Do not mechanically shrink desktop layouts; mobile layouts must remain intentional and easy to use.

## 13. Accessibility

- **APPROVED:** Verify text, controls, and button states against WCAG contrast requirements before implementation; do not assume a pastel surface supports body text without checking.
- **PROPOSED:** Provide an obvious keyboard focus indicator for every interactive control, including buttons, cards that act as links, form inputs, menus, and modal controls.
- **PROPOSED:** Keep core body text at 16px or larger, use clear labels, and avoid relying on placeholders as labels.
- **PROPOSED:** Make tap targets at least 44 × 44px on touch devices and preserve generous spacing between adjacent actions.
- **APPROVED:** Support `prefers-reduced-motion`; avoid unnecessary motion, and never use animation as the sole carrier of information.
- **PROPOSED:** Mark decorative SVGs as non-interactive and keep them out of the reading/focus order; they must not obscure text or controls.

## 14. Proposed design decisions and open questions

### Proposed decisions awaiting approval

1. Casing conventions and text-width constraints.
2. Component radius mapping within the approved radius scale.
3. The focus-ring colour and outlined/text-button treatments.
4. Whether a future activity icon family is needed and, if so, its style.

### Open questions

1. What focus-ring colour should be used while preserving contrast across all approved surfaces?
2. Which contrast standard and browser/device support baseline will govern implementation?
3. Do future activity icons need to be introduced, and what style should they use?
4. Will the provided inspiration references remain internal-only, or do any visual elements require usage/licensing review before production?

## Summary and implementation guardrail

- **APPROVED:** Speak Rando uses a bright, white-led, playful learning experience with Outfit typography, blue product actions, orange brand identity, pastel activity surfaces, pill buttons, rounded cards, subtle shadows, an 8-point spacing system, and a centered single-column hero.
- **APPROVED:** Reference 4 leads layout and visual structure only, with no reproduction of its human-photo elements. Reference 3 informs application cards and learning layouts; the existing logo and decorative SVGs are used unmodified.
- **APPROVED:** The complementary pastel palette, activity assignments, typography line heights, responsive H1 scale, shadows, button sizing, interaction states, and MVP motion rules above are final implementation requirements.
- This document was created as documentation only. No application code, UI, CSS, components, packages, or original assets were modified.
