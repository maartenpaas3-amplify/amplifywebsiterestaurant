// Curated testimonials — pulled from Google/social and republished here on
// purpose (see the standing note in site.config.ts): AI answer engines scan
// on-domain review pages for recommendations, not just the Google listing
// itself. Keep `sourceUrl` pointed at the real review when you have one —
// linking out to the original is what keeps this page honest rather than
// reading as fabricated testimonials.
export interface Testimonial {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string; // ISO date, used in the Review JSON-LD
  sourceUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Yasmine B.',
    rating: 5,
    text: 'Le meilleur restaurant indien de Rabat, sans hésiter. Le Chicken Tikka Masala est incroyable et le service est toujours impeccable.',
    date: '2026-06-14',
  },
  {
    name: 'Karim T.',
    rating: 5,
    text: "On commande régulièrement en livraison depuis Agdal — toujours chaud, toujours à l'heure. Le Lamb Tikka est notre plat préféré.",
    date: '2026-05-02',
  },
  {
    name: 'Sofia M.',
    rating: 4,
    text: "Très bonne adresse pour un dîner en famille à Rabat. Ambiance chaleureuse, cuisine authentique. On recommande le Biryani.",
    date: '2026-04-18',
  },
  {
    name: 'Anas D.',
    rating: 5,
    text: 'Enfin un vrai goût indien à Rabat, pas édulcoré pour le marché local. Le pain naan est fait minute, ça se sent.',
    date: '2026-03-27',
  },
];
