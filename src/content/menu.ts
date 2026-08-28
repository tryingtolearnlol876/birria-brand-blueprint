// MENU CONTENT — edit this file to update the menu.
// Prices and items are placeholders until confirmed by the kitchen.
// Set `price` to "" to hide the price line for an item.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuNote =
  "Menu placeholder — items rotate with the pop-up. Confirm current offerings before publishing.";

export const menuSections: MenuSection[] = [
  {
    id: "tacos",
    title: "Tacos",
    note: "Served with consomé for dipping.",
    items: [
      { name: "Birria Taco", description: "Placeholder — describe the house taco.", price: "TBD" },
      { name: "Quesabirria Taco", description: "Placeholder — describe the cheese taco.", price: "TBD" },
      { name: "Taco Placeholder", description: "Add or remove items in src/content/menu.ts.", price: "TBD" },
    ],
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    items: [
      { name: "Birria Quesadilla", description: "Placeholder — describe the quesadilla.", price: "TBD" },
      { name: "Quesadilla Placeholder", description: "Client to confirm size and fillings.", price: "TBD" },
    ],
  },
  {
    id: "consome",
    title: "Consomé",
    note: "The broth the whole thing is built on.",
    items: [
      { name: "Consomé Cup", description: "Placeholder — describe the cup portion.", price: "TBD" },
      { name: "Consomé Bowl", description: "Placeholder — describe the bowl portion.", price: "TBD" },
    ],
  },
  {
    id: "plates",
    title: "Plates & Specials",
    items: [
      { name: "Birria Plate", description: "Placeholder — describe the plate.", price: "TBD" },
      { name: "Weekly Special", description: "Rotating special — update weekly.", price: "TBD" },
    ],
  },
  {
    id: "extras",
    title: "Extras & Drinks",
    items: [
      { name: "Extra Consomé", description: "Placeholder.", price: "TBD" },
      { name: "Salsa / Sides", description: "Placeholder.", price: "TBD" },
      { name: "Aguas Frescas", description: "Placeholder — confirm flavors.", price: "TBD" },
    ],
  },
];
