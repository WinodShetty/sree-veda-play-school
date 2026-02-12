
# Reusability Guide

This project is a high-performance **Preschool Website Template**.

## How to use for a new school:
1. **Branding**:
   - Open `index.html` and update the `tailwind.config` colors (yellow, pink, blue).
2. **Content**:
   - Open `config/site.ts` and replace all SREE VEDA info with the new school's details.
3. **Images**:
   - Drop new images into `assets/`. Keep the naming convention or update the paths in `constants.tsx`.
4. **Programs**:
   - Add or remove programs in the `PROGRAMS` array in `constants.tsx`. The UI will auto-adjust.

## Customizing Components:
The `common/Button.tsx` and `common/Section.tsx` are designed to be used everywhere. Use the `variant` props to toggle styles without writing new CSS.
