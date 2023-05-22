import type { Meta, StoryObj } from "@storybook/react";
import { mockMovie } from "../../utils/movie";
import Slider from "/src/UI/Slider/Slider";
import "/src/styles/global.sass";
import { SwiperSlide } from "swiper/react";
import MovieCard from "/src/UI/MovieCard/MovieCard";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "",
    },
    breakpoints: {
      description: "",
    },
    slidesPerView: {
      description: "",
    },
    swiperClassName: {
      description: "",
    },
    wrapperClassName: {
      description: "",
    },
    prevClassName: {
      description: "",
    },
    nextClassName: {
      description: "",
    },
    loop: {
      description: "",
    },
    centeredSlides: {
      description: "",
    },
    autoplay: {
      description: "",
    },
    simulateTouch: {
      description: "",
    },
    type: {
      description: "",
    },
  },
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const DefaultMovieSlides: Story = {
  args: {
    children: (
      <SwiperSlide>
        <MovieCard type="related" content={mockMovie} />
      </SwiperSlide>
    ),
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  },
};
