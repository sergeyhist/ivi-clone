import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import "/src/styles/global.sass";

const meta: Meta<typeof MovieCard> = {
  title: "UI/MovieCard",
  tags: ["autodocs"],
  argTypes: {
    content: {
      description:
        "Object coming from the server containing information about the movie",
    },
    type: {
      description:
        "(optional): a string that represents the type of Movie Card to be displayed. " +
        "This can be one of the following options: " +
        '"default" or "related". By default, this is set to "default".',
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#100e19",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <main style={{ width: "200px" }}>
        <Story />
      </main>
    ),
  ],
  component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const DefaultMovieCard: Story = {
  args: {
    content: {
      film_id: "984fdb2d-da0c-4e04-926a-f72f103c4ccb",
      name_ru: "Зеленая миля",
      name_en: "The Green Mile",
      description:
        "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      year: 1999,
      rating: 9.1,
      assessments: 1328162,
      reviews: 475,
      age_limit: 16,
      duration: 189,
      img: "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
      trailers: [],
      genres: [],
      qualities: [],
      languagesAudio: [],
      languagesSubtitle: [],
      countries: [
        {
          country_id: "274adf30-f80f-4843-b348-d5d13a7fa939",
          country: "США",
          slug: "usa",
        },
      ],
    },
    type: "default",
  },
};

export const RelatedMovieCard: Story = {
  args: {
    content: {
      film_id: "984fdb2d-da0c-4e04-926a-f72f103c4ccb",
      name_ru: "Зеленая миля",
      name_en: "The Green Mile",
      description:
        "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      year: 1999,
      rating: 9.1,
      assessments: 1328162,
      reviews: 475,
      age_limit: 16,
      duration: 189,
      img: "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
      trailers: [],
      genres: [],
      qualities: [],
      languagesAudio: [],
      languagesSubtitle: [],
      countries: [
        {
          country_id: "274adf30-f80f-4843-b348-d5d13a7fa939",
          country: "США",
          slug: "usa",
        },
      ],
    },
    type: "related",
  },
};
