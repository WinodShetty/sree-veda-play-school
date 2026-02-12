
# Technical Architecture Document

## Overview
This project is an SPA (Single Page Application) designed for SREE VEDA Play School. It follows a "Content-First" philosophy, ensuring that vital information for parents (Programs, Facilities, Contact) is easily accessible and visually engaging.

## Design Philosophy
- **Colors**: A vibrant palette (`brand-yellow`, `brand-pink`, `brand-blue`) chosen to evoke childhood joy while maintaining professional contrast.
- **Typography**: `Fredoka` for headings (playful and rounded) and `Quicksand` for body text (highly readable and modern).
- **Motion Strategy**: Subtle float animations and slide-in effects to guide the user's eye without causing distraction.

## Component Breakdown
1. **Hero**: Uses `framer-motion` for layered entry animations. Highlights the brand name with high-contrast text.
2. **Navbar**: State-driven scroll detection to toggle glassmorphism styling.
3. **Programs**: Map-driven rendering from `constants.tsx`, allowing for easy curriculum updates.
4. **Contact**: Integrated Google Maps iframe with a custom CSS frame to match the brand's rounded aesthetic.

## Maintenance
To update content, developers only need to modify `constants.tsx`. This separates the "Content" layer from the "Logic" and "Styling" layers, making the project highly maintainable.
