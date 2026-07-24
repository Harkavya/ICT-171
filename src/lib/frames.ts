import shonen from "@/assets/frame-shonen.jpg";
import ghibli from "@/assets/frame-ghibli.jpg";
import cyberpunk from "@/assets/frame-cyberpunk.jpg";

export type Frame = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  series: string[];
};

export const frames: Frame[] = [
  {
    slug: "shonen-classic",
    name: "Shonen Classic",
    tagline: "For the fighters and the dreamers.",
    description:
      "A matte black wooden frame built for iconic shonen posters — bold silhouettes, high-contrast prints, and battle-ready energy on your wall.",
    price: "₹899",
    image: shonen,
    series: ["Naruto", "Bleach", "Demon Slayer", "Jujutsu Kaisen", "One Piece"],
  },
  {
    slug: "slice-of-life",
    name: "Slice of Life",
    tagline: "Soft frames for softer worlds.",
    description:
      "A clean white frame that lets pastel palettes and Ghibli-style landscapes breathe. Perfect for calm, cozy setups.",
    price: "₹799",
    image: ghibli,
    series: ["Spirited Away", "Your Name", "A Silent Voice", "Violet Evergarden"],
  },
  {
    slug: "neon-cyberpunk",
    name: "Neon Cyberpunk",
    tagline: "Glow-lit frames for after-dark rooms.",
    description:
      "Glossy black frame with an optional LED backlight — designed for cyberpunk keyvisuals and sci-fi cover art.",
    price: "₹1,299",
    image: cyberpunk,
    series: ["Cyberpunk: Edgerunners", "Ghost in the Shell", "Akira", "Psycho-Pass"],
  },
];

export const getFrame = (slug: string) => frames.find((f) => f.slug === slug);

export const INSTAGRAM_URL = "https://instagram.com/fanlabz";
export const EMAIL = "orders@fanlabz.in";
export const GOOGLE_FORM_URL = "https://forms.gle/your-order-form-id";
