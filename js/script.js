const heroPoster = document.querySelector(".hero-poster");
const prevBtn = document.querySelector(".hero-prev");
const nextBtn = document.querySelector(".hero-next");
const heroArea = document.querySelector(".img1"); // ← 여기 중요

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
let autoSlide;

/* 포스터 업데이트 */
function updatePoster() {
  heroPoster.src = posterData[currentIndex].src;
}

/* 다음 */
function nextSlide() {
  currentIndex = (currentIndex + 1) % posterData.length;
  updatePoster();
}

/* 이전 */
function prevSlide() {
  currentIndex = (currentIndex - 1 + posterData.length) % posterData.length;
  updatePoster();
}

/* 자동 슬라이드 시작 */
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000);
}

/* 자동 슬라이드 리셋 */
function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

/* 버튼 클릭 */
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

/* 포스터 클릭 시 링크 이동 */
heroPoster.addEventListener("click", () => {
  window.open(posterData[currentIndex].link, "_blank");
});

/* ⭐ hover 시 멈춤 (img1 기준으로 변경됨) */
heroArea.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

heroArea.addEventListener("mouseleave", () => {
  startAutoSlide();
});

/* 시작 */
updatePoster();
startAutoSlide();
