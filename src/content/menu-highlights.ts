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
  // Per-DISH photo — this is now the default template pattern, not a
  // one-off for this client: a menu that shows what the food actually
  // looks like sells harder than a menu that only names it, and buyers
  // scanning a category banner photo above six unrelated items (the old
  // design) can't tell which dish is which. Same honesty rule as the
  // category `image` below applies at the item level too — only set this
  // when a real, accurate photo of THIS exact dish exists. An item with no
  // photo just renders as a text-only row; that's the correct fallback,
  // never substitute a photo of a different dish to fill the gap.
  image?: string;
  imageAlt?: string;
}
export interface MenuHighlightCategory {
  label: string;
  items: MenuHighlightItem[];
  // Real photo for this category — ONLY set when a genuine, accurate match
  // exists among the client's supplied photography. Deliberately left
  // undefined for categories with no honest match (Spécialités Tandoori,
  // Hyderabadi Dum Biryani, Boissons Fraîches) rather than reusing an
  // unrelated dish photo under the wrong category label — see the honesty
  // principle already documented for aggregateRating in testimonials.ts;
  // the same standard applies here. Ask the client for more per-category
  // shots to fill the gaps instead of faking a match.
  image?: string;
  imageAlt?: string;
}

export const menuHighlights: MenuHighlightCategory[] = [
  {
    // No category-level banner here anymore — now that both items below
    // have their own accurate dish photo, a generic category banner on
    // top would just repeat the same food a second time. Category banners
    // stay for the categories below that DON'T have per-item photos yet.
    label: 'Entrées Végétariennes',
    items: [
      { name: 'Vegetable Samosa (2 pcs)', description: 'Pâtisserie indienne croustillante farcie de légumes aromatiques épicés.', priceMAD: 40, image: '/images/dish-samosa.jpg', imageAlt: 'Deux samosas végétariens croustillants avec sauce tamarin' },
      { name: 'Vegetable Pani Puri (6 pcs)', description: "Boules croustillantes farcies d'eau acidulée épicée et de chutneys.", priceMAD: 45, image: '/images/dish-pani-puri.jpg', imageAlt: 'Pani puri garnis de pommes de terre, pois chiches et coriandre' },
    ],
  },
  {
    label: 'Spécialités Tandoori',
    items: [
      { name: 'Tandoori Chicken', description: 'Poulet mariné aux épices et yaourt, grillé au four tandoor traditionnel.', priceMAD: 100, image: '/images/dish-tandoori-chicken.jpg', imageAlt: 'Cuisses de poulet tandoori grillées, servies avec oignons et citron' },
      { name: 'Chicken Tikka', description: 'Brochettes de dés de poulet désossés marinés et cuits au tandoor.', priceMAD: 95, image: '/images/dish-chicken-tikka.jpg', imageAlt: 'Brochettes de chicken tikka grillées, garnies de coriandre fraîche' },
    ],
  },
  {
    label: 'Hyderabadi Dum Biryani',
    image: '/images/gallery-biryani.jpg',
    imageAlt: 'Biryani, pani puri et naan servis à table',
    items: [
      { name: 'Lamb Biryani', description: "Riz basmati parfumé mi-cuit avec de l'agneau tendre et épices douces.", priceMAD: 110 },
      { name: 'Chicken Biryani', description: "Spécialité d'Hyderabad : poulet et riz basmati cuits à l'étouffée.", priceMAD: 95 },
    ],
  },
  {
    label: 'Plats Principaux',
    image: '/images/gallery-curries.jpg',
    imageAlt: 'Currys mijotés servis en plat principal',
    items: [
      { name: 'Butter Chicken', description: 'Incontournable poulet mijoté dans une sauce veloutée au beurre et tomate.', priceMAD: 80 },
      { name: 'Chicken Tikka Masala', description: 'Poulet tandoori grillé servi dans une sauce masala crémeuse.', priceMAD: 80 },
    ],
  },
  {
    label: 'Naan, Riz & Nouilles',
    image: '/images/gallery-naan.jpg',
    imageAlt: 'Naan fait maison, cuit au tandoor',
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
