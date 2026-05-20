const flavors = {
  boeuf: {
    image: "assets/optimized/products/boeuf.webp",
    alt: "Paquet VokyB saveur boeuf",
    kicker: "Saveur boeuf",
    title: "Le goût authentique du boeuf",
    text: "Une base savoureuse, ronde et réconfortante pour les bols du quotidien.",
  },
  piquant: {
    image: "assets/optimized/products/piquant.webp",
    alt: "Paquet VokyB poulet piquant",
    kicker: "Poulet piquant",
    title: "Une soupe relevée qui réveille",
    text: "Un profil chaud, rouge et gourmand pour celles et ceux qui aiment le peps.",
  },
  spicy: {
    image: "assets/optimized/products/spicy.webp",
    alt: "Paquet VokyB poulet spicy",
    kicker: "Poulet spicy",
    title: "Le bol intense des grands appétits",
    text: "Une saveur plus profonde, pensée pour les nouilles sautées bien généreuses.",
  },
  tomyum: {
    image: "assets/optimized/products/tom-yum.webp",
    alt: "Paquet VokyB Tom Yum",
    kicker: "Tom Yum",
    title: "Fraîcheur, citron, épices",
    text: "Une note vive et parfumée pour un bol lumineux avec herbes et citron vert.",
  },
  nature: {
    image: "assets/optimized/products/nature.webp",
    alt: "Paquet VokyB nature 500g",
    kicker: "Nature 500g",
    title: "Le format famille pour toutes les recettes",
    text: "Un grand format polyvalent pour cuisiner, partager et improviser vite.",
  },
};

const navToggle = document.querySelector(".nav-toggle");
const siteMenu = document.querySelector(".site-menu");
const year = document.querySelector("#year");
const flavorFeature = document.querySelector(".flavor-feature");
const featuredPack = document.querySelector("#featured-pack");
const featuredKicker = document.querySelector("#featured-kicker");
const featuredTitle = document.querySelector("#featured-title");
const featuredText = document.querySelector("#featured-text");
const flavorButtons = document.querySelectorAll(".flavor-card");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  siteMenu.classList.toggle("is-open", !isOpen);
});

siteMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navToggle.setAttribute("aria-expanded", "false");
    siteMenu.classList.remove("is-open");
  }
});

flavorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const flavor = flavors[button.dataset.flavor];

    flavorButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    flavorFeature.classList.add("is-changing");

    window.setTimeout(() => {
      featuredPack.src = flavor.image;
      featuredPack.alt = flavor.alt;
      featuredKicker.textContent = flavor.kicker;
      featuredTitle.textContent = flavor.title;
      featuredText.textContent = flavor.text;
      flavorFeature.classList.remove("is-changing");
    }, 160);
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const heroStage = document.querySelector(".hero-stage");

window.addEventListener(
  "pointermove",
  (event) => {
    if (!heroStage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    heroStage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  },
  { passive: true }
);
