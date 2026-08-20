// Display-only menu highlights for the marketing site — NOT the ordering
// system. This site deliberately does not implement cart/checkout (see the
// architecture decision: ordering lives on the separate order-landing-page
// engine, linked via siteConfig.ordering.orderSiteUrl). This is just enough
// menu content, per category, to be genuinely useful to a visitor and to
// give Google/AI crawlers real food-related text to index — the full,
// orderable menu (60+ items) lives on the order site.
//
// Content pulled directly from indianflavor.pages.dev's live menu (Aug
// 2026) — real dishes/prices/descriptions, not placeholders. Category
// labels match the order site's own category names so a customer doesn't
// get confused seeing two different naming schemes across the two sites.
// Only a curated subset per category, not the full list.
export interface MenuHighlightItem {
  name: string;
  description: string;
  priceMAD: number;
}
export interface MenuHighlightCategory {
  label: string;
  items: MenuHighlightItem[];
}

export const menuHighlights: MenuHighlightCategory[] = [
  {
    label: 'Entrées Végétariennes',
    items: [
      { name: 'Vegetable Samosa (2 pcs)', description: 'Pâtisserie indienne croustillante farcie de légumes aromatiques épicés.', priceMAD: 40 },
      { name: 'Vegetable Pani Puri (6 pcs)', description: "Boules croustillantes farcies d'eau acidulée épicée et de chutneys.", priceMAD: 45 },
    ],
  },
  {
    label: 'Spécialités Tandoori',
    items: [
      { name: 'Tandoori Chicken', description: 'Poulet mariné aux épices et yaourt, grillé au four tandoor traditionnel.', priceMAD: 100 },
      { name: 'Chicken Tikka', description: 'Brochettes de dés de poulet désossés marinés et cuits au tandoor.', priceMAD: 95 },
    ],
  },
  {
    label: 'Hyderabadi Dum Biryani',
    items: [
      { name: 'Lamb Biryani', description: "Riz basmati parfumé mi-cuit avec de l'agneau tendre et épices douces.", priceMAD: 110 },
      { name: 'Chicken Biryani', description: "Spécialité d'Hyderabad : poulet et riz basmati cuits à l'étouffée.", priceMAD: 95 },
    ],
  },
  {
    label: 'Plats Principaux',
    items: [
      { name: 'Butter Chicken', description: 'Incontournable poulet mijoté dans une sauce veloutée au beurre et tomate.', priceMAD: 80 },
      { name: 'Chicken Tikka Masala', description: 'Poulet tandoori grillé servi dans une sauce masala crémeuse.', priceMAD: 80 },
    ],
  },
  {
    label: 'Naan, Riz & Nouilles',
    items: [
      { name: 'Garlic Naan', description: 'Naan chaud parfumé à l\'ail frais haché et coriandre.', priceMAD: 29 },
      { name: 'Cheese Naan', description: 'Pain tandoori moelleux généreusement fourré au fromage.', priceMAD: 35 },
    ],
  },
  {
    label: 'Boissons Fraîches',
    items: [
      { name: 'Mango Lassi', description: 'Boisson indienne onctueuse au yaourt et pulpe de mangue fraîche.', priceMAD: 40 },
    ],
  },
];
