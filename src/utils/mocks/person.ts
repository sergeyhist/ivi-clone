import {IPerson} from "/src/types/IPerson";

export const mockPerson: IPerson = {
  person_id: "a3fe3d20-5dd4-4991-bfa7-8b0632888b2e",
  first_name_ru: "Мелисса",
  last_name_ru: "Сейджмиллер",
  first_name_en: "Melissa",
  last_name_en: "Sagemiller",
  img: "//avatars.mds.yandex.net/get-kinopoisk-image/1704946/0790ac1a-79fc-4a78-8082-2d6ad3994f50/280x420",
  filmRoles: [
    {
      film_role_id: "83188d46-8045-4236-876f-3480f2fbf2b3",
      film_role: "режиссер",
      slug: "filmmaker",
    },
  ],
  films: [
    {
      film_id: "934bf135-3edd-41e4-a463-b242a4340279",
    },
    {
      film_id: "3d70dd42-7435-46f7-a7c7-621e9a7fee17",
    },
  ],
};