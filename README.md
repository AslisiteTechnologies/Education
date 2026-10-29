# Atelier Learning

Atelier is a fictional premium learning platform and portfolio concept for Aslisite Technologies. It is a client-side React, TypeScript and Vite app with Tailwind CSS, Motion for React, React Router, Zustand, React Hook Form and Zod, plus illustrative courses and seeded student activity. It does not provide real educational services, user accounts, payment processing, accreditation, or cross-device sync.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

`npm run build` runs TypeScript project validation and produces the static site in `dist/`. Run `npm test` for the focused unit tests and `npm run lint` for Oxlint.

## Deployment

### Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` rewrites client-side routes to `index.html`.

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- `public/_redirects` provides the SPA fallback.

The project does not hardcode a deployment hostname. Configure `education.demo.aslisite.com` as a custom domain in the hosting provider when access is available.

## Included experiences

- Public home, searchable catalog, categories, course details, instructor directory, learning paths, pricing, about, journal, contact, FAQ, sample privacy/terms, and a custom not-found route.
- Browser-local student dashboard, lesson progress, quiz interactions, saved courses, demo bag and simulated checkout, and downloadable sample certificate HTML.
- Fictional instructor and platform admin dashboard views at `/demo-instructor` and `/demo-admin`. The student and demo dashboard bundle is loaded separately by route.
- 24 seeded courses across seven categories.

Student progress, bookmarks, enrollments and bag contents use browser local storage. No backend or account service is present. Course images and Inter font are loaded from Unsplash and Google Fonts, so those visual assets require network access.

## Demo notice

Courses, instructors, learners, ratings, enrollments, pricing, payments and certificates are illustrative. The contact form confirms locally and does not transmit messages. The certificate explicitly identifies itself as a sample portfolio demonstration and is not an accredited qualification.


