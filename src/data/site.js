// All site content lives here, so pages stay presentational.
// Swap names, prices and copy without touching layout code.
// Translatable copy is stored per language ({ en, id }) and flattened by the get* helpers.

export const languages = ["en", "id"];
export const defaultLang = "en";

const siteBase = {
  name: "Ladang Senja",
  email: "stay@ladangsenja.example",
  whatsapp: "+62 000 0000 0000",
  author: "I Gede Eka Surajati",
  authorUrl: "https://github.com/dksurajati",
  tagline: {
    en: "Three private villas among the rice terraces of Ubud",
    id: "Tiga vila privat di antara sawah terasering Ubud",
  },
  location: {
    en: "Jl. Raya Penestanan (fictional address), Ubud, Bali",
    id: "Jl. Raya Penestanan (alamat fiktif), Ubud, Bali",
  },
};

const villaData = [
  {
    slug: "villa-padi",
    name: "Villa Padi",
    guests: 2,
    bedrooms: 1,
    size: 85,
    price: 2400000,
    scene: "dawn",
    en: {
      summary: "A one-bedroom hideaway that opens straight onto the paddies.",
      description:
        "Villa Padi sits at the edge of the terraces, so the first thing you see each morning is green. A teak sliding wall folds away to join the bedroom, the deck and a 6-metre plunge pool into one room.",
      features: ["Private plunge pool", "Outdoor stone bathtub", "Floating breakfast", "Rice-field view deck"],
    },
    id: {
      summary: "Tempat persembunyian satu kamar tidur yang langsung menghadap hamparan sawah.",
      description:
        "Villa Padi berada di tepi terasering, jadi pemandangan pertama setiap pagi adalah hijaunya sawah. Dinding geser dari kayu jati bisa dibuka penuh, menyatukan kamar tidur, dek, dan kolam rendam sepanjang 6 meter menjadi satu ruang.",
      features: ["Kolam rendam pribadi", "Bak mandi batu di luar ruangan", "Sarapan terapung", "Dek dengan pemandangan sawah"],
    },
  },
  {
    slug: "villa-kayu",
    name: "Villa Kayu",
    guests: 4,
    bedrooms: 2,
    size: 140,
    price: 3900000,
    scene: "noon",
    en: {
      summary: "Two bedrooms in reclaimed timber, built for slow family mornings.",
      description:
        "Built from reclaimed ironwood by local carpenters, Villa Kayu wraps two bedrooms around a shaded courtyard. The open kitchen and long dining table make it a natural base for families and friends.",
      features: ["10-metre lap pool", "Open kitchen", "Courtyard garden", "Daily housekeeping"],
    },
    id: {
      summary: "Dua kamar tidur dari kayu daur ulang, untuk pagi santai bersama keluarga.",
      description:
        "Dibangun dari kayu ulin bekas oleh tukang kayu setempat, Villa Kayu menempatkan dua kamar tidur di sekeliling halaman dalam yang teduh. Dapur terbuka dan meja makan yang panjang menjadikannya tempat menginap yang pas untuk keluarga dan teman.",
      features: ["Kolam renang lap 10 meter", "Dapur terbuka", "Taman di halaman dalam", "Layanan kebersihan harian"],
    },
  },
  {
    slug: "villa-senja",
    name: "Villa Senja",
    guests: 6,
    bedrooms: 3,
    size: 210,
    price: 5600000,
    scene: "dusk",
    en: {
      summary: "Our largest villa, set high on the ridge for long sunsets.",
      description:
        "Villa Senja takes its name from the Indonesian word for dusk. Set on the highest terrace, its infinity pool and rooftop bale face west, catching the last light over the valley every evening.",
      features: ["Infinity pool", "Rooftop bale", "Private chef on request", "Yoga deck"],
    },
    id: {
      summary: "Vila terbesar kami, berdiri tinggi di punggung bukit untuk menikmati senja yang panjang.",
      description:
        "Villa Senja dinamai dari waktu matahari terbenam. Berada di teras tertinggi, kolam infinity dan bale di atapnya menghadap ke barat, menangkap cahaya terakhir di atas lembah setiap sore.",
      features: ["Kolam infinity", "Bale di atap", "Koki pribadi atas permintaan", "Dek yoga"],
    },
  },
];

const experienceData = [
  {
    en: { title: "Rice terrace walks", text: "Morning walks along the subak with a farmer from the village." },
    id: { title: "Jalan-jalan di sawah", text: "Jalan pagi menyusuri subak bersama petani dari desa." },
  },
  {
    en: { title: "Balinese cooking", text: "Market visit and a cooking class in our open kitchen." },
    id: { title: "Memasak masakan Bali", text: "Kunjungan ke pasar dan kelas memasak di dapur terbuka kami." },
  },
  {
    en: { title: "Spa in the villa", text: "Traditional massage and flower baths, brought to you." },
    id: { title: "Spa di vila", text: "Pijat tradisional dan mandi bunga, langsung di vila Anda." },
  },
  {
    en: { title: "Ubud, ten minutes away", text: "Galleries, the palace and the market, with a driver on call." },
    id: { title: "Ubud, sepuluh menit saja", text: "Galeri, puri, dan pasar, dengan sopir yang siap mengantar." },
  },
];

export const getSite = (lang = defaultLang) => ({
  ...siteBase,
  tagline: siteBase.tagline[lang],
  location: siteBase.location[lang],
});

export const getVillas = (lang = defaultLang) =>
  villaData.map(({ en, id, ...villa }) => ({ ...villa, ...(lang === "id" ? id : en) }));

export const getExperiences = (lang = defaultLang) => experienceData.map((e) => e[lang]);

// Language-independent villa list, used for static paths.
export const villaSlugs = villaData.map((v) => v.slug);

export const formatIDR = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
