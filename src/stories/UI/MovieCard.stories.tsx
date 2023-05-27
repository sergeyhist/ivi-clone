import type { Meta, StoryObj } from "@storybook/react";
import { mockMovie } from "/src/utils/mocks/movies";
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
    content: mockMovie,
    type: "default",
  },
};

export const RelatedMovieCard: Story = {
  args: {
    content: mockMovie,
    type: "related",
  },
};
