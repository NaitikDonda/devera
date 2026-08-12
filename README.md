# DEVERA Portfolio Website

A premium, production-quality portfolio website for Devera creative studio, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Overview

Devera is a sophisticated creative studio website designed with intentional, minimal, and editorial aesthetics. The site features scroll-driven animations, 3D parallax effects, and premium microinteractions that create a memorable user experience.

## Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.4
- **Animations**: 
  - Framer Motion 11.0.0 (UI animations)
  - GSAP (scroll-driven animations)
- **Typography**: Inter (Google Fonts)
- **Icons**: Lucide React

## Brand Colors

- **Primary Teal**: `#008081`
- **Cream**: `#FFFCCF`
- **Dark Charcoal**: `#111313`
- **Warm Off-white**: `#F8F7F2`
- **Soft Gray**: `#E8E8E3`
- **Deep Teal**: `#005F60`

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── process/
│   │   └── page.tsx          # Process page
│   ├── work/
│   │   ├── page.tsx          # Work portfolio page
│   │   └── [slug]/           # Case study pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── AboutSection.tsx      # About section component
│   ├── Button.tsx            # Reusable button component
│   ├── ContactSection.tsx    # Contact section component
│   ├── CustomCursor.tsx      # Custom cursor for desktop
│   ├── DeviceShowcase.tsx    # 3D device showcase with GSAP
│   ├── FeaturedWork.tsx      # Featured work section
│   ├── Footer.tsx            # Footer component
│   ├── FounderSection.tsx    # Founder/personal portfolio section
│   ├── Hero.tsx              # Hero section with scroll animations
│   ├── InteractiveShowcase.tsx # Interactive showcase component
│   ├── Navbar.tsx            # Navigation component
│   ├── ParallaxGallery.tsx   # Parallax gallery section
│   ├── ProcessSection.tsx    # Process section
│   └── Services.tsx          # Services section
└── styles/
    └── globals.css           # Global styles
```

## Key Features

### Homepage
- **Hero Section**: Typography-based hero with scroll-driven animations and interactive visual element
- **Featured Work**: Editorial portfolio layout with alternating project layouts
- **Device Showcase**: GSAP-powered 3D device mockup with scroll-controlled rotation and movement
- **Parallax Gallery**: Multi-layer parallax section with depth effects
- **Services**: Interactive service cards with hover effects
- **About & Founder**: Editorial presentation of studio and founder
- **Process**: Step-by-step methodology with scroll animations
- **Contact**: Premium contact form with teal background

### Pages
- **About**: Philosophy, values, and approach sections
- **Process**: 6-step methodology with scroll animations
- **Work**: Editorial portfolio grid with project filtering
- **Contact**: Premium form with teal background and cream typography

### Design Features
- Custom cursor for desktop (expands over clickable elements)
- Smooth scroll-driven animations
- Premium microinteractions on buttons and links
- Responsive design for all breakpoints
- Accessibility-first approach with ARIA labels
- Performance optimizations

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Devera
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Design Philosophy

The website follows these core principles:

1. **Intentional Design**: Every element has a purpose. No decorative elements without meaning.
2. **Premium Typography**: Inter font with careful attention to weights, spacing, and hierarchy.
3. **Generous Whitespace**: The design breathes with ample spacing between elements.
4. **Subtle Animations**: Animations enhance the experience without being distracting.
5. **Editorial Aesthetics**: Content-first approach with magazine-like layouts.
6. **Performance**: Optimized for fast loading and smooth interactions.

## Responsive Breakpoints

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Respects `prefers-reduced-motion` setting

## Performance Considerations

- Inter font with `display: swap` for fast rendering
- Lazy loading of images
- GPU-accelerated animations
- Optimized bundle size with tree-shaking
- Efficient animation libraries (Framer Motion, GSAP)

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  devera: {
    DEFAULT: "#008081",
    teal: "#008081",
    dark: "#111313",
    cream: "#FFFCCF",
    offwhite: "#F8F7F2",
    graysoft: "#E8E8E3",
    deep: "#005F60",
  },
}
```

### Typography
Modify font weights and sizes in Tailwind config or component files.

### Animations
Adjust animation timing and easing in component files using Framer Motion or GSAP configurations.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Devera. All rights reserved.

## Credits

Designed and developed with intention for Devera Creative Studio.
