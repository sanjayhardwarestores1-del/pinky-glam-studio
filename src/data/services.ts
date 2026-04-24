export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  ideal: string;
  keyword: string;
  hue: string;
}

export const services: Service[] = [
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    short: "Timeless bridal looks crafted to last from haldi to vidaai.",
    description:
      "As Raipur's go-to bridal makeup artist, Pinky designs heirloom-worthy bridal looks using HD foundations, premium pigments and waterproof formulas. Every bride receives a personalised colour-matched look — soft glam, traditional red, regal South-Indian or modern minimalist — that photographs beautifully and lasts 14+ hours.",
    benefits: [
      "HD + airbrush dual finish for flawless photo coverage",
      "Waterproof, sweatproof, 14+ hour wear",
      "Personal trial session before the big day",
      "Premium imported brands — MAC, Huda, Charlotte Tilbury, Kryolan",
    ],
    ideal: "Brides, sisters of the bride, mehendi & sangeet looks",
    keyword: "best bridal makeup artist in Raipur",
    hue: "from-blush to-champagne",
  },
  {
    slug: "party-makeup",
    title: "Party Makeup",
    short: "Show-stopping party glam that turns every entry into a moment.",
    description:
      "Whether it's a cocktail, reception or birthday gala, our party makeup combines luminous skin, sculpted features and glittering eye looks. Pinky tailors every party makeup in Raipur to your outfit, mood and venue lighting.",
    benefits: [
      "Glow-from-within base with subtle shimmer",
      "Long-lasting lip & eye combos",
      "Quick 60–75 minute service",
      "Customised to your outfit colour",
    ],
    ideal: "Cocktails, receptions, birthdays, anniversaries",
    keyword: "party makeup artist Raipur",
    hue: "from-blush-deep to-rose-gold",
  },
  {
    slug: "nude-makeup",
    title: "Nude Makeup",
    short: "Effortless 'no-makeup' makeup with luminous, lit-from-within skin.",
    description:
      "Our signature nude makeup creates a soft, dewy, second-skin finish. Perfect for engagements, intimate weddings, pre-wedding shoots and brides who want to look like the most beautiful version of themselves — naturally.",
    benefits: [
      "Skin-like, breathable finish",
      "Neutral peach & beige tones",
      "Lightweight & comfortable all day",
      "Photographs beautifully in daylight",
    ],
    ideal: "Engagements, pre-wedding shoots, intimate ceremonies",
    keyword: "nude makeup artist near me",
    hue: "from-nude to-blush",
  },
  {
    slug: "light-makeup",
    title: "Light Makeup",
    short: "Fresh, polished look for daytime events and family functions.",
    description:
      "A clean, polished everyday glam — perfect for haldi, mata-ki-chowki, baby showers and office events. Light makeup that enhances your features without feeling heavy.",
    benefits: [
      "Quick 45-minute service",
      "Perfect for daytime lighting",
      "Affordable luxury experience",
      "Includes hair styling",
    ],
    ideal: "Haldi, daytime parties, family functions, office events",
    keyword: "affordable makeup artist Raipur",
    hue: "from-champagne to-ivory",
  },
  {
    slug: "editorial-makeup",
    title: "Editorial Makeup",
    short: "Avant-garde editorial looks for fashion shoots & magazines.",
    description:
      "From high-fashion campaigns to magazine covers, Pinky brings creative direction and bold artistry to every editorial makeup project. Perfect for designers, models and brand campaigns in Chhattisgarh.",
    benefits: [
      "Concept-led creative makeup",
      "Collaboration with photographers & stylists",
      "Bold colour theory & finishes",
      "On-location & studio shoots",
    ],
    ideal: "Models, magazines, designers, brand campaigns",
    keyword: "editorial makeup artist Chhattisgarh",
    hue: "from-rose-gold-deep to-blush",
  },
];
