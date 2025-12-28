# Electro Waves Landing Page

A modern, responsive landing page for Electro Waves built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design matching the VerdaAgro reference style
- ⚡ Built with Next.js 14+ (App Router) and TypeScript
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive across all devices
- 🎯 Optimized performance with Next.js Image component
- 🎨 Custom color palette from Electro Waves branding

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── NewsSection.tsx     # News/articles section
│   ├── ScrollToTop.tsx     # Scroll to top button
│   └── ui/                # Reusable UI components
├── lib/
│   ├── content.ts          # Content data structure
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Image assets
```

## Customization

### Updating Content

Edit `lib/content.ts` to update the landing page content with actual Electro Waves information from the PDF.

### Colors

Colors are defined in `tailwind.config.ts`. The color palette is based on CMYK values extracted from the PDF and converted to RGB/Hex.

### Images

Place your images in the `public/images/` directory and update the image paths in the components or `lib/content.ts`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React** - UI library

## License

ISC

