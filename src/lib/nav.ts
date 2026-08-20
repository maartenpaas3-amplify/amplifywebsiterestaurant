import { siteConfig } from '../config/site.config';

// Single source of truth for the "Commander" CTA that appears in the
// header, footer, and every page's primary CTA button. Deliberately ONE
// object used everywhere instead of each component hardcoding its own
// label/href — that's what keeps this a one-line change if the order site
// URL or the CTA copy ever changes.
export const orderCtaLabel = {
  label: 'Commander',
  href: siteConfig.ordering.orderSiteUrl,
};
