# GoLogistic — Logistics Management Landing 🚚

**Live demo:** https://gologistic.netlify.app/

A responsive marketing landing page for **GoLogistic**, built with the Next.js App Router and TypeScript. This repository contains the source for the public website (home page, services, contact form, testimonials, and more).

---

## Features ✅

- Fully responsive landing pages and hero sections
- Contact form with server-side handling (uses Nodemailer)
- SEO helpers: `sitemap` and `robots` support
- Image and asset optimizations using Next.js public assets
- Carousel support (react-slick) for testimonials / shows
- Linted and formatted codebase with ESLint, Prettier and Husky

---

## Tech Stack 🔧

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Nodemailer (for contact emails)
- react-slick / slick-carousel (carousel)

---

## Quick Start — Local Development 🚀

1. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

2. Run the development server:

```bash
npm run dev
# then open http://localhost:3000
```

3. Build for production:

```bash
npm run build
npm start
```

4. Lint & format:

```bash
npm run lint
npm run format
```

---

## Environment Variables (for contact form) ⚠️

The contact API route uses Nodemailer with Gmail by default. Create a `.env` file (or set these in your hosting environment):

```env
EMAIL_USER=your@gmail.com
EMAIL_PASS=app-password-or-password
EMAIL_TO=recipient@example.com
```

Note: For Gmail you may need to use an App Password (if 2FA is enabled) or enable the appropriate access for your account.

---

## Deployment

This project can be deployed on platforms that support Next.js (Vercel, Netlify with Next.js support, etc.). The live demo is available at:

https://gologistic.netlify.app/

---

## Project Structure ✨

- `src/app/` — Next.js App Router pages and API routes
- `src/components/` — UI components for the site
- `public/assets/` — images and static assets
- `src/app/api/contact/` — contact API (Nodemailer)

---

## Contributing

Contributions are welcome — open an issue or a PR if you have improvements or fixes.

---

## License

This project does not include a license file. Add one if you plan to open-source it.

---

If you'd like, I can add badges (build / deploy / license), a screenshot, or detailed contribution guidelines — tell me which you'd prefer.
