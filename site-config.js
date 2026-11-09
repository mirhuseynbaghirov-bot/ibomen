// =====================================================================
//  İboMen — bu fayl saytın bütün tənzimləmələrini saxlayır.
// =====================================================================

// 1) Firebase Console → Project settings → General → Your apps → Config
export const firebaseConfig = {
  apiKey: "AIzaSyAqaRtk16Kimpc4tXBg2yrJGlVyuCGulE4",
  authDomain: "ibomen-a62fd.firebaseapp.com",
  projectId: "ibomen-a62fd",
  appId: "1:157650261296:web:1578b8da31b013efc7e4f5"
};

// 2) Admin e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "ibomen@gmail.com";

// 3) Cloudinary: Cloud name və "Unsigned" upload preset adı
export const CLOUD_NAME = "djrmuwzy";
export const UPLOAD_PRESET = "ymvkjqcr";

// 4) Instagram istifadəçi adı (@ olmadan) — real ad ilə əvəz edin
export const INSTAGRAM = "ibomen.ahmedli";

// 5) Məhsul sayı limiti (0 = limit yoxdur) və valyuta
export const MAX_PRODUCTS = 50;
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
