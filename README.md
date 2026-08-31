# Lifeng Yuan Academic Website

A custom Hugo academic website migrated from the existing Google Sites content. The public website is English-only; maintenance notes are provided in Chinese below.

## Features

- Responsive, accessible custom design inspired by clean, image-led academic portfolios
- Identity-preserving river-basin banner and optimized WebP fallbacks
- About, Research, Publications, Projects, Teaching & Mentoring, Research Notes, and Contact
- 71 deduplicated publication records imported from the supplied Google Scholar CSV
- Client-side publication search and year filtering
- SEO metadata, Open Graph image, sitemap, RSS, robots.txt, and Person structured data
- GitHub Pages deployment workflow

## Local development

Install [Hugo](https://gohugo.io/installation/) 0.162.0 or later, then run:

```bash
hugo server
```

Open <http://localhost:1313/>.

Run a production build:

```bash
hugo --gc --minify
```

The generated static site is written to `public/`.

## Update publications

Replace `source_inputs/citations.csv` with a fresh export using the same columns, then run:

```bash
python3 scripts/import_publications.py
hugo --gc --minify
```

The importer removes duplicate records by normalized title and year and keeps the more complete duplicate. This resolves author-name formatting variants in the Scholar export.

## GitHub Pages deployment

1. Create an empty GitHub repository (the configured example name is `lifeng-yuan-academic`).
2. Update `baseURL` in `hugo.toml` if the owner or repository name differs.
3. Push this directory to the repository's `main` branch.
4. In **Settings → Pages**, select **GitHub Actions** as the source.
5. Run the **Deploy Hugo site to Pages** workflow or push a commit.

No public deployment has been performed from this workspace.
