import { IGenre } from "/src/types/IGenre";

export const mockGenre = {
  genre_id: "47b3d35c-dc1c-40d7-bc35-65d888d7f7bd",
  genre_ru: "мелодрама",
  genre_en: "melodrama",
  slug: "melodrama",
};

export const genresList = [
  {
    genre_id: "47b3d35c-dc1c-40d7-bc35-65d888d7f7bd",
    genre_ru: "мелодрама",
    genre_en: "melodrama",
    slug: "melodrama",
  },
  {
    genre_id: "93edd3bd-3a18-4f10-8e24-a4f39f682976",
    genre_ru: "спорт",
    genre_en: "sport",
    slug: "sport",
  },
  {
    genre_id: "cf999928-94d6-461e-b32a-dc1527118422",
    genre_ru: "аниме",
    genre_en: "anime",
    slug: "anime",
  },
  {
    genre_id: "37b2031c-69ef-4f96-80f9-f7db63f0ad4b",
    genre_ru: "драма",
    genre_en: "drama",
    slug: "drama",
  },
  {
    genre_id: "017ca425-3f9c-4412-86f1-1a6848113e39",
    genre_ru: "биография",
    genre_en: "biography",
    slug: "biography",
  },
  {
    genre_id: "03f28683-ab00-42cf-a63a-f0baa5b9c064",
    genre_ru: "мюзикл",
    genre_en: "musical",
    slug: "musical",
  },
  {
    genre_id: "110cbda4-0ae6-476a-959e-f4b7e461891b",
    genre_ru: "для взрослых",
    genre_en: "for adults",
    slug: "adults",
  },
  {
    genre_id: "11fffb19-d89d-4da2-9064-810ce6e87832",
    genre_ru: "фильм-нуар",
    genre_en: "film noir",
    slug: "filmnoir",
  },
  {
    genre_id: "18c4be59-2c36-4940-911c-0dd0d1520cbd",
    genre_ru: "криминал",
    genre_en: "criminal",
    slug: "criminal",
  },
  {
    genre_id: "3ba46127-5094-41b1-a2d6-c66af267943e",
    genre_ru: "ужасы",
    genre_en: "horror",
    slug: "horror",
  },
  {
    genre_id: "5bc56c3e-d36f-49c0-ac7f-f0d22ee385e7",
    genre_ru: "комедия",
    genre_en: "comedy",
    slug: "comedy",
  },
  {
    genre_id: "5dda7067-1344-4281-a09b-44e3073ee8b6",
    genre_ru: "семейный",
    genre_en: "family",
    slug: "family",
  },
  {
    genre_id: "70ec0570-45a6-4030-8819-c794238b29e8",
    genre_ru: "детский",
    genre_en: "children's",
    slug: "children",
  },
  {
    genre_id: "70fed5de-cb9c-43a4-8003-b3bc079eb7c1",
    genre_ru: "детектив",
    genre_en: "detective",
    slug: "detective",
  },
  {
    genre_id: "83867c11-ef08-439e-a049-7dbb358497f0",
    genre_ru: "военный",
    genre_en: "military",
    slug: "military",
  },
  {
    genre_id: "850aaeed-20d3-45a3-be96-af90db8fab45",
    genre_ru: "приключения",
    genre_en: "adventure",
    slug: "adventure",
  },
  {
    genre_id: "93e95766-05b4-4b90-a934-7d0936f18812",
    genre_ru: "фэнтези",
    genre_en: "fantasy",
    slug: "fantasy",
  },
  {
    genre_id: "96387a8b-5890-44b5-918e-60e4c2b352d3",
    genre_ru: "документальный",
    genre_en: "documentary",
    slug: "documentary",
  },
  {
    genre_id: "9a8ab187-f891-4af8-ad85-59d29b0eaaf3",
    genre_ru: "мультфильм",
    genre_en: "animated film",
    slug: "animatedfilm",
  },
  {
    genre_id: "a52cda4f-4411-4292-bfd8-acd4c4614daf",
    genre_ru: "музыка",
    genre_en: "music",
    slug: "music",
  },
  {
    genre_id: "aaddaf21-5455-4cf2-b595-e10a283b6dc0",
    genre_ru: "вестерн",
    genre_en: "western",
    slug: "western",
  },
  {
    genre_id: "b8e177d7-4295-47ed-af6c-a9e0ddbaeda3",
    genre_ru: "боевик",
    genre_en: "militant",
    slug: "militant",
  },
  {
    genre_id: "d2567053-6c1b-466b-a4b4-c55430132340",
    genre_ru: "реальное ТВ",
    genre_en: "reality TV",
    slug: "realitytv",
  },
  {
    genre_id: "eb59352e-e5ad-4b8c-a43f-262eab4661cc",
    genre_ru: "короткометражка",
    genre_en: "short film",
    slug: "shortfilm",
  },
  {
    genre_id: "ef57af37-7e8f-4017-b723-2fb8842bcfef",
    genre_ru: "фантастика",
    genre_en: "fiction",
    slug: "fiction",
  },
  {
    genre_id: "fbc67088-0299-4eac-9ae0-08acf9d66ba2",
    genre_ru: "история",
    genre_en: "history",
    slug: "history",
  },
  {
    genre_id: "fea1f30d-8e0a-4546-b6c8-1b9f597658ea",
    genre_ru: "триллер",
    genre_en: "thriller",
    slug: "thriller",
  },
];

export const genresListSlugs = genresList.map((country: IGenre) =>
  country.slug.toLowerCase()
);
