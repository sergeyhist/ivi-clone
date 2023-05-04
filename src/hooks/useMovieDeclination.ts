import { useRouter } from "next/router";
import { declOfNum } from "/src/utils/declOfNum";

const useMovieDeclination = (movies: number): string => {
  const router = useRouter();

  return router.locale === "ru"
    ? declOfNum(movies, ["фильм", "фильма", "фильмов"])
    : declOfNum(movies, ["movie", "movies", "movies"]);
};

export default useMovieDeclination;