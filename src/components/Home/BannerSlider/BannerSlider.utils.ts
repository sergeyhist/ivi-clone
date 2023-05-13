import IBannerSlide from "/src/types/IBannerSlide";

export const slides: IBannerSlide[] = [
  {
    id: 1,
    bannerUrl: "/images/banner5.jpg",
    mobileBannerUrl: "/images/mobileBanner5.jpg",
    title: "Военные фильмы",
    description:
      "Лучшие военные фильмы расскажут вам о событиях, свидетелем которых вам посчастливилось НЕ БЫТЬ.",
    buttonText: "Смотреть подборку",
    route: "/movies?genres=military",
  },
  {
    id: 2,
    bannerUrl: "/images/banner2.jpg",
    mobileBannerUrl: "/images/mobileBanner2.jpg",
    title: "Лучшие драмы",
    description:
      "Вы не относитесь к числу поклонников фильмов с бесконечными драками, бешеными погонями и стрельбой, а предпочитаете по-настоящему душевное кино?",
    buttonText: "Смотреть подборку",
    route: "/movies?genres=drama",
  },
  {
    id: 3,
    bannerUrl: "/images/banner3.jpg",
    mobileBannerUrl: "/images/mobileBanner3.jpg",
    title: "Лучшие Детективы",
    description:
      "Лучшие фильмы детективы привлекают зрителей кажущейся обыденностью сюжета и обстановки. Здесь может не быть необычных спецэффектов.",
    buttonText: "Смотреть подборку",
    route: "/movies?genres=detective",
  },
  {
    id: 4,
    bannerUrl: "/images/banner4.jpg",
    mobileBannerUrl: "/images/mobileBanner4.jpg",
    title: "Лучшие Комедии",
    description:
      "Любишь смотреть онлайн комедии с участием Эдди Мёрфи, Джима Керри или Адама Сэндлера? Считаешь лучшим кино именно комедийные фильмы, которые вызывают смех и улыбки?",
    buttonText: "Смотреть подборку",
    route: "/movies?genres=comedy",
  },
];

export const slidesPerView = 1.000001;
