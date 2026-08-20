// ============================================================================
// AMPLIFY MARKETING SITE — site.config.ts
//
// THIS IS THE ONLY FILE YOU EDIT PER CLIENT (together with src/content/faq.ts
// and src/content/testimonials.ts for longer lists). Same philosophy as the
// order-landing-page engine's brand.config.ts: one config object, real
// content, nothing hardcoded in the page templates.
//
// PER-CLIENT PUBLISH CHECKLIST (do all of these, in this order):
//   1. Fill in every field below with the real restaurant's info.
//   2. Update astro.config.mjs's SITE_URL to match identity.siteUrl exactly
//      (sitemap + canonical URLs are generated from astro.config's `site`,
//      NOT from this file — they must match or canonicals will be wrong),
//      AND update the Sitemap: line in public/robots.txt to the same URL.
//   3. Fill src/content/faq.ts and src/content/testimonials.ts with real,
//      client-specific content — do not ship the example FAQ/reviews.
//   4. Replace every image in public/ with real photos (see the "why 100+
//      real photos matter more than any code change" note below).
//   5. Double-check ordering.orderSiteUrl points at the actual deployed
//      order-landing-page (the separate React/Vite project) — every
//      "Commander" CTA on this site links out to that URL.
// ============================================================================

export interface SiteConfig {
  identity: {
    name: string;
    tagline: string;
    city: string;
    country: string;
    siteUrl: string; // must match astro.config.mjs's SITE_URL exactly
    // The primary SERVICE keyword — deliberately WITHOUT the city baked in
    // ("restaurant indien", not "restaurant indien Rabat"). Every page
    // composes it with `city` explicitly (`${primaryKeyword} à ${city}`),
    // exactly once per sentence. Keeping city out of the constant is what
    // stops it from being concatenated in twice in the same title/
    // description — a real bug this template shipped with once already
    // ("restaurant indien Rabat au Rabat"). Match the exact term the local
    // market actually searches, not a rebrand of it ("spa culinaire") — see
    // the standing SEO notes at the bottom of this file.
    primaryKeyword: string;
  };
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string; // tel: link, digits only with country code
    whatsappNumber: string; // digits only, country code, no + or spaces
    address: string;
    mapsUrl?: string;
    openingHours: string;
    instagramUrl?: string;
    facebookUrl?: string;
  };
  ordering: {
    // The separate order-landing-page deploy (React/Vite engine). Every
    // "Commander" / "Voir le menu et commander" button on this marketing
    // site links out to this URL — this site does not implement ordering
    // itself (see the architecture decision recorded in this project).
    orderSiteUrl: string;
  };
  social: {
    googleReviewsUrl?: string;
  };
}

export const siteConfig: SiteConfig = {
  identity: {
    name: 'Indian Flavors',
    tagline: 'Restaurant indien traditionnel au cœur de Rabat',
    city: 'Rabat',
    country: 'Maroc',
    siteUrl: 'https://indianflavors.pages.dev',
    primaryKeyword: 'restaurant indien',
  },
  colors: {
    primary: '#C8102E',
    accent: '#C9A15A',
    background: '#0B0B0C',
  },
  contact: {
    phoneDisplay: '07 74 44 74 44',
    phoneHref: 'tel:+212774447444',
    whatsappNumber: '212774447444',
    address: '29 Jbel El Ayachi, Rabat 10080',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=29+Jbel+El+Ayachi%2C+Rabat+10080',
    openingHours: 'Ouvert tous les jours : 13:00 - 23:00',
    instagramUrl: 'https://www.instagram.com/indianflavors.ma/',
    facebookUrl: 'https://www.facebook.com/indianflavors.ma/',
  },
  ordering: {
    orderSiteUrl: 'https://indianflavor.pages.dev',
  },
  social: {
    googleReviewsUrl: '',
  },
};

// ----------------------------------------------------------------------------
// STANDING SEO NOTES — read before editing page copy or adding new pages.
// These are the non-negotiable rules the templates in src/pages/ were built
// around; breaking them quietly undoes the SEO work even if the page still
// "looks fine".
//
// 1. Keyword realism: use the term the local market actually types into
//    Google in the H1, body copy, meta title AND meta description of a
//    page — all four, not just one. A clever rebrand of the service name
//    loses the search traffic entirely.
// 2. No keyword cannibalization: never create two pages targeting the same
//    search intent (e.g. a "Commander" page AND a "Livraison" page). This
//    site deliberately has ONE ordering path — every CTA points at
//    ordering.orderSiteUrl — instead of splitting that intent across pages.
// 3. FAQ sections are structural, not decorative: AI answer engines (ChatGPT,
//    Google AI Overviews, Perplexity) pull directly from clearly-formatted
//    question/answer pairs. Every service-relevant page should have one.
// 4. Real photos beat every on-page trick combined. Code cannot manufacture
//    E-E-A-T — only the client uploading 100+ real, original photos of the
//    food and the physical location can. Don't waste time renaming image
//    files to keyword strings or injecting EXIF geodata: Google strips that
//    metadata on upload and it can read as manipulation, not help ranking.
// 5. Review velocity and Google Business Profile completeness (Services
//    section, not Products) are the two highest-leverage local-SEO levers
//    available — and neither is something this codebase can do for you.
//    That's an operating habit for whoever runs the account: reply to every
//    review fast, and ask happy customers to name the dish + city in their
//    review text.
// ----------------------------------------------------------------------------
