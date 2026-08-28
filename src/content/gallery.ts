// GALLERY CONTENT — swap the imported images and captions to update the archive.

import tacos from "@/assets/food-tacos.jpg";
import consome from "@/assets/food-consome.jpg";
import quesadilla from "@/assets/food-quesadilla.jpg";
import popupNight from "@/assets/popup-night.jpg";
import chefHands from "@/assets/chef-hands.jpg";
import community from "@/assets/community.jpg";
import catering from "@/assets/catering.jpg";
import overhead from "@/assets/food-overhead.jpg";

export type GalleryCategory = "Food" | "Pop-Ups" | "Events" | "Collabs" | "Catering";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  width: number;
  height: number;
  wide?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "Food",
  "Pop-Ups",
  "Events",
  "Collabs",
  "Catering",
];

export const galleryItems: GalleryItem[] = [
  {
    src: tacos,
    alt: "Tray of birria tacos with cilantro and onion",
    caption: "Tray service / placeholder image",
    category: "Food",
    width: 1200,
    height: 1500,
  },
  {
    src: popupNight,
    alt: "Food pop-up stand at dusk with string lights",
    caption: "Pop-up at dusk / placeholder image",
    category: "Pop-Ups",
    width: 1400,
    height: 1000,
    wide: true,
  },
  {
    src: consome,
    alt: "Hand holding a steaming cup of consomé",
    caption: "Consomé / placeholder image",
    category: "Food",
    width: 1200,
    height: 1500,
  },
  {
    src: community,
    alt: "People eating together at an outdoor pop-up at golden hour",
    caption: "Sunday crowd / placeholder image",
    category: "Events",
    width: 1400,
    height: 1000,
    wide: true,
  },
  {
    src: chefHands,
    alt: "Hands ladling birria from a large pot",
    caption: "Prep / placeholder image",
    category: "Collabs",
    width: 1200,
    height: 1500,
  },
  {
    src: quesadilla,
    alt: "Cheesy birria quesadilla pulled apart",
    caption: "Quesabirria / placeholder image",
    category: "Food",
    width: 1400,
    height: 1000,
    wide: true,
  },
  {
    src: catering,
    alt: "Catering trays and garnish bowls set up on a dark table",
    caption: "Private event setup / placeholder image",
    category: "Catering",
    width: 1200,
    height: 1500,
  },
  {
    src: overhead,
    alt: "Overhead plate of birria and tacos with salsa and lime",
    caption: "Full plate / placeholder image",
    category: "Food",
    width: 1400,
    height: 1000,
    wide: true,
  },
];
