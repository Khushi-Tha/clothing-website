import kurta from "@/assets/product-kurta.jpg";
import sherwani from "@/assets/product-sherwani.jpg";
import suit from "@/assets/product-suit.jpg";
import nehru from "@/assets/product-nehru.jpg";
import shoes from "@/assets/product-shoes.jpg";
import pocketsquare from "@/assets/product-pocketsquare.jpg";

export type Category = "Sherwani" | "Kurta" | "Suit" | "Nehru Jacket" | "Footwear" | "Accessories";

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  category: Category;
  image: string;
  fabric: string;
  craftsmanship: string;
  description: string;
  details: string[];
  sizes: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: "p-001",
    slug: "noor-e-shahi-sherwani",
    name: "Noor-e-Shahi Sherwani",
    tagline: "Royal maroon velvet, hand-spun gold zardozi",
    price: 84500,
    currency: "₹",
    category: "Sherwani",
    image: sherwani,
    fabric: "Italian velvet, satin lining",
    craftsmanship: "Hand-embroidered over 320 hours in Lucknow",
    description:
      "A regal silhouette designed for the modern groom. Crafted from imported Italian velvet and adorned with intricate gold zardozi by master karigars, the Noor-e-Shahi commands every room it enters.",
    details: [
      "Mandarin collar with gold thread border",
      "Hand-finished gold dome buttons",
      "Includes matching churidar and dupatta",
      "Concealed inner pocket",
    ],
    sizes: ["38", "40", "42", "44", "46"],
    badge: "Signature",
  },
  {
    id: "p-002",
    slug: "shahenshah-black-kurta",
    name: "Shahenshah Silk Kurta",
    tagline: "Onyx silk with gold zari neckline",
    price: 28900,
    currency: "₹",
    category: "Kurta",
    image: kurta,
    fabric: "Pure mulberry silk",
    craftsmanship: "Zari embroidered placket, hand-finished",
    description:
      "Quiet luxury in its purest form. The Shahenshah kurta pairs deep onyx silk with restrained gold zari at the placket and collar — an heirloom for the discerning gentleman.",
    details: [
      "Slim modern fit",
      "Side slits with gold piping",
      "Mother-of-pearl secondary buttons",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "New",
  },
  {
    id: "p-003",
    slug: "darbar-three-piece-suit",
    name: "Darbar Three-Piece Suit",
    tagline: "Charcoal pinstripe, super 150s wool",
    price: 64200,
    currency: "₹",
    category: "Suit",
    image: suit,
    fabric: "Super 150s Italian wool",
    craftsmanship: "Half-canvas construction, surgeon cuffs",
    description:
      "Boardroom power, evening grace. The Darbar is tailored from Reda Super 150s wool with a tonal pinstripe — a quiet statement of authority.",
    details: [
      "Notch lapel single-breasted jacket",
      "Six-button waistcoat",
      "Flat-front trousers with side adjusters",
    ],
    sizes: ["38", "40", "42", "44", "46", "48"],
  },
  {
    id: "p-004",
    slug: "ivory-bandhgala-jacket",
    name: "Ivory Bandhgala",
    tagline: "Ivory raw silk with gold dome buttons",
    price: 42800,
    currency: "₹",
    category: "Nehru Jacket",
    image: nehru,
    fabric: "Raw silk with cotton lining",
    craftsmanship: "Bandhgala construction, hand-finished hems",
    description:
      "An effortlessly elegant bandhgala in cream raw silk, paired with a crisp white kurta. The hallmark of festive evenings and weddings alike.",
    details: [
      "Mandarin collar",
      "Eight-button gold front",
      "Welt pockets with hand stitching",
    ],
    sizes: ["38", "40", "42", "44", "46"],
  },
  {
    id: "p-005",
    slug: "sahib-oxford-shoes",
    name: "Sahib Oxford",
    tagline: "Hand-burnished black calf leather",
    price: 18900,
    currency: "₹",
    category: "Footwear",
    image: shoes,
    fabric: "Italian calf leather, leather sole",
    craftsmanship: "Goodyear welted, hand-burnished by Agra masters",
    description:
      "A timeless cap-toe oxford crafted from supple Italian calf leather, hand-burnished to a deep mirror shine. Built to outlast generations.",
    details: [
      "Goodyear welted construction",
      "Five-eyelet closed lacing",
      "Includes shoe trees and dust bag",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "p-006",
    slug: "maharaja-paisley-pocket-square",
    name: "Maharaja Pocket Square",
    tagline: "Maroon silk twill with gold paisley",
    price: 3400,
    currency: "₹",
    category: "Accessories",
    image: pocketsquare,
    fabric: "Italian silk twill",
    craftsmanship: "Hand-rolled edges in Varanasi",
    description:
      "The finishing flourish for any tailored ensemble. Printed in Como on heavyweight silk twill and finished with hand-rolled edges.",
    details: [
      "33 × 33 cm",
      "Hand-rolled edges",
      "Made in India with Italian silk",
    ],
    sizes: ["One Size"],
  },
];

export const categories: Category[] = [
  "Sherwani",
  "Kurta",
  "Suit",
  "Nehru Jacket",
  "Footwear",
  "Accessories",
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(p: Product) {
  return `${p.currency}${p.price.toLocaleString("en-IN")}`;
}