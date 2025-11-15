## Multilingual SSR Demo

A production-ready Next.js (App Router) starter that renders content on the server and serves three fully localized experiences (English, Arabic, Chinese).

### Features
- Server-side rendering for every locale
- Middleware-driven locale redirects with RTL awareness
- Locale dictionaries loaded on demand
- Dynamic metadata (canonical, hreflang, Open Graph, Twitter)
- Auto-generated `robots.txt` and `sitemap.xml`

### Prerequisites
- Node.js 18+
- npm 9+ (or any compatible package manager)

### Getting Started
```bash
npm install
npm run dev -- --webpack
```
The dev server runs at `http://localhost:3000` (override with `--port` or `NEXT_PUBLIC_SITE_URL`).

### Available Scripts
- `npm run dev` &mdash; start the dev server (Webpack flag recommended for stability on current Next 16.0.1)
- `npm run build` &mdash; create a production build
- `npm run start` &mdash; run the production build
- `npm run lint` &mdash; run ESLint

### Configuration
| Variable | Description | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin used for metadata/SEO (no trailing slash) | `http://localhost:3000` |

Update locale strings under `src/i18n/dictionaries/`. Add new languages by extending `src/i18n/config.ts` and creating a dictionary module.

### Deployment Checklist
- Set `NEXT_PUBLIC_SITE_URL` to your production domain
- Run `npm run build` to verify the bundle
- Ensure the platform honours the Edge Middleware (`middleware.ts`)

Enjoy building!
