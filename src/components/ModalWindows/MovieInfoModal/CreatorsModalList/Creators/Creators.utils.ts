export const declensionMoviesRu = (count: number): string => {
  if (count % 100 >= 11 && count % 100 <= 14) {
    return `${count} фильмов`;
  } else if (count % 10 === 1) {
    return `${count} фильм`;
  } else if (count % 10 >= 2 && count % 10 <= 4) {
    return `${count} фильма`;
  } else {
    return `${count} фильмов`;
  }
};

export const declensionMoviesEn = (count: number): string => {
  if (count === 1) {
    return `${count} movie`;
  } else {
    return `${count} movies`;
  }
};