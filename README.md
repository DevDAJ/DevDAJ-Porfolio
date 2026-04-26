# Portfolio

Personal site and blog built with **Astro**: static pages, **MDX** posts, project listings with tag filters, and light client-side behavior where it helps (theme, experience timeline, project grid layout).

## Requirements

- **[Bun](https://bun.sh)** for installs and scripts (`bun.lock` in repo)
- **Node.js** `>= 22.12` (see `package.json` `engines`; Astro and tooling expect a recent Node)

## Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `bun install`     | Install dependencies             |
| `bun dev`         | Local dev server (`astro dev`)   |
| `bun run build`   | Production build to `dist/`      |
| `bun run preview` | Serve the `dist/` output locally |

## Project layout

| Path                       | Purpose                                                                   |
| -------------------------- | ------------------------------------------------------------------------- |
| `src/data/site.ts`         | Production `site` URL, social/resume links, birth date (used for age).    |
| `src/data/portfolio.ts`    | Projects (cards, `/projects` filters) and experience timeline.            |
| `src/data/blog.ts`         | Helpers to load blog posts from the content collection.                   |
| `src/content/blogs/`       | Blog posts as `.mdx` (and `.md` if you add them).                         |
| `src/content.config.ts`    | Content collection schema (`title`, `date`, `excerpt`, optional `draft`). |
| `src/pages/`               | Routes (`index`, `projects`, `blog`, dynamic `[slug]`).                   |
| `src/components/Homepage/` | Landing page (`index.astro`) and `sections/` (hero, skills, experience, featured projects, latest blog). |
| `src/layouts/Layout.astro` | Shell, nav, footer, `ClientRouter` (view transitions).                    |
| `src/types/`               | TypeScript types and component prop interfaces (`portfolio`, `blog`, `icons`, `components`). |
| `src/utils/`               | Shared helpers (`age`, `tenure`, `readingTime`, `projectTags`) and small client modules (e.g. project tag filter, bento grid, timeline rail). |
| `src/styles/global.css`    | Global and design tokens (Tailwind v4).                                   |
| `public/`                  | Static assets (`favicon`, optional `resume.pdf`, images).                 |

Site configuration used to live under `src/config/`; it is merged into **`src/data/`** so content-adjacent settings and copy live in one place.

## Customizing the site

1. **`src/data/site.ts`**  
   Set `siteOrigin` (no trailing slash) for the sitemap and canonical behavior, update `links` (email, GitHub, LinkedIn, X/Twitter, resume path), and `birthDate` if you use the age helper.

2. **`src/data/portfolio.ts`**  
   Edit `projects` (title, description, `tags`, `technologies`, optional `cardImage`, URLs, `writeUpSlug` for a related blog post) and `timeline` for the experience section.

3. **Blog posts**  
   Add a file under `src/content/blogs/` with frontmatter matching the schema in `src/content.config.ts`. Set `draft: true` to hide a post from production routes (see `getCollection` usage in blog pages).

4. **`astro.config.ts`**  
   Imports `siteOrigin` from `src/data/site.ts` for `defineConfig({ site })` and the sitemap integration.

## Stack notes

- **Tailwind CSS v4** is wired through **`@tailwindcss/vite`** in `astro.config.ts`.
- **`@astrojs/mdx`** powers MDX posts; **`@astrojs/sitemap`** emits `sitemap-index.xml` after build.
- **`astro:transitions` `ClientRouter`** enables in-app navigation; some scripts re-run on `astro:page-load` where needed.

## Deploy (GitHub Pages)

The workflow **`.github/workflows/deploy.yml`** runs on every push to **`main`** (and can be run manually from the Actions tab). It installs with **Bun**, runs **`bun run build`**, and publishes the **`dist/`** output to **GitHub Pages**.

**One-time repo setup**

1. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions** (not “Deploy from a branch”).
2. Under **Settings → Pages → Custom domain**, add **`devdaj.tech`** (or your domain) if you use one, and point DNS at GitHub as [their docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site) describe.
3. If your default branch is not `main`, change the `branches` filter in the workflow file.

**Subpath hosting** (e.g. `https://<user>.github.io/<repo>/`): set Astro’s [`base`](https://docs.astro.build/en/reference/configuration-reference/#base) in `astro.config.ts` to `/<repo>/` so asset URLs resolve. Sites served at the domain root (including `username.github.io` for a user site repo) do not need `base`.

## License

Private / personal project unless you add a license file.
