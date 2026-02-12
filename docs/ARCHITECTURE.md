
# SREE VEDA - Technical Architecture

## 🏛️ System Overview
This project is built using a **Configuration-Driven Architecture**. The UI is decoupled from the data, allowing for rapid rebranding and content updates.

## 📁 Folder Structure (Refactored)
- `/components/common`: Atomic UI elements (Buttons, Section wrappers).
- `/components/features`: Complex business-logic components (Hero, Contact).
- `/config`: Centralized site settings and content.
- `/types`: Global TypeScript interfaces.
- `/assets`: Static media (Images/Icons).

## 🧩 Component Hierarchy
```text
App
 └── Layout
      ├── Navbar (Sticky, Scroll-aware)
      ├── Main
      │    ├── Hero (Config-driven)
      │    ├── Programs (Mapped data)
      │    └── Contact (Iframe + Forms)
      └── Footer
```

## 🔄 Data Flow
The `config/site.ts` acts as a static "State Store". All components import from this config rather than hardcoding strings. This ensures consistency across Meta tags, Contact sections, and SEO.

## 🎨 Styling Strategy
We use **Tailwind Design Tokens**. Custom brand colors are defined in `tailwind.config` to maintain a strict visual system.
