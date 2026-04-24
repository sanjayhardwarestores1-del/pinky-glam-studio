export const SITE = {
  name: "Pinky Makeover Studio",
  tagline: "Luxury Bridal & Editorial Makeup Artist in Raipur",
  city: "Raipur",
  region: "Chhattisgarh",
  phone: "+919907756210",
  phoneDisplay: "+91 99077 56210",
  whatsapp: "919907756210",
  email: "Pinkymakeoverstudio@gmail.com",
  address: "Devendra Nagar, Sector 4, D-231, Near Saraswati School Inner Gate, Raipur, Chhattisgarh",
  instagram: "https://www.instagram.com/pinkymakeoverstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  url: "https://pinkymakeoverstudio.com",
};

export const waLink = (msg = "Hi Pinky, I want to book makeup for my upcoming event. Please share details.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
