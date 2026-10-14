/* 1. Taomlar ro'yxati — har bir taom nomi, tavsifi, narxi va rasmi bilan yoziladi */
const menuCategories = [
  {
    id: "asosiy",
    name: "Asosiy taomlar",
    tagline: "Choyxonamizning yuragi — qadimiy retseptlar bo'yicha",
    items: [
      { name: "To'y oshi (Palov)", description: "Qo'y go'shti, sariq sabzi, bedana tuxumi va qazi bilan", price: "45 000", image: "palov.webp", popular: true },
      { name: "Qozon kabob", description: "Qizarib pishgan qo'y go'shti va kartoshka", price: "65 000", image: "qozonkabob.webp", popular: true },
      { name: "Norin", description: "Yupqa kesilgan xamir va ot go'shti, qazi bilan", price: "55 000", image: "norin.webp" },
      { name: "Do'lma", description: "Tok bargiga o'ralgan qiyma va guruch", price: "40 000", image: "dolma.webp" },
      { name: "Dimlama", description: "Qozonda dimlangan go'sht va sabzavotlar", price: "50 000", image: "dimlama.webp", popular: true },
      { name: "Beshbarmak", description: "Keng xamir, qaynatilgan go'sht va piyoz", price: "60 000", image: "beshbarmak.webp" },
      { name: "Tuxum barak", description: "Tuxum va sutli xamir taomi", price: "35 000", image: "manti.webp" },
      { name: "Mosh kichiri", description: "Mosh va guruch shavlasi, go'sht bilan", price: "32 000", image: "mashxurda.webp" },
      { name: "Qovurma lag'mon", description: "Qovurilgan xamir, go'sht va sabzavotlar", price: "42 000", image: "lagmon.webp" },
      { name: "Tandir kabob", description: "Tandirda pishirilgan qo'y go'shti", price: "85 000", image: "tandoor.webp" },
      { name: "Qo'zi tandir", description: "Yosh qo'zi go'shti past olovda tandirda pishiriladi", price: "95 000", image: "tandoor.webp" },
      { name: "Jiz-biz", description: "Mol go'shti va jigar piyoz bilan qizartiriladi", price: "68 000", image: "qozonkabob.webp" },
      { name: "Qovurdoq", description: "Qo'y go'shti piyoz va ziravorlar bilan qovuriladi", price: "58 000", image: "tandoor.webp" },
      { name: "Tovuq qozon kabob", description: "Tovuq, kartoshka va sarimsoq qozonda pishiriladi", price: "55 000", image: "qozonkabob.webp" },
      { name: "Qazi-qarta", description: "Yupqa kesilgan qazi va an'anaviy garnir bilan", price: "52 000", image: "norin.webp" }
    ]
  },
  {
    id: "shashlik",
    name: "Shashliklar",
    tagline: "Cho'g' ustida pishirilgan, tutun hidi bilan",
    items: [
      { name: "Qo'y shashlik", description: "An'anaviy lahm qo'y go'shtidan", price: "22 000", image: "jaz.webp", popular: true },
      { name: "Qiyma shashlik", description: "Yumshoq qo'y va mol go'shtidan qiyma", price: "18 000", image: "qiyma.webp" },
      { name: "Jigar shashlik", description: "Barra qo'y jigari charvi yog'i bilan", price: "20 000", image: "jigar.webp" },
      { name: "Tovuq shashlik", description: "Marinadlangan tovuq filesi", price: "16 000", image: "tovuq.webp" },
      { name: "Mol shashlik", description: "Yumshoq mol go'shti, ziravorlar bilan", price: "24 000", image: "shashlik.webp" },
      { name: "Qovurg'a shashlik", description: "Cho'g'da pishirilgan qo'y qovurg'asi", price: "28 000", image: "jaz.webp" },
      { name: "Lyulya kabob", description: "Qiyma go'shtdan uzun cho'p shashlik", price: "25 000", image: "qiyma.webp", popular: true },
      { name: "Baliq shashlik", description: "Daryo balig'i, limon va o'tlar bilan", price: "32 000", image: "baliq.webp" },
      { name: "Dumba shashlik", description: "Lahm go'sht va dumba yog'i bilan", price: "26 000", image: "shashlik.webp" },
      { name: "Jaz shashlik", description: "Mayin go'sht bo'laklari, piyoz bilan", price: "23 000", image: "jaz.webp" },
      { name: "Qo'zi kabob", description: "Yumshoq qo'zi go'shti cho'g'da pishiriladi", price: "35 000", image: "jaz.webp" },
      { name: "Tovuq qanoti", description: "Ziravorli sousda marinadlangan qanotlar", price: "18 000", image: "tovuq.webp" },
      { name: "Mol qiyma shashlik", description: "Mol go'shti qiymasidan tayyorlangan kabob", price: "20 000", image: "qiyma.webp" },
      { name: "Sabzavotli six", description: "Mavsumiy sabzavotlar cho'g'da pishiriladi", price: "14 000", image: "achichuk.webp" },
      { name: "Qovurg'ali kabob", description: "Qo'y qovurg'asi piyoz va ziravorlar bilan", price: "30 000", image: "jaz.webp" }
    ]
  },
  {
    id: "suyuq",
    name: "Suyuq ovqatlar",
    tagline: "Qaynoq, mazali, jonni isituvchi",
    items: [
      { name: "Mastava", description: "Guruch, go'sht va sabzavotli quyuq sho'rva", price: "28 000", image: "mastava.webp", popular: true },
      { name: "Sho'rva", description: "Go'sht, kartoshka va no'xat solingan sho'rva", price: "30 000", image: "shurva.webp", popular: true },
      { name: "Mashxurda", description: "Mosh va guruchli quyuq sho'rva", price: "25 000", image: "mashxurda.webp" },
      { name: "Lag'mon sho'rva", description: "Qo'lda cho'zilgan xamirli sho'rva", price: "32 000", image: "lagmon.webp" },
      { name: "Chuchvara sho'rva", description: "Go'shtli chuchvara tiniq sho'rvada", price: "35 000", image: "chuchvara.webp" },
      { name: "Ugra oshi", description: "Qo'lda kesilgan xamir, tovuq sho'rvasida", price: "26 000", image: "lagmon.webp" },
      { name: "Kallapocha", description: "An'anaviy qo'y kallasi va oyoqlari sho'rvasi", price: "45 000", image: "shurva.webp" },
      { name: "Do'lma sho'rva", description: "Mayda do'lmali yengil sho'rva", price: "30 000", image: "dolma.webp" },
      { name: "Mantibo'tqa", description: "Mayda mantilar quyuq sho'rvada", price: "34 000", image: "manti.webp" },
      { name: "Qovurma sho'rva", description: "Qovurilgan go'shtli mazali sho'rva", price: "32 000", image: "shurva.webp" },
      { name: "Moxora", description: "No'xat, go'sht va ko'katlardan to'yimli sho'rva", price: "29 000", image: "shurva.webp" },
      { name: "No'xat sho'rva", description: "Mayin go'sht va no'xat bilan uzoq qaynatiladi", price: "30 000", image: "shurva.webp" },
      { name: "Tovuqli sho'rva", description: "Tovuq go'shti va sabzavotlardan yengil sho'rva", price: "27 000", image: "mastava.webp" },
      { name: "Qatiqli ugra", description: "Uy ugra xamiri va qatiqli qayla bilan", price: "28 000", image: "lagmon.webp" },
      { name: "Go'shtli qaynatma", description: "Mol go'shti va ildizmevalardan tiniq sho'rva", price: "34 000", image: "shurva.webp" }
    ]
  },
  {
    id: "xamir",
    name: "Xamir ovqatlar",
    tagline: "Qo'lda yoyilgan xamir va tandirdan uzilgan ta'm",
    items: [
      { name: "Lag'mon", description: "Qo'lda cho'zilgan xamir, qaylasi bilan", price: "38 000", image: "lagmon.webp", popular: true },
      { name: "Manti", description: "Qo'y go'shti va piyozli manti (1 dona)", price: "8 000", image: "manti.webp", popular: true },
      { name: "Tandir somsa", description: "Qatlama xamir, go'shtli qiyma bilan", price: "12 000", image: "somsa.webp", popular: true },
      { name: "Chuchvara", description: "Mayda go'shtli tugilgan chuchvara", price: "35 000", image: "chuchvara.webp" },
      { name: "Qutob", description: "Yupqa xamir, ko'kat va pishloq bilan", price: "22 000", image: "qutob.webp" },
      { name: "Patir", description: "Tandirda pishirilgan qatlama non", price: "15 000", image: "somsa.webp" },
      { name: "Varaqi somsa", description: "Varaqlangan xamir, qiyma somsasi", price: "14 000", image: "somsa.webp" },
      { name: "Gumma", description: "Qovurilgan go'shtli xamir taomi", price: "16 000", image: "qutob.webp" },
      { name: "Choyxona somsa", description: "Yumshoq tandir somsasi, qo'y go'shti bilan", price: "13 000", image: "somsa.webp" },
      { name: "Hasip", description: "Guruch va go'shtli kolbasa, sho'rvada", price: "30 000", image: "chuchvara.webp" },
      { name: "Go'shtli qatlama", description: "Qavat-qavat xamir orasida ziravorli qiyma", price: "18 000", image: "qutob.webp" },
      { name: "Ko'k somsa", description: "Ko'kat va piyoz solingan tandir somsasi", price: "10 000", image: "somsa.webp" },
      { name: "Oshqovoqli manti", description: "Oshqovoq va piyozli qo'lda tugilgan manti", price: "8 000", image: "manti.webp" },
      { name: "Jizzali non", description: "Tandir noni ichiga solingan jizza bilan", price: "18 000", image: "somsa.webp" },
      { name: "Gijduvoncha gumma", description: "Qarsildoq xamir ichida go'shtli masalliq", price: "18 000", image: "qutob.webp" }
    ]
  },
  {
    id: "salat",
    name: "Salatlar",
    tagline: "Yangi, yorqin, taomga jo'r",
    items: [
      { name: "Achichuk", description: "Pomidor, piyoz va achchiq garmdori", price: "15 000", image: "achichuk.webp", popular: true },
      { name: "Toshkent salati", description: "Mol tili, turp va yengil sous bilan", price: "28 000", image: "tashkent_salat.webp", popular: true },
      { name: "Olivye", description: "Bayram dasturxonining sevimli salati", price: "22 000", image: "tashkent_salat.webp" },
      { name: "Vinegret", description: "Lavlagi, kartoshka va sabzavotli salat", price: "18 000", image: "tashkent_salat.webp" },
      { name: "Andijon salati", description: "Bodring, pomidor va yangi ko'katlar", price: "16 000", image: "achichuk.webp" },
      { name: "Sezar salati", description: "Tovuqli sezar, pishloq bilan", price: "32 000", image: "tashkent_salat.webp" },
      { name: "Koreyscha sabzi", description: "Achchiq-shirin sabzi salati", price: "12 000", image: "achichuk.webp" },
      { name: "Baqlajon salati", description: "Qovurilgan baqlajon va sarimsoq bilan", price: "20 000", image: "achichuk.webp" },
      { name: "Mavsumiy salat", description: "Mavsumiy yangi sabzavotlardan", price: "18 000", image: "achichuk.webp" },
      { name: "Mevali salat", description: "Yangi mevalardan, asal bilan", price: "20 000", image: "kompot.webp" },
      { name: "Shakarob", description: "Pomidor, yupqa piyoz va yangi rayhon", price: "14 000", image: "achichuk.webp" },
      { name: "Suzmali salat", description: "Suzma, bodring va xushbo'y ko'katlar", price: "16 000", image: "tashkent_salat.webp" },
      { name: "Karam-sabzi salati", description: "Yangi karam va sabzidan yengil salat", price: "12 000", image: "achichuk.webp" },
      { name: "Qatiqli bodring", description: "Bodring, qatiq va ukrop bilan", price: "15 000", image: "tashkent_salat.webp" },
      { name: "Go'shtli salat", description: "Mol go'shti, yangi sabzavot va ko'katlar", price: "29 000", image: "tashkent_salat.webp" }
    ]
  },
  {
    id: "ichimlik",
    name: "Ichimliklar",
    tagline: "Choyxona an'anasi — har bir piyolada",
    items: [
      { name: "Qora choy", description: "An'anaviy choynak (0.7 litr)", price: "5 000", image: "choy.webp", popular: true },
      { name: "Ko'k choy", description: "Yangi damlangan ko'k choy", price: "5 000", image: "choy.webp" },
      { name: "Limonli choy", description: "Asal va limon bilan", price: "15 000", image: "choy.webp" },
      { name: "Mevali choy", description: "Olma, gilos va dolchin bilan", price: "18 000", image: "kompot.webp" },
      { name: "Ayron", description: "Muzdek qatiqli ichimlik", price: "10 000", image: "ayron.webp", popular: true },
      { name: "Kompot", description: "Quritilgan mevalardan (1 litr)", price: "20 000", image: "kompot.webp" },
      { name: "Anor sharbati", description: "Yangi siqilgan anor sharbati", price: "25 000", image: "kompot.webp" },
      { name: "Meva sharbati", description: "Tabiiy mevalardan (1 litr)", price: "25 000", image: "kompot.webp" },
      { name: "Mineral suv", description: "Toshkent buloq suvi (0.5 litr)", price: "8 000", image: "ayron.webp" },
      { name: "Kofe", description: "Qora yoki sutli kofe", price: "15 000", image: "choy.webp" },
      { name: "Rayhonli limonad", description: "Limon, rayhon va muz bilan uy limonadi", price: "18 000", image: "kompot.webp" },
      { name: "Uy qatig'i", description: "Yangi ivitilgan quyuq qatiq", price: "8 000", image: "ayron.webp" },
      { name: "Qimiz", description: "An'anaviy achitilgan biya suti ichimligi", price: "25 000", image: "ayron.webp" },
      { name: "Zanjabilli choy", description: "Zanjabil, limon va asal bilan damlanadi", price: "14 000", image: "choy.webp" },
      { name: "Tarxun limonad", description: "Tarxun va limonli muzdek ichimlik", price: "18 000", image: "kompot.webp" }
    ]
  }
];

/* 2. Menyu tugmalarini sahifaga chiqarish */
const menuTabs = document.querySelector("#menu-tabs");
const dishGrid = document.querySelector("#dish-grid");
const menuTagline = document.querySelector("#menu-tagline");
let activeCategoryId = menuCategories[0].id;

function renderMenuTabs() {
  menuTabs.innerHTML = menuCategories
    .map((category) => {
      const isActive = category.id === activeCategoryId;
      return `
        <button
          class="menu-tab${isActive ? " is-active" : ""}"
          type="button"
          data-category="${category.id}"
          aria-pressed="${isActive}"
        >${category.name}</button>
      `;
    })
    .join("");
}

/* 3. Tanlangan toifadagi taom kartalarini chiqarish */
function renderDishes() {
  const category = menuCategories.find((item) => item.id === activeCategoryId);

  if (!category) {
    dishGrid.innerHTML = "<p>Bu toifada hozircha taom yo'q.</p>";
    menuTagline.textContent = "";
    return;
  }

  menuTagline.textContent = category.tagline;
  dishGrid.innerHTML = category.items
    .map((dish) => `
      <article class="dish-card">
        <div class="dish-image-wrap">
          <img
            class="dish-image"
            src="./images/${dish.image}"
            alt="${dish.name}"
            loading="lazy"
            width="500"
            height="350"
          />
          ${dish.popular ? '<span class="dish-badge">Mashhur</span>' : ""}
        </div>
        <div class="dish-copy">
          <div class="dish-heading">
            <h3>${dish.name}</h3>
            <span class="dish-price">${dish.price} so'm</span>
          </div>
          <p>${dish.description}</p>
        </div>
      </article>
    `)
    .join("");
}

/* 4. Toifa bosilganda menyuni yangilash */
menuTabs.addEventListener("click", (event) => {
  const selectedButton = event.target.closest("[data-category]");
  if (!selectedButton) return;

  activeCategoryId = selectedButton.dataset.category;
  renderMenuTabs();
  renderDishes();
});

/* 5. Telefon ekranidagi menyuni ochish va yopish */
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNavigation.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Menyuni yopish" : "Menyuni ochish");
});

mainNavigation.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  mainNavigation.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Menyuni ochish");
});

/* 6. Sahifani aylantirganda yuqori menyu fonini aniq ko'rsatish */
const siteHeader = document.querySelector(".site-header");
const updateHeaderOnScroll = () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 56);
};

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

/* 7. Sana tanlashda o'tgan kunlarni band qilishga yo'l qo'ymaslik */
const reservationForm = document.querySelector("#reservation-form");
const reservationDate = reservationForm.elements.date;
const today = new Date();
const localDate = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");
reservationDate.min = localDate;

/* 8. Band qilish so'rovini email dasturida tayyorlash */
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!reservationForm.reportValidity()) return;

  const formData = new FormData(reservationForm);
  const message = [
    "Chinor choyxonasida stol band qilish so'rovi",
    "",
    `Ism-sharif: ${formData.get("name")}`,
    `Telefon: ${formData.get("phone")}`,
    `Sana: ${formData.get("date")}`,
    `Vaqt: ${formData.get("time")}`,
    `Mehmonlar: ${formData.get("guests")}`,
    `Qo'shimcha istak: ${formData.get("message") || "Yo'q"}`
  ].join("\n");

  const emailLink = `mailto:info@chinor.uz?subject=${encodeURIComponent("Stol band qilish")}&body=${encodeURIComponent(message)}`;
  const formNote = document.querySelector("#form-note");
  formNote.textContent = "Tayyor xat email dasturida ochiladi. Xatni yuborgach, band qilishni telefon orqali tasdiqlang.";
  formNote.classList.add("is-success");
  window.location.href = emailLink;
});

/* 9. Pastki qismdagi yilni har yili avtomatik yangilash */
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

/* 10. Sahifa ochilganda birinchi menyu toifasini ko'rsatish */
renderMenuTabs();
renderDishes();
