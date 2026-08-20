// Display-only menu highlights for the marketing site — NOT the ordering
// system. This site deliberately does not implement cart/checkout (see the
// architecture decision: ordering lives on the separate order-landing-page
// engine, linked via siteConfig.ordering.orderSiteUrl). This is just enough
// menu content, per category, to be genuinely useful to a visitor and to
// give Google/AI crawlers real food-related text to index — the full,
// orderable menu lives on the order site.
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
    label: 'Entrées',
    items: [
      { name: 'Samosas Maison', description: 'Pâte triangulaire croustillante dorée, farcie de légumes épicés.', priceMAD: 29.5 },
      { name: 'Onion Bhaji', description: "Rondelles d'oignons émincées, mélangées à nos épices et frites minute.", priceMAD: 39.5 },
    ],
  },
  {
    label: 'Plats Tandooris',
    items: [
      { name: 'Chicken Tandoori', description: "Poulet entier mariné toute une nuit dans du yaourt et des épices tandoori, rôti au four d'argile.", priceMAD: 95 },
      { name: 'Lamb Tikka', description: "Spécialité du Nord de l'Inde : tendres morceaux d'agneau marinés aux épices fines et grillés au charbon.", priceMAD: 99.5 },
    ],
  },
  {
    label: 'Biryani',
    items: [
      { name: 'Chicken Biryani', description: 'Riz basmati longuement mijoté avec du poulet, safran et épices entières.', priceMAD: 89 },
    ],
  },
  {
    label: 'Pains Naan',
    items: [
      { name: 'Naan au Beurre', description: 'Pain traditionnel cuit minute au four tandoor, badigeonné de beurre.', priceMAD: 22 },
    ],
  },
];
