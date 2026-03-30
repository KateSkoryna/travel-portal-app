# Travel App

A modern travel inspiration web app built with Next.js. Browse destinations, explore curated experiences, and discover the world through immersive visuals and video content.

## Features

- Full-screen hero section with background video preview
- Destination cards with rich imagery
- Responsive navigation with mobile hamburger menu
- Smooth, cinematic UI with a dark travel aesthetic

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
travel-app/
├── app/
│   ├── layout.tsx        # Root layout — fonts (Roboto, DM Sans), metadata
│   ├── page.tsx          # Home page — hero section composition
│   └── globals.css       # Tailwind theme — color & font variables
├── components/
│   ├── Navbar.tsx        # Top nav — logo, links, action icons
│   ├── Logo.tsx          # Brand logo image
│   ├── IconButton.tsx    # Reusable icon button (image + aria-label)
│   ├── HamburgerButton.tsx  # Mobile menu toggle (animates to ×)
│   ├── HeroVideo.tsx     # Full-screen background image
│   ├── HeroContent.tsx   # Hero heading and CTA button
│   ├── SideIndicator.tsx # Left-edge video progress bar + timer
│   ├── BottomBar.tsx     # Bottom info bar — destination cards + video preview
│   ├── DestinationCard.tsx  # Numbered destination info card
│   └── VideoPreview.tsx  # Inline video with play/pause toggle
└── public/
    ├── logo.svg
    ├── favicon.png
    ├── mountain.webp     # Hero background image
    ├── indonesia.mp4     # Preview video
    └── icons/            # UI icons (search, etc.)
```

## Component Tree

```
RootLayout (app/layout.tsx)
└── Home (app/page.tsx)
    └── <section> hero
        ├── HeroVideo               # background image
        ├── <div> gradient overlay
        ├── Navbar
        │   ├── Logo
        │   ├── <ul> nav links
        │   ├── IconButton          # search
        │   └── HamburgerButton     # mobile only
        ├── HeroContent             # heading + CTA
        └── BottomBar
            ├── <div> social links
            ├── DestinationCard ×3
            └── VideoPreview        # video + play/pause toggle
```

## Tech Stack

- [Next.js](https://nextjs.org) — React framework
- Tailwind CSS — utility-first styling with custom design tokens
- TypeScript
