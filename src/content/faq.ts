// FAQ content — kept structural (plain question/answer pairs, no nesting)
// on purpose. AI answer engines and Google's FAQ rich results both parse
// this shape directly; the FAQ page (src/pages/faq.astro) renders this list
// AND emits it as FAQPage JSON-LD (see src/components/Seo.astro usage
// there) — one source of truth for both the human-readable page and the
// structured data.
//
// Content for Indian Flavors (Rabat), built from: the Google Business
// Profile (address, hours, price range, "Privé-eetzaal"/"Veganistische
// opties" service tags), the live order-site menu (heavy vegan/veg
// labeling confirms the veg-options answer), and one Tripadvisor review
// mentioning no card payment. That last point — see the ⚠ below — is from
// a single review, not confirmed with the restaurant; verify before
// publishing, a wrong "cash only" claim is worse than no claim at all.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Où se trouve Indian Flavors ?',
    answer: 'Indian Flavors se situe au 29 Jbel El Ayachi, Rabat 10080.',
  },
  {
    question: 'Quels sont les horaires d’ouverture ?',
    answer: 'Nous sommes ouverts tous les jours de 13h00 à 23h00, service continu.',
  },
  {
    question: 'Proposez-vous la livraison à domicile ?',
    answer:
      'Oui. Toutes les commandes — sur place, à emporter ou en livraison — se passent directement via notre système de commande en ligne, relié à WhatsApp pour le suivi.',
  },
  {
    question: 'Le restaurant propose-t-il des options végétariennes et vegan ?',
    answer:
      'Oui, une grande partie de notre carte est végétarienne ou vegan — entrées, plats principaux, biryani et boissons incluent plusieurs options clairement identifiées.',
  },
  {
    question: 'Y a-t-il une salle privée pour les groupes ou événements ?',
    answer:
      "Oui, Indian Flavors dispose d'une salle privée. Pour les groupes ou occasions spéciales, nous recommandons d'appeler directement le restaurant pour réserver.",
  },
  {
    question: 'Quel est le budget moyen par personne ?',
    answer: 'Comptez entre 50 et 150 MAD par personne selon les plats choisis.',
  },
  {
    question: 'Peut-on payer par carte bancaire ?', // ⚠ VÉRIFIER avant publication — voir commentaire ci-dessus
    answer: 'Le paiement en espèces est accepté sur place ; contactez-nous pour confirmer les autres moyens de paiement disponibles.',
  },
];
