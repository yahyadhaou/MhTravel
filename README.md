# M.H. Travel — Next.js  Template
# M.H. Travel — Demo https://mhtravel.netlify.app/

A production-ready Next.js 14 website for M.H. Travel / Société El Ibdaa.
Built with TypeScript, Tailwind CSS, and the App Router.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, service highlights, testimonials, CTA |
| `/services` | Full services listing with feature panels |
| `/pricing` | Pricing plans + Tunisia vs Europe comparison table |
| `/about` | Agency story, mission, timeline, team |
| `/contact` | Contact form + office details |

## Components

| File | Purpose |
|------|---------|
| `components/Navbar.tsx` | Sticky responsive navbar with scroll-aware styling |
| `components/Footer.tsx` | Full footer with links, contact info, CTA band |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customisation Checklist

- [ ] Replace placeholder content in each page with your real copy
- [ ] Add real images — place in `/public/` and use `next/image`
- [ ] Wire the contact form in `app/contact/page.tsx` to your email API (Resend, SendGrid, etc.)
- [ ] Update `app/layout.tsx` metadata (title, description, OG image)
- [ ] Add your logo SVG to `/public/logo.svg` and update `Navbar.tsx`
- [ ] Set real social media links in `Footer.tsx`
- [ ] Add Google Analytics or Plausible in `app/layout.tsx`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif) + DM Sans (sans) via Google Fonts

## Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `gold-500` | `#c5a55a` | Primary accent, CTAs, highlights |
| `navy-800` | `#0d1f3c` | Primary dark bg, headings |
| `navy-700` | `#1a3560` | Secondary dark bg, sections |
| `cream` | `#faf7f0` | Page background |

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```
