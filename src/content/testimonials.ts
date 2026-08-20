// Curated testimonials for Indian Flavors (Rabat) — real reviews sourced
// from the restaurant's Tripadvisor page (see sourceUrl on each entry) and
// translated to French, not fabricated. Republishing real, on-domain
// reviews is what the standing note in site.config.ts is about: AI answer
// engines scan review PAGES for recommendations, not just the third-party
// listing itself.
//
// `aggregateRating` is the REAL overall rating from Tripadvisor (4.4/5,
// 43 reviews at time of writing) — deliberately NOT computed from the
// testimonials array below. Only showing a curated, mostly-positive
// selection while claiming its average as the site-wide rating would be
// misleading structured data; this keeps the JSON-LD honest even though
// the visible selection skews positive (standard, legitimate curation —
// the number just has to stay real).
//
// One 4-star review (Rehaan E.) is included on purpose: a testimonials
// page that is 100% five stars reads as curated-to-the-point-of-fake to a
// skeptical visitor. A little texture is more credible, not less.
export interface Testimonial {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string; // ISO date, used in the Review JSON-LD
  sourceUrl?: string;
}

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Restaurant_Review-g293736-d26503526-Reviews-Indian_Flavors_Restaurant-Rabat_Rabat_Sale_Kenitra.html';

export const aggregateRating = {
  ratingValue: '4.4',
  reviewCount: '43',
};

export const testimonials: Testimonial[] = [
  {
    name: 'Farzana H.',
    rating: 5,
    text: "Des saveurs vraiment authentiques de la cuisine indo-pakistanaise. Le meilleur Chicken Manchow Soup que j'ai goûté, portions généreuses de lamb kadai et de butter chicken, service très attentionné.",
    date: '2026-01-15',
    sourceUrl: TRIPADVISOR_URL,
  },
  {
    name: 'Karolina S.',
    rating: 5,
    text: "Restaurant soigné et chaleureux, cuisine délicieuse. Le lamb biryani était tout simplement le meilleur que j'ai mangé. Personnel excellent.",
    date: '2024-10-12',
    sourceUrl: TRIPADVISOR_URL,
  },
  {
    name: 'Amna S.',
    rating: 5,
    text: "Cuisine indienne incroyable. On a pris pani puri, samosa, butter chicken et lamb rogan josh — excellent service, et l'ambiance avec la musique bollywood en plus.",
    date: '2026-06-10',
    sourceUrl: TRIPADVISOR_URL,
  },
  {
    name: 'Vince A.',
    rating: 5,
    text: "Cet endroit, c'est du 10/10. Personnel adorable et le naan tout simplement le meilleur que j'ai mangé.",
    date: '2025-10-05',
    sourceUrl: TRIPADVISOR_URL,
  },
  {
    name: 'Wahiba S. E.',
    rating: 5,
    text: "Une cuisine pleine de saveurs indiennes authentiques. Le butter chicken et le naan à l'ail étaient parfaits, service rapide et amical.",
    date: '2025-07-20',
    sourceUrl: TRIPADVISOR_URL,
  },
  {
    name: 'Rehaan E.',
    rating: 4,
    text: "Très bonne cuisine, serveur sympathique. Le butter chicken était un peu sucré à mon goût, et j'aurais aimé pouvoir payer par carte.",
    date: '2024-06-18',
    sourceUrl: TRIPADVISOR_URL,
  },
];
