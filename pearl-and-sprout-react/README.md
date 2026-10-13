# Pearl & Sprout — React version

A family dental + child care clinic demo site, built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`, which you can deploy to Vercel, Netlify, or any static host.

## Structure

```
src/
  components/   one component per section (Header, Hero, Services, Booking, etc.)
  hooks/        useReveal.js — scroll-reveal animation hook
  App.jsx       assembles all sections
  index.css     all design tokens + styles (same visual system as the HTML version)
  main.jsx      React entry point
```

## Customizing for a real client

- Clinic name/logo: `src/components/Header.jsx` and `Footer.jsx`
- Address/phone/email: `src/components/Booking.jsx` and `Footer.jsx`
- Services, doctors, testimonials: edit the data arrays at the top of each component file
- Colors/fonts: CSS variables at the top of `src/index.css`
