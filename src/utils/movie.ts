import { IMovie } from "/src/types/IMovie";

export const movie: IMovie = {
  id: "1",
  title: "1+1",
  access: "subscriber",
  type: "Фильм",
  imgUrl: "/images/trailer1.jpeg",
  year: 2011,
  age: 16,
  time: "1 ч. 52 мин",
  subtitles: [
    { id: "1", name: "Русский", shortName: "Рус" },
    { id: "2", name: "Французкий", shortName: "Fr" },
  ],
  langs: [{ id: "1", name: "Русский", shortName: "Рус" }],
  qualities: ["4k", "FullHD", "HD", "1080", "720", "5.1"],
  categories: [
    { id: "1", name: "Франция", route: "/" },
    { id: "2", name: "Драмы", route: "/" },
    { id: "3", name: "Комедии", route: "/" },
    { id: "4", name: "Биография", route: "/" },
  ],
  rating: {
    grade: "8,9",
    gradeCategory: "Интересный сюжет",
    grades: "143 908",
  },
  creators: [
    {
      firstName: "Франсуа",
      lastName: "Клюзе",
      role: "Актер",
      imageUrl: "/images/avatar1.jpeg",
    },
    {
      firstName: "Франсуа",
      lastName: "Клюзе",
      role: "Актер",
      imageUrl: "/images/avatar1.jpeg",
    },
    {
      firstName: "Франсуа",
      lastName: "Клюзе",
      role: "Актер",
      imageUrl: "/images/avatar1.jpeg",
    },
    {
      firstName: "Франсуа",
      lastName: "Клюзе",
      role: "Актер",
      imageUrl: "/images/avatar1.jpeg",
    },
    {
      firstName: "Франсуа",
      lastName: "Клюзе",
      role: "Актер",
      imageUrl: "/images/avatar1.jpeg",
    },
  ],
  description: `
    <p>
      Прикованный к инвалидному креслу аристократ нанимает себе в помощники
      человека, который подходит для этой работы меньше всего – только что
      освободившегося из тюрьмы темнокожего парня. Трогательная и глубокая
      комедийная драма, получившая премии «Сезар», «Жорж» и «Гойя».
    </p>
    <p>
      Пожилой аристократ Филипп, ставший парализованным в результате
      несчастного случая, ищет помощника с функциями сиделки. Ему нужен не
      просто человек, который стал бы его руками и ногами, а кто-то, кому
      можно доверять. В своём особняке Филипп проводит тщательный отбор
      кандидатов, и в итоге принимает неожиданное решение. К недоумению
      окружающих, работа достаётся тому, кто, казалось бы, меньше всего для
      неё подходит – бывшему заключённому, выросшему на окраинах.
    </p>
    <p>
      Чтобы узнать, что общего может быть у богатого инвалида и его
      неблагополучного помощника, смотри онлайн на Иви «1+1».
    </p>
    <p>
      Приглашаем посмотреть фильм «1+1» в нашем онлайн-кинотеатре в хорошем HD
      качестве. Приятного просмотра!
    </p>
  `,
  route: "/movies/1",
};

export const breadCrumbPages = [
  { route: "/", name: "Главная" },
  { route: "/movies", name: "Фильмы" },
  { route: movie.id, name: movie.title },
];
