import heroBride from "@/assets/hero-bride.jpg";
import aboutArtist from "@/assets/about-artist.jpg";
import lookBridalTraditional from "@/assets/look-bridal-traditional.jpg";
import lookBridalSoftglam from "@/assets/look-bridal-softglam.jpg";
import lookParty from "@/assets/look-party.jpg";
import lookNude from "@/assets/look-nude.jpg";
import lookEditorial from "@/assets/look-editorial.jpg";
import lookLight from "@/assets/look-light.jpg";
import flatlay from "@/assets/flatlay-products.jpg";
import before1 from "@/assets/before-1.jpg";
import before2 from "@/assets/before-2.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";

export const IMAGES = {
  heroBride,
  aboutArtist,
  flatlay,
  bridalTraditional: lookBridalTraditional,
  bridalSoftglam: lookBridalSoftglam,
  party: lookParty,
  nude: lookNude,
  editorial: lookEditorial,
  light: lookLight,
  before1,
  before2,
  before3: lookNude,
  insta2,
  insta3,
  insta4,
  insta5,
};

// Map service slugs to images
export const serviceImages: Record<string, string> = {
  "bridal-makeup": lookBridalTraditional,
  "party-makeup": lookParty,
  "nude-makeup": lookNude,
  "light-makeup": lookLight,
  "editorial-makeup": lookEditorial,
};
