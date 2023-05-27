import type { Meta, StoryObj } from "@storybook/react";
import { mockMovie } from "/src/utils/mocks/movies";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import "/src/styles/global.sass";

const mockMovies = new Array(10).fill(mockMovie);

const meta: Meta<typeof MovieSlider> = {
  title: "UI/MovieSlider",
  tags: ["autodocs"],
  argTypes: {
    slides: {
      description: "Array of movie objects coming from the server",
    },
    slideType: {
      description: "Type of displayed cards",
      defaultValue: "default",
    },
    title: {
      description: "Movie slider section title",
    },
    categoryRoute: {
      description: "Url to desired page",
      defaultValue: "/",
    },
  },
  component: MovieSlider,
};

export default meta;
type Story = StoryObj<typeof MovieSlider>;

export const DefaultMovieSlider: Story = {
  args: {
    slides: mockMovies,
    slideType: "default",
    title: "title",
    categoryRoute: "/",
  },
};

export const RelatedMovieSlider: Story = {
  args: {
    slides: mockMovies,
    slideType: "related",
    title: "title",
    categoryRoute: "/",
  },
};
