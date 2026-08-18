# Grassar Prime Management

Production website for [grassarpm.com](https://grassarpm.com), built with Next.js App Router, TypeScript and Tailwind CSS for deployment on Netlify.

## Local development

```bash
npm install
npm run dev
```

Run production validation with:

```bash
npm run typecheck
npm run build
```

## Netlify

1. Import this repository into Netlify.
2. Netlify reads the build settings from `netlify.toml`.
3. Enable Forms detection in the Netlify project, then redeploy.
4. Add `grassarpm.com` as the primary custom domain and attach `www.grassarpm.com` as an alias.
5. Verify the contact form, HTTPS, redirects, sitemap and social preview before DNS cutover.

Form submissions appear as `grassar-contact` in Netlify Forms.
