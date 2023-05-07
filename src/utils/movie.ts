import { IMovie } from "/src/types/IMovie";

export const getFormateNumber = (number: number): string => {
  return number.toLocaleString("ru-RU");
};

export const getMovieName = (movie: IMovie, locale: string | undefined = "en"): string => {
  return String(movie["name_" + String(locale)]);
};

export const mockMovie: IMovie = {
  film_id: "984fdb2d-da0c-4e04-926a-f72f103c4ccb",
  name_ru: "Зеленая миля",
  name_en: "The Green Mile",
  description:
    "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
  year: 1999,
  country: "США",
  rating: 9.1,
  assessments: 1328162,
  reviews: 475,
  age_limit: 16,
  duration: 189,
  img: "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
  trailers: [
    {
      trailer_id: "fb853667-00a4-4b1a-bb7d-9fcea60cc1e1",
      trailer: "https://www.kinopoisk.ru/film/435/video/13494/",
      img: "//avatars.mds.yandex.net/get-kino-vod-films-gallery/1668876/a345b127722243984f01ef6504c9a477/100x64_3",
      date: "16 июня 2009",
    },
  ],
  genres: [
    {
      genre_id: "93e95766-05b4-4b90-a934-7d0936f18812",
      genre_ru: "фэнтези",
      genre_en: "",
      slug: "fentezi",
    },
    {
      genre_id: "18c4be59-2c36-4940-911c-0dd0d1520cbd",
      genre_ru: "криминал",
      genre_en: "",
      slug: "kriminal",
    },
    {
      genre_id: "37b2031c-69ef-4f96-80f9-f7db63f0ad4b",
      genre_ru: "драма",
      genre_en: "",
      slug: "drama",
    },
  ],
  qualities: [
    {
      quality_id: "ad0dda28-4cc0-43fc-b9d1-ba80e6e91bf4",
      quality: "2K",
    },
    {
      quality_id: "617c614c-91c7-4ffe-b598-ee69859595aa",
      quality: "FullHD",
    },
    {
      quality_id: "03adac5b-b62e-4a0e-b85f-776c139ebff1",
      quality: "HD",
    },
    {
      quality_id: "43e2b496-c937-44a4-a5cf-2722734e9109",
      quality: "1080",
    },
    {
      quality_id: "4a156640-876b-4558-992e-846bb7666ddd",
      quality: "720",
    },
    {
      quality_id: "29510c13-16f9-4cc8-b061-dd205ef1552c",
      quality: "5.1",
    },
  ],
  languagesAudio: [
    {
      language_id: "9f5fff21-1e2b-4a5e-b8e3-6c01a5eb62fa",
      language: " Английский",
    },
    {
      language_id: "c9c3ec33-637c-4dd0-ac6a-b3ba4b25ccf5",
      language: "Русский",
    },
  ],
  languagesSubtitle: [
    {
      language_id: "eb6cb36f-77bd-49eb-92fd-4cf6b0ec28c8",
      language: "Русские",
    },
  ],
};
