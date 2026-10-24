// Interface strings for each language. Page copy that belongs to a villa or
// experience lives in src/data/site.js instead.
import { defaultLang } from "../data/site.js";

const plural = (n, one, many) => (n === 1 ? one : many);

export const ui = {
  en: {
    "meta.defaultTitle": "Private villas in Ubud",
    "skip": "Skip to content",
    "nav.label": "Main",
    "nav.villas": "Villas",
    "nav.experiences": "Experiences",
    "nav.enquire": "Enquire",
    "lang.label": "Language",
    "footer.concept": (name) => `Concept project. ${name} is a fictional property, designed and built by`,
    "footer.conceptEnd": "with Astro.",

    "hero.art": "Illustration of rice terraces at dusk",
    "hero.title": ["Slow mornings", "above the terraces"],
    "hero.lead": (tagline) => `${tagline}, ten minutes from the centre of town.`,
    "hero.seeVillas": "See the villas",
    "cta.checkDates": "Check dates",

    "intro.eyebrow": "The place",
    "intro.title": "Built by village craftsmen, run like a home",
    "intro.text": (name) =>
      `${name} is three villas on a working rice field. Each one faces the valley, has its own pool, and is looked after by a small team from the village who will cook, plan your days, or leave you alone.`,
    "facts.villas": "private villas",
    "facts.minutes": "10 min",
    "facts.toUbud": "to central Ubud",
    "facts.guests": "guests at most",

    "villas.eyebrow": "Stay",
    "villas.title": "Choose your villa",
    "villas.from": (price) => `From ${price} a night, breakfast included.`,

    "exp.eyebrow": "Your days",
    "exp.title": "Things we can arrange",

    "enq.eyebrow": "Enquire",
    "enq.title": "Tell us when you'd like to come",
    "enq.lead": "We reply within a day with availability and a confirmed price. No payment is taken here.",
    "enq.contact": (email, wa) => `Or write to ${email} · WhatsApp ${wa}`,
    "form.villa": "Villa",
    "form.villaOption": (name, n) => `${name} (up to ${n} guests)`,
    "form.checkin": "Check-in",
    "form.checkout": "Check-out",
    "form.guests": "Guests",
    "form.name": "Name",
    "form.email": "Email",
    "form.notes": "Anything we should know?",
    "form.estimate": "Estimated total",
    "form.pickDates": "Pick your dates",
    "form.submit": "Send enquiry",
    "form.note": "Concept site: this form checks your details in the browser but does not send them anywhere.",

    "villa.bedrooms": (n) => `${n} ${plural(n, "bedroom", "bedrooms")}`,
    "villa.upToGuests": (n) => `Up to ${n} guests`,
    "villa.perNightShort": "/ night",
    "villa.art": (name) => `Illustration for ${name}`,
    "villa.back": "← All villas",
    "villa.features": "In the villa",
    "villa.from": "From",
    "villa.perNight": "per night, breakfast included",
    "villa.guests": "Guests",
    "villa.upTo": (n) => `Up to ${n}`,
    "villa.bedroomsLabel": "Bedrooms",
    "villa.size": "Size",
    "villa.others": "Other villas",
  },

  id: {
    "meta.defaultTitle": "Vila privat di Ubud",
    "skip": "Langsung ke konten",
    "nav.label": "Utama",
    "nav.villas": "Vila",
    "nav.experiences": "Pengalaman",
    "nav.enquire": "Reservasi",
    "lang.label": "Bahasa",
    "footer.concept": (name) => `Proyek konsep. ${name} adalah properti fiktif, dirancang dan dibangun oleh`,
    "footer.conceptEnd": "dengan Astro.",

    "hero.art": "Ilustrasi sawah terasering saat senja",
    "hero.title": ["Pagi yang tenang", "di atas terasering"],
    "hero.lead": (tagline) => `${tagline}, sepuluh menit dari pusat kota.`,
    "hero.seeVillas": "Lihat vila",
    "cta.checkDates": "Cek tanggal",

    "intro.eyebrow": "Tempatnya",
    "intro.title": "Dibangun oleh perajin desa, dikelola seperti rumah sendiri",
    "intro.text": (name) =>
      `${name} terdiri dari tiga vila di tengah sawah yang masih digarap. Setiap vila menghadap lembah, punya kolam sendiri, dan dirawat oleh tim kecil dari desa yang siap memasak, merencanakan hari Anda, atau membiarkan Anda bersantai tanpa gangguan.`,
    "facts.villas": "vila privat",
    "facts.minutes": "10 menit",
    "facts.toUbud": "ke pusat Ubud",
    "facts.guests": "tamu maksimal",

    "villas.eyebrow": "Menginap",
    "villas.title": "Pilih vila Anda",
    "villas.from": (price) => `Mulai ${price} per malam, termasuk sarapan.`,

    "exp.eyebrow": "Hari-hari Anda",
    "exp.title": "Yang bisa kami atur",

    "enq.eyebrow": "Hubungi kami",
    "enq.title": "Kabari kami kapan Anda ingin datang",
    "enq.lead": "Kami membalas dalam satu hari dengan info ketersediaan dan harga pasti. Tidak ada pembayaran di sini.",
    "enq.contact": (email, wa) => `Atau kirim email ke ${email} · WhatsApp ${wa}`,
    "form.villa": "Vila",
    "form.villaOption": (name, n) => `${name} (maks. ${n} tamu)`,
    "form.checkin": "Check-in",
    "form.checkout": "Check-out",
    "form.guests": "Jumlah tamu",
    "form.name": "Nama",
    "form.email": "Email",
    "form.notes": "Ada yang perlu kami ketahui?",
    "form.estimate": "Perkiraan total",
    "form.pickDates": "Pilih tanggal",
    "form.submit": "Kirim pertanyaan",
    "form.note": "Situs konsep: formulir ini memeriksa data Anda di browser, tetapi tidak mengirimkannya ke mana pun.",

    "villa.bedrooms": (n) => `${n} kamar tidur`,
    "villa.upToGuests": (n) => `Maks. ${n} tamu`,
    "villa.perNightShort": "/ malam",
    "villa.art": (name) => `Ilustrasi untuk ${name}`,
    "villa.back": "← Semua vila",
    "villa.features": "Fasilitas vila",
    "villa.from": "Mulai dari",
    "villa.perNight": "per malam, termasuk sarapan",
    "villa.guests": "Tamu",
    "villa.upTo": (n) => `Maks. ${n}`,
    "villa.bedroomsLabel": "Kamar tidur",
    "villa.size": "Luas",
    "villa.others": "Vila lainnya",
  },
};

// Strings used by the enquiry form script in the browser. {n}, {name} and {villa}
// are filled in client-side, so these stay plain strings.
export const formMessages = {
  en: {
    pickDates: "Pick your dates",
    night: "night",
    nights: "nights",
    errDates: "Please choose check-in and check-out dates.",
    errPast: "Check-in can't be in the past.",
    errNights: "Check-out must be at least one night after check-in.",
    errGuests: "{villa} sleeps up to {n} guests.",
    errName: "Please add your name.",
    errEmail: "Please add a valid email address.",
    thanks: "Thank you, {name}. In a live site this would reach our team, and we'd reply within a day.",
  },
  id: {
    pickDates: "Pilih tanggal",
    night: "malam",
    nights: "malam",
    errDates: "Silakan pilih tanggal check-in dan check-out.",
    errPast: "Tanggal check-in tidak boleh di masa lalu.",
    errNights: "Check-out minimal satu malam setelah check-in.",
    errGuests: "{villa} menampung maksimal {n} tamu.",
    errName: "Silakan isi nama Anda.",
    errEmail: "Silakan isi alamat email yang valid.",
    thanks: "Terima kasih, {name}. Di situs sungguhan, pesan ini akan sampai ke tim kami, dan kami akan membalas dalam satu hari.",
  },
};

export const useTranslations = (lang = defaultLang) => (key) => ui[lang][key] ?? ui[defaultLang][key];

const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");

// Build a link inside the site for a language: localePath("id", "villas/villa-padi/") → "/id/villas/villa-padi/"
export const localePath = (lang, path = "") => `${base}${lang === defaultLang ? "" : `${lang}/`}${path.replace(/^\//, "")}`;

// The same page in another language, from the current URL pathname.
export function switchLangPath(pathname, toLang) {
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, "");
  rest = rest.replace(/^id(\/|$)/, "");
  return localePath(toLang, rest);
}
