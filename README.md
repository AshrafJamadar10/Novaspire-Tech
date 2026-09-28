# Novaspire Tech

React and Vite landing page for Novaspire Tech.

## Local development

```bash
npm ci
npm run dev
```

Create a production build with `npm run build`; Vite writes the deployable site to `dist/`.

## Netlify deployment

`netlify.toml` configures Netlify to run `npm run build` and publish `dist/`.

The GitHub Actions workflow in `.github/workflows/netlify.yml` builds pull requests targeting `main` and deploys pushes to `main` to the Netlify production site. To enable it:

1. Push this project to a GitHub repository and connect that repository to your Netlify site.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions** and add:
   - `NETLIFY_AUTH_TOKEN` — a personal access token created in Netlify.
   - `NETLIFY_SITE_ID` — the Site ID shown in the Netlify site's general settings.
3. Push or merge changes to `main`. Pull requests run the build; pushes to `main` build and deploy production.

Keep both values in GitHub Actions secrets; do not put them in source files.
