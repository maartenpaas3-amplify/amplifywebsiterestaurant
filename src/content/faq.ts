// FAQ content — kept structural (plain question/answer pairs, no nesting)
// on purpose. AI answer engines and Google's FAQ rich results both parse
// this shape directly; the FAQ page (src/pages/faq.astro) renders this list
// AND emits it as FAQPage JSON-LD (see src/components/Seo.astro usage
// there) — one source of truth for both the human-readable page and the
// structured data.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Où se trouve Indian Spice Rabat ?',
    answer:
      "Indian Spice Rabat se situe au 6 Avenue Bin Al Ouidane, Agdal, Rabat 10090 — à quelques minutes du centre d'Agdal.",
  },
  {
    question: 'Quels sont les horaires d’ouverture ?',
    answer: 'Nous sommes ouverts tous les jours de 12h00 à 23h30, service continu.',
  },
  {
    question: 'Proposez-vous la livraison à domicile ?',
    answer:
      'Oui. Toutes les commandes — sur place, à emporter ou en livraison — se passent directement via notre système de commande en ligne, relié à WhatsApp pour le suivi.',
  },
  {
    question: 'Le restaurant propose-t-il des options végétariennes ?',
    answer:
      'Oui, notre carte comprend plusieurs plats végétariens traditionnels indiens, clairement identifiés dans le menu.',
  },
  {
    question: 'Peut-on réserver une table pour un grand groupe ?',
    answer:
      "Oui, pour les groupes de plus de 6 personnes, nous recommandons d'appeler directement le restaurant pour garantir votre table.",
  },
  {
    question: 'Le restaurant est-il adapté aux enfants ?',
    answer: 'Oui, nous accueillons les familles et pouvons adapter le niveau d’épices sur demande pour les plus jeunes.',
  },
];
