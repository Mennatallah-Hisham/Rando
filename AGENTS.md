<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Speak Rando project rules

- Treat [BUILD_PLAN.md](BUILD_PLAN.md) as the product source of truth.
- Keep the MVP focused. Do not add features that are not approved in the plan or by the product owner.
- Use TypeScript and the existing Next.js App Router architecture.
- Prefer small, maintainable changes over broad rewrites.
- Run lint and build checks where practical after changes.
- Never expose secrets or commit real credentials. Use placeholders only in example configuration.
- Enforce authentication, authorization, roles, subscription status, shuffle limits, and other critical rules server-side; never rely on client-side checks alone.
- Use database migrations for every schema change.
- Ask before making major architectural or product decisions, especially where BUILD_PLAN.md lists an open question.
