# Novaspire Tech

React and Vite landing page for Novaspire Tech.

## Local development

```bash
npm ci
npm run dev
```

Create a production build with `npm run build`; Vite writes the deployable site to `dist/`.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` builds pull requests targeting `main` and deploys pushes to `main` to GitHub Pages. Vite uses relative asset paths so the site works both at a user site root and under a repository subpath.

To enable Pages:

1. Push this project to a GitHub repository with a `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push or merge changes to `main`. Pull requests run the build; pushes to `main` build and deploy the site.

The published URL appears in the workflow run and under **Settings → Pages**. No deployment secrets are required.
