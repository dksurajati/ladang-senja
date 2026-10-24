// All site content lives here, so pages stay presentational.
// Swap names, prices and copy without touching layout code.

export const site = {
  name: "Ladang Senja",
  tagline: "Three private villas among the rice terraces of Ubud",
  location: "Jl. Raya Penestanan (fictional address), Ubud, Bali",
  email: "stay@ladangsenja.example",
  whatsapp: "+62 000 0000 0000",
  author: "I Gede Eka Surajati",
  authorUrl: "https://github.com/dksurajati",
};

export const villas = [
  {
    slug: "villa-padi",
    name: "Villa Padi",
    summary: "A one-bedroom hideaway that opens straight onto the paddies.",
    description:
      "Villa Padi sits at the edge of the terraces, so the first thing you see each morning is green. A teak sliding wall folds away to join the bedroom, the deck and a 6-metre plunge pool into one room.",
    guests: 2,
    bedrooms: 1,
    size: 85,
    price: 2400000,
    scene: "dawn",
    features: ["Private plunge pool", "Outdoor stone bathtub", "Floating breakfast", "Rice-field view deck"],
  },
  {
    slug: "villa-kayu",
    name: "Villa Kayu",
    summary: "Two bedrooms in reclaimed timber, built for slow family mornings.",
    description:
      "Built from reclaimed ironwood by local carpenters, Villa Kayu wraps two bedrooms around a shaded courtyard. The open kitchen and long dining table make it a natural base for families and friends.",
    guests: 4,
    bedrooms: 2,
    size: 140,
    price: 3900000,
    scene: "noon",
    features: ["10-metre lap pool", "Open kitchen", "Courtyard garden", "Daily housekeeping"],
  },
  {
    slug: "villa-senja",
    name: "Villa Senja",
    summary: "Our largest villa, set high on the ridge for long sunsets.",
    description:
      "Villa Senja takes its name from the Balinese word for dusk. Set on the highest terrace, its infinity pool and rooftop bale face west, catching the last light over the valley every evening.",
    guests: 6,
    bedrooms: 3,
    size: 210,
    price: 5600000,
    scene: "dusk",
    features: ["Infinity pool", "Rooftop bale", "Private chef on request", "Yoga deck"],
  },
];

export const experiences = [
  { title: "Rice terrace walks", text: "Morning walks along the subak with a farmer from the village." },
  { title: "Balinese cooking", text: "Market visit and a cooking class in our open kitchen." },
  { title: "Spa in the villa", text: "Traditional massage and flower baths, brought to you." },
  { title: "Ubud, ten minutes away", text: "Galleries, the palace and the market, with a driver on call." },
];

export const formatIDR = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
