export interface ILocale {
  name: string;
  shortName: string;
}
export interface ICategory {
  name: string;
  route: string;
}

export interface ICreators {
  id: string;
  name: string;
  imgUrl: string;
}

export interface IMovieParams {
  movieYear: number;
  movieTime: string;
  movieAge: number;
  movieSubtitles: ILocale[];
  movieLangs: ILocale[];
  movieQualities: string[];
  movieCategories: ICategory[];
}

export interface IMovieRating {
  grade: string;
  gradeCategory: string;
  grades: string;
}

export interface IMovie {
  id: string;
  title: string;
  movieType: string;
  access: string;
  movieImgUrl: string;
  movieParams: IMovieParams;
  movieRating: IMovieRating;
  movieCreators: ICreators[];
  description: string;
}

export const movie: IMovie = {
  id: "1",
  title: "1+1",
  access: "subscriber",
  movieType: "Фильм",
  movieImgUrl: "/images/trailer1.jpeg",
  movieParams: {
    movieYear: 2011,
    movieTime: "1 ч. 52 мин",
    movieAge: 16,
    movieSubtitles: [
      { name: "Русский", shortName: "Рус" },
      { name: "Французкий", shortName: "Fr" },
    ],
    movieLangs: [{ name: "Русский", shortName: "Рус" }],
    movieQualities: ["4k", "FullHD", "HD", "1080", "720", "5.1"],
    movieCategories: [
      { name: "Франция", route: "/" },
      { name: "Драмы", route: "/" },
      { name: "Комедии", route: "/" },
      { name: "Биография", route: "/" },
    ],
  },
  movieRating: {
    grade: "8,9",
    gradeCategory: "Интересный сюжет",
    grades: "143 908",
  },
  movieCreators: [
    {
      id: "1",
      name: "Франсуа Клюзе",
      imgUrl: "/images/avatar1.jpeg",
    },
    {
      id: "2",
      name: "Франсуа Клюзе",
      imgUrl: "/images/avatar1.jpeg",
    },
    {
      id: "3",
      name: "Франсуа Клюзе",
      imgUrl: "/images/avatar1.jpeg",
    },
    {
      id: "4",
      name: "Франсуа Клюзе",
      imgUrl: "/images/avatar1.jpeg",
    },
    {
      id: "5",
      name: "Франсуа Клюзе",
      imgUrl: "/images/avatar1.jpeg",
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
};
