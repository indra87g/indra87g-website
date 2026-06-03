# AGENTS.md — Guide for Google Jules

This file is the operating manual for AI coding agents (Google Jules and similar)
working in this repository. Read it fully before making changes. It explains what
this project is, how it is built, the conventions you must follow, and the gate
your work must pass before you consider a task done.

---

## 1. Project overview

Personal website (portfolio + blog) for **Indra Sah Noeldy**, deployed as a
**fully static** site to **Cloudflare Pages** at `https://indra87g.is-a.dev`.

- It is a content site: a homepage, a CV page, and two content collections
  (`blog` and `project`) rendered from MDX.
- There is **no backend, no database, no authentication, and no server-side
  rendering**. Every route is statically generated at build time. Keep it that way
  unless the maintainer explicitly asks for SSR.

## 2. Tech stack

| Area        | Choice                                                        |
| ----------- | ------------------------------------------------------------- |
| Framework   | Astro 5 (`output: 'static'`)                                  |
| Styling     | Tailwind CSS 3 + `@tailwindcss/typography` (neobrutalism theme) |
| UI islands  | React 18 and Svelte 5 (used sparingly for interactivity)     |
| Content     | Astro Content Collections + MDX, validated with Zod          |
| Search      | `astro-pagefind` (indexes the build output automatically)    |
| Code blocks | `astro-expressive-code`                                       |
| Icons       | `astro-icon` (`tabler`, `fa6-*` icon sets)                    |
| Lint/format | **Biome** — the single source of truth (no ESLint/Prettier)  |
| Tests       | Playwright (`@playwright/test`)                               |
| Tooling     | TypeScript (strict), Node 22, **Bun** (package manager)       |

## 3. Repository map

```
src/
├── config.ts            # SINGLE source of truth for site/author/social/profile config
├── content/
│   ├── config.ts        # Collection definitions (blog, project)
│   ├── blog/*.mdx       # Blog posts
│   └── project/*.mdx    # Project entries
├── schemas/             # Zod schemas for collection frontmatter (blog.ts, project.ts)
├── layouts/             # Base.astro, BlogPost.astro, Project.astro
├── components/          # Reusable .astro / .tsx / .svelte components
├── pages/               # Routes (index, cv, 404, dynamic blog/project + tags + pagination)
├── lib/helper.ts        # Small shared utilities (formatDate, dedupe)
└── global.css
public/                  # Static assets + `_headers` (Cloudflare security headers)
.jules/                  # Agent "learnings" log — see section 8
astro.config.ts          # Astro integrations, site URL, output mode
biome.json               # Lint + format rules
```

## 4. Commands

**This project uses Bun, not npm.** Install dependencies with `bun install` (the
`trustedDependencies` field in `package.json` is a Bun feature that whitelists
postinstall scripts). Lockfiles are intentionally git-ignored, so don't add one —
and don't switch the project to `npm`/`yarn`/`pnpm`. Then:

| Command            | What it does                                              |
| ------------------ | -------------------------------------------------------- |
| `bun run dev`      | Start the dev server                                     |
| `bun run build`    | Production build to `dist/` (auto-runs Pagefind indexing) |
| `bun run preview`  | Serve the built `dist/` locally                          |
| `bun run lint`     | `biome lint --write`                                     |
| `bun run format`   | `biome format --write`                                   |
| `bun run test`     | Playwright tests (or `bunx playwright test`)             |

## 5. Coding conventions

These are enforced by Biome (`biome.json`) and `.editorconfig`. Match them so the
diff stays clean and review stays focused on substance:

- **Indentation:** 4 spaces. **Quotes:** single in JS/TS, double in JSX. Trailing
  commas everywhere. No semicolons (ASI style). Line width 80.
- **Imports:** use the `@/*` path alias for `src/*` (e.g. `import config from '@/config'`).
  Biome organizes imports — don't fight it.
- **TypeScript:** strict mode (`astro/tsconfigs/strict`). Avoid `any`; prefer
  precise types and `satisfies` for config objects.
- **Styling:** Tailwind utility classes only. This theme uses **theme-aware tokens**
  (`bg-main`, `bg-bg`, `text-text`, `border-border`, plus `dark:` variants). Do
  **not** invent generic classes like `bg-primary` — they are undefined here and
  silently break visual feedback (see `.jules/palette.md`).
- Always run `bun run lint` and `bun run format` before finishing.

## 6. Architecture rules (read before editing)

1. **One config source.** All site metadata, social links, and profile data live in
   `src/config.ts`. Add new config there — never reintroduce parallel config files.
2. **Stay static.** Every dynamic route (`[...slug]`, `[...page]`, `tags/[tag]`)
   must export `getStaticPaths`. Do not use server-only APIs (`Astro.request`,
   `Astro.cookies`, API endpoints) or set `output: 'server'`. SSR breaks the static
   deploy and the Pagefind index.
3. **Content is schema-validated.** New frontmatter fields for blog/project must be
   added to `src/schemas/blog.ts` / `src/schemas/project.ts` (Zod), or the build
   fails. Keep `draft: true` entries out of public listings (the pages already
   filter on it).
4. **Don't re-fetch in paginated routes.** `getStaticPaths` already fetches, sorts,
   and paginates; read from `Astro.props.page`, not a second `getCollection` call
   (see `.jules/bolt.md`).
5. **Accessibility is a feature.** External links use `target="_blank"` with
   `rel="noopener noreferrer"` and an `.sr-only` "(opens in a new tab)" hint.
   Interactive widgets close on `Escape` and outside-click and wire up
   `aria-controls`/`aria-describedby` (see `.jules/palette.md`, `.jules/sentinel.md`).

## 7. Verification gate — required before a task is "done"

Do not report a task complete until **all three** pass and you have seen the output:

1. **Lint:** `bun run lint` — no errors.
2. **Build:** `bun run build` — completes, and Pagefind reports a non-zero
   "indexed N pages" (0 pages means routes silently stopped prerendering — treat as
   a failure and investigate).
3. **Tests:** `bun run test` (alias for `playwright test`) — green.
   - The Playwright config (`playwright.config.ts`) builds the site and serves it via
     `bun run preview`, then runs the specs in `tests/`. The first run needs the
     browser binary: `bunx playwright install chromium`.
   - Add or update Playwright tests for the behavior you changed; a bug fix should
     come with a test that fails before and passes after.

State plainly what you ran and what the result was. If something fails or you had to
skip a step, say so — never claim green without evidence.

## 8. The `.jules/` learnings log — keep it alive

The `.jules/` directory holds dated, append-only notes from previous agent passes,
grouped by theme:

- `bolt.md` — performance learnings
- `palette.md` — UX / accessibility learnings
- `sentinel.md` — security learnings

**Read the relevant file before working in that area** — it records traps already
discovered (e.g. undefined Tailwind tokens, reverse-tabnabbing, redundant
collection fetches). When you discover a non-obvious insight while working, **append
a new dated entry** in the matching file using the existing format:

```markdown
## YYYY-MM-DD - [Short title]
**Learning:** What you found and why it matters.
**Action:** The concrete fix/pattern to apply going forward.
```

This is how the project accumulates institutional memory across agent runs — treat
it as a deliverable, not an afterthought.

## 9. Scope of work

**You are expected to handle:**

- Bug fixes and refactors (keeping behavior intact unless the task says otherwise).
- New features (e.g. RSS feed, Giscus comments, a `/showcase` page, OG images) —
  follow the architecture rules above.
- Performance, accessibility, and security audits/improvements in the spirit of the
  `.jules/` logs.

**Stay out of (unless explicitly asked):**

- **Authoring site content.** Do not write or rewrite the actual prose of blog posts
  or project entries in `src/content/`. Fixing a broken link, frontmatter, or a
  schema mismatch is fine; inventing content is the maintainer's job.
- Swapping core tooling (don't reintroduce ESLint/Prettier; Biome stays).
- Adding dependencies that aren't needed, or leaving unused ones behind.
- Changing the deploy model to SSR.

## 10. Deployment notes

The site deploys to **Cloudflare Pages as pure static output**:

- Build command: `bun run build` — Build output directory: **`dist`**.
- No adapter and no Pages Functions are needed. The `public/_headers` file ships
  the security headers (`X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`); extend it there rather than adding middleware.
- If you ever see "Pagefind indexed 0 pages" during build, the site has stopped
  prerendering — fix that before merging.

## 11. Working etiquette

- Make focused commits with clear messages. The history uses Conventional-Commits
  style prefixes (`feat:`, `fix:`, `refactor:`, `docs:`) — follow it.
- Keep changes minimal and match the surrounding code's style.
- When a task is ambiguous, prefer the smallest change that satisfies it and note
  the assumptions you made.
