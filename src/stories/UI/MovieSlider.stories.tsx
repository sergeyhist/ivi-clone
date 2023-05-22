import type { Meta, StoryObj } from "@storybook/react";
import { mockMovie } from "../../utils/movie";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import "/src/styles/global.sass";

const slides = [
  mockMovie,
  mockMovie,
  mockMovie,
  mockMovie,
  mockMovie,
  mockMovie,
  mockMovie,
];

const meta: Meta<typeof MovieSlider> = {
  title: "UI/MovieSlider",
  tags: ["autodocs"],
  argTypes: {
    slides: {
      description: "",
    },
    slideType: {
      description: "",
      defaultValue: "default",
    },
    title: {
      description: "",
    },
    categoryRoute: {
      description: "",
      defaultValue: "/",
    },
  },
  component: MovieSlider,
};

export default meta;
type Story = StoryObj<typeof MovieSlider>;

export const DefaultMovieSlides: Story = {
  args: {
    slides: slides,
    slideType: "default",
    title: "title",
    categoryRoute: "/",
  },
};
