import IBannerSlide from "/src/types/IBannerSlide";

export const slides: IBannerSlide[] = [
  {
    id: 1,
    bannerUrl: "/images/banner5.jpg",
    mobileBannerUrl: "/images/mobileBanner5.jpg",
    title: "compilations.military.title",
    description: "compilations.military.description",
    buttonText: "compilations.view",
    route: "/movies?genres=military",
  },
  {
    id: 2,
    bannerUrl: "/images/banner2.jpg",
    mobileBannerUrl: "/images/mobileBanner2.jpg",
    title: "compilations.drama.title",
    description: "compilations.drama.description",
    buttonText: "compilations.view",
    route: "/movies?genres=drama",
  },
  {
    id: 3,
    bannerUrl: "/images/banner3.jpg",
    mobileBannerUrl: "/images/mobileBanner3.jpg",
    title: "compilations.detectives.title",
    description: "compilations.detectives.description",
    buttonText: "compilations.view",
    route: "/movies?genres=detective",
  },
  {
    id: 4,
    bannerUrl: "/images/banner4.jpg",
    mobileBannerUrl: "/images/mobileBanner4.jpg",
    title: "compilations.comedies.title",
    description: "compilations.comedies.description",
    buttonText: "compilations.view",
    route: "/movies?genres=comedy",
  },
];

export const breakpoints = {
  0: {
    slidesPerView: 1.000001,
    spaceBetween: 16,
  },
};
