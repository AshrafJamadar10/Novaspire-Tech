# Novaspire Tech

React and Vite landing page for Novaspire Tech.

## Local development

```bash
npm ci
npm run dev
```

Create a production build with `npm run build`; Vite writes the deployable site to `dist/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-static.yml` builds pull requests targeting `main` and deploys pushes to `main` to GitHub Pages. Vite serves assets from the root of the custom domain.

To enable Pages:

1. Push this project to a GitHub repository with a `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push or merge changes to `main`. Pull requests run the build; pushes to `main` build and deploy the site.

The published URL appears in the workflow run and under **Settings → Pages**. No deployment secrets are required.

## Search engine setup

The site includes page metadata, ProfessionalService structured data, `robots.txt`, and a sitemap at `https://novaspire-tech.shop/sitemap.xml`.

After deploying SEO changes:

1. Verify `novaspire-tech.shop` in Google Search Console and submit the sitemap URL.
2. Use URL Inspection in Search Console to request indexing for the home page.
3. Keep your Google Business Profile accurate and consistent with your website's contact information and actual service area.

Search visibility takes time and cannot be guaranteed by metadata alone. Keep location and service details accurate and useful to potential customers.
