const heroPoster = document.querySelector(".hero-poster");
const prevBtn = document.querySelector(".hero-prev");
const nextBtn = document.querySelector(".hero-next");
const heroArea = document.querySelector(".img1");

const posterData = [
  {
    src: "assets/images/img1.png",
    link: "https://www.museum.go.kr/MUSEUM/contents/M0202010000.do?schM=view&menuId=current&exhiSpThemId=3056031&listType=gallery",
  },
  {
    src: "assets/images/img2.png",
    link: "https://www.museum.go.kr/MUSEUM/contents/M0202010000.do?schM=view&menuId=specialGallery&listType=list&exhiSpThemId=3225173",
  },
  {
    src: "assets/images/img3.png",
    link: "https://www.museum.go.kr/MUSEUM/contents/M0202010000.do?schM=view&menuId=specialGallery&listType=list&exhiSpThemId=3126913",
  },
];

let currentIndex = 0;
let autoSlideId = null;

function renderPoster() {
  const currentPoster = posterData[currentIndex];
  heroPoster.src = currentPoster.src;
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % posterData.length;
  renderPoster();
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + posterData.length) % posterData.length;
  renderPoster();
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideId = setInterval(goToNextSlide, 3000);
}

function stopAutoSlide() {
  if (autoSlideId) {
    clearInterval(autoSlideId);
    autoSlideId = null;
  }
}

nextBtn.addEventListener("click", () => {
  goToNextSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  goToPrevSlide();
  startAutoSlide();
});

heroPoster.addEventListener("click", () => {
  window.open(posterData[currentIndex].link, "_blank");
});

heroArea.addEventListener("mouseenter", stopAutoSlide);
heroArea.addEventListener("mouseleave", startAutoSlide);

renderPoster();
startAutoSlide();

//네비게이션 메뉴
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("is-open");

  const isOpen = nav.classList.contains("is-open");
  menuBtn.textContent = isOpen ? "×" : "☰";
  menuBtn.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

// Scroll Fade-in Effect
const scrollFadeItems = document.querySelectorAll(
  ".collection-title, .exhibitions-title",
);

const scrollFadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

scrollFadeItems.forEach((item) => {
  scrollFadeObserver.observe(item);
});
