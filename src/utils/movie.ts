import { IMovie } from "/src/types/IMovie";

export const declOfNum = (number: number, text_forms: string[]): string => {
  number = Math.abs(number) % 100;
  const n1: number = number % 10;
  if (number > 10 && number < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
};

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
      firstName: "Грег",
      lastName: "Яйтанс",
      role: "режиссёр",
      imageUrl: "/images/creators/1.jpg",
    },
    {
      firstName: "Кэти",
      lastName: "Джейкобс",
      role: "режиссёр",
      imageUrl: "/images/creators/2.jpg",
    },
    {
      firstName: "Хью",
      lastName: "Лори",
      role: "актёр",
      imageUrl: "/images/creators/3.jpg",
    },
    {
      firstName: "Роберт",
      lastName: "Леонард",
      role: "актёр",
      imageUrl: "/images/creators/4.jpg",
    },
    {
      firstName: "Лиза",
      lastName: "Эдельштейн",
      role: "актёр",
      imageUrl: "/images/creators/5.jpg",
    },
    {
      firstName: "Омар",
      lastName: "Эппс",
      role: "актёр",
      imageUrl: "/images/creators/6.jpg",
    },
    {
      firstName: "Джесси",
      lastName: "Спенсер",
      role: "актёр",
      imageUrl: "/images/creators/7.jpg",
    },
    {
      firstName: "Дженнифер",
      lastName: "Моррисон",
      role: "актёр",
      imageUrl: "/images/creators/8.jpg",
    },
    {
      firstName: "Питер",
      lastName: "Джекобсон",
      role: "актёр",
      imageUrl: "/images/creators/9.jpg",
    },
    {
      firstName: "Оливия",
      lastName: "Уайлд",
      role: "актёр",
      imageUrl: "/images/creators/10.jpg",
    },
    {
      firstName: "Роберт",
      lastName: "Леонард",
      role: "актёр",
      imageUrl: "/images/creators/4.jpg",
    },
    {
      firstName: "Лиза",
      lastName: "Эдельштейн",
      role: "актёр",
      imageUrl: "/images/creators/5.jpg",
    },
    {
      firstName: "Омар",
      lastName: "Эппс",
      role: "актёр",
      imageUrl: "/images/creators/6.jpg",
    },
    {
      firstName: "Джесси",
      lastName: "Спенсер",
      role: "актёр",
      imageUrl: "/images/creators/7.jpg",
    },
    {
      firstName: "Дженнифер",
      lastName: "Моррисон",
      role: "актёр",
      imageUrl: "/images/creators/8.jpg",
    },
    {
      firstName: "Питер",
      lastName: "Джекобсон",
      role: "актёр",
      imageUrl: "/images/creators/9.jpg",
    },
    {
      firstName: "Оливия",
      lastName: "Уайлд",
      role: "актёр",
      imageUrl: "/images/creators/10.jpg",
    },
    {
      firstName: "Роберт",
      lastName: "Леонард",
      role: "актёр",
      imageUrl: "/images/creators/4.jpg",
    },
    {
      firstName: "Лиза",
      lastName: "Эдельштейн",
      role: "актёр",
      imageUrl: "/images/creators/5.jpg",
    },
    {
      firstName: "Омар",
      lastName: "Эппс",
      role: "актёр",
      imageUrl: "/images/creators/6.jpg",
    },
    {
      firstName: "Джесси",
      lastName: "Спенсер",
      role: "актёр",
      imageUrl: "/images/creators/7.jpg",
    },
    {
      firstName: "Дженнифер",
      lastName: "Моррисон",
      role: "актёр",
      imageUrl: "/images/creators/8.jpg",
    },
    {
      firstName: "Питер",
      lastName: "Джекобсон",
      role: "актёр",
      imageUrl: "/images/creators/9.jpg",
    },
    {
      firstName: "Оливия",
      lastName: "Уайлд",
      role: "актёр",
      imageUrl: "/images/creators/10.jpg",
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
  comments: [],
};
