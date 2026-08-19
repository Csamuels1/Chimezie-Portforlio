# Chimezie Ifeanyi Samuel - Portfolio

A production-ready portfolio for an AI Systems Engineer specialising in multi-agent architecture, LLM integration, conversational AI, and intelligent automation.

## Stack

- React 19 and Vite
- GSAP and ScrollTrigger
- Three.js
- Lenis smooth scrolling
- Lucide React icons
- Netlify Forms
- Vitest and Testing Library

## Local development

```bash
npm install
npm run dev
```

Use the following checks before publishing:

```bash
npm run lint
npm run test
npm run build
```

## Content and assets

Portfolio copy, project records, skill groups, statistics, and learning data are centralised in `src/data/portfolio.js`.

Current media lives in `src/assets/portfolio/`:

- `headshot.jpg`: About section portrait
- `marketing-agents.png`: Marketing Multi-Agent System
- `sdr-workflow.png`: SDR Transcript Automation System
- `retell-car-rental.png`: Retell car rental voice agent
- `retell-lead.png`: Retell real estate lead qualification agent

The Odoo Multi-Agent ERP and AI Lead Qualification cards are intentionally text-led. Do not add empty media frames or placeholder artwork when screenshots are unavailable.

The downloadable resume is `public/Chimezie-Ifeanyi-Samuel-CV.pdf`.

## Contact form

The form is registered as `portfolio-contact` in both `index.html` and the React form. Netlify detects the static form during deployment and processes submissions without a custom backend. Form fields are `name`, `email`, `company`, `budget`, `message`, and the spam honeypot `bot-field`.

After deploying, enable form notifications in the Netlify project dashboard so new submissions are forwarded by email.

## Deployment

The repository includes `netlify.toml` with the production build command, publish directory, SPA fallback, security headers, and immutable asset caching.

1. Import the GitHub repository into Netlify.
2. Keep the detected build command as `npm run build` and publish directory as `dist`.
3. Deploy and verify the contact form appears under Netlify Forms.
4. Replace `https://chimezie-ifeanyi.netlify.app` in `public/sitemap.xml` and `public/robots.txt` if the final domain differs.
5. Add the final absolute URL to Open Graph metadata when a permanent custom domain is available.

## Maintenance

- Update time-sensitive learning progress in `src/data/portfolio.js`.
- Keep project screenshots compressed and preserve meaningful alt text.
- Run the full lint, test, build, responsive, and reduced-motion checks after changing animations or layout.
- Update the GitHub profile URL in the contact section and structured metadata when the final profile is confirmed.
