
import { NavItem, Program, Facility, Testimonial } from './types';

export const SCHOOL_INFO = {
  name: "SREE VEDA Play School & Day Care",
  address: "H.No: 3, 10-59, 10-9, Gokhale Nagar, Ramanthapur, Hyderabad, Telangana 500013",
  phone: "+91 93477 10324",
  email: "sreevedaschool@gmail.com",
  whatsapp: "919347710324",
  mapsLink: "https://maps.app.goo.gl/9szbJqsouhUb7ggZ8",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const PROGRAMS: Program[] = [
  {
    title: "Play Group",
    age: "1.5 - 2.5 Years",
    description: "Focus on sensory activities, social interaction, and motor skills through fun and play.",
    color: "bg-brand-yellow",
    icon: "👶",
    image: "/images/playgroup.webp"
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 Years",
    description: "Introduction to colors, shapes, letters, and numbers with structured yet playful learning.",
    color: "bg-brand-pink",
    icon: "🎨",
    image: "/images/nursery.webp"
  },
  {
    title: "LKG & UKG",
    age: "3.5 - 5.5 Years",
    description: "Advanced preparation for primary school with focus on reading, writing, and logical skills.",
    color: "bg-brand-blue",
    icon: "📚",
    image: "/images/lkg-ukg.webp"
  }
];

export const FACILITIES: Facility[] = [
  {
    title: "Safe Environment",
    description: "CCTV monitored premises with child-safe infrastructure and secure entry/exit.",
    icon: "ShieldCheck"
  },
  {
    title: "Smart Learning",
    description: "Interactive audio-visual learning tools that make concepts come alive.",
    icon: "BookOpen"
  },
  {
    title: "Music & Movement",
    description: "Daily sessions of rhymes, music, and dance for holistic expression.",
    icon: "Music"
  },
  {
    title: "Arts & Crafts",
    description: "Nurturing creativity through various artistic mediums and activities.",
    icon: "Palette"
  },
  {
    title: "Rhymes & Slokas",
    description: "Combining modern education with traditional values through slokas.",
    icon: "Sun"
  },
  {
    title: "Caring Staff",
    description: "Highly trained, empathetic teachers who treat every child like their own.",
    icon: "Heart"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    parentOf: "Aryan (Nursery)",
    comment: "The atmosphere is so joyful. My son loves going to school every morning. The teachers are incredibly patient.",
    avatar: "/images/priyasharma.webp"
  },
  {
    name: "Ramesh Reddy",
    parentOf: "Kavya (UKG)",
    comment: "Excellent balance of academics and values. The slokas and rhymes they teach are helping my daughter connect with her roots.",
    avatar: "/images/rameshreddy.webp"
  },
  {
    name: "Sneha Varma",
    parentOf: "Ishaan (Playgroup)",
    comment: "Clean, safe, and colorful. The daycare facility is a lifesaver for working parents like us. Highly recommended!",
    avatar: "/images/snehavarma.webp"
  }
];


