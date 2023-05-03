import {IPerson} from "/src/types/IPerson";
import {movie} from "/src/utils/movie";

export const personData: IPerson ={
  person_id: "44bd3a0c-0199-4b62-a567-5c435b9f4c18",
  first_name_ru: "Кейси",
  last_name_ru: "Аффлек",
  first_name_en: "Casey",
  last_name_en: "Affleck",
  img: "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/09a6ecb6-052b-41fb-8323-1b95a10cb33a/280x420",
  movieRoles: [
    {
      movie_role_id: "83188d46-8045-4236-876f-3480f2fbf2b3",
      movie_role: "режиссер",
      slug: "rezhisser"
    }
  ],
  movies: [movie]
}