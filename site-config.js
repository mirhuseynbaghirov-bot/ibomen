// =====================================================================
//  İboMen — bu fayl saytın bütün tənzimləmələrini saxlayır.
// =====================================================================

// 1) Firebase Console → Project settings → General → Your apps → Config
export const firebaseConfig = {
  apiKey: "BURA_YAZIN",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  appId: "BURA_YAZIN"
};

// 2) Admin e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "admin@email.com";

// 3) Cloudinary: Cloud name və "Unsigned" upload preset adı
export const CLOUD_NAME = "BURA_YAZIN";
export const UPLOAD_PRESET = "BURA_YAZIN";

// 4) Instagram istifadəçi adı (@ olmadan) — real ad ilə əvəz edin
export const INSTAGRAM = "ibomen";

// 5) Məhsul sayı limiti (0 = limit yoxdur) və valyuta
export const MAX_PRODUCTS = 100;
export const CURRENCY = "₼";

// 6) Brend mətnləri
export const BRAND = {
  name: "İboMen",
  announce: "Yeni kolleksiya · Sifariş Instagram DM-də",
  heroTitle: "Üslubunu geyin",
  heroText: "Yeni gələn paltarlar. Ölçünü seç, Instagram-da bizə yaz, sifarişin hazırdır.",
  about: "",   // doldursanız "Haqqımızda" bölməsi görünür
  steps: [
    { title: "Paltarı seçin",             text: "Bəyəndiyiniz paltarı tapın, ölçüsünü və stokunu yoxlayın." },
    { title: "Sifariş et düyməsinə basın", text: "Instagram-da mesaj açılır. Məhsulun adını və ölçünü yazın." },
    { title: "Detalları razılaşdırın",     text: "Ünvanı və ödəniş qaydasını mesajda razılaşdırın." }
  ]
};

// 7) Rənglər və şriftlər (şrift adları Google Fonts-dakı kimi)
export const THEME = {
  ink:    "#0a0a0a",          // qara
  accent: "#e10600",          // qırmızı
  bg:     "#ffffff",          // ağ
  soft:   "#f1f1f1",
  font:   "Barlow",           // əsas mətn
  fontDisplay: "Barlow Condensed"   // iri başlıqlar
};

// 8) Admin paneldə kateqoriya təklifləri
export const CATEGORIES = ["Futbolka", "Köynək", "Şalvar", "Hudi", "Gödəkçə", "Ayaqqabı"];
