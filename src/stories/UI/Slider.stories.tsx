import type { Meta, StoryObj } from "@storybook/react";
import { mockMovie } from "/src/utils/mocks/movies";
import Slider from "/src/UI/Slider/Slider";
import "/src/styles/global.sass";
import { SwiperSlide } from "swiper/react";
import MovieCard from "/src/UI/MovieCard/MovieCard";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Children React.Node which will be displayed inside the Slider",
    },
    breakpoints: {
      description:
        "(optional): breakpoints to set the number of slides to display on a certain screen width",
    },
    slidesPerView: {
      description:
        "(optional): sets the number of slides to display or can be set to 'auto' then the slides will be displayed based on their original width, will be ignored if breakpoints are set",
    },
    swiperClassName: {
      description:
        "(optional): for to set custom CSS properties on root swiper element",
    },
    wrapperClassName: {
      description: "(optional): for to set custom CSS properties on wrapper",
    },
    prevClassName: {
      description: "(optional): for to set custom CSS properties on prev button",
    },
    nextClassName: {
      description: "(optional): For to set custom CSS properties on next button",
    },
    loop: {
      description: "(optional): if true then the slider will be in loop",
    },
    centeredSlides: {
      description:
        "(optional): if true then the slides will be positioned in the center",
    },
    autoplay: {
      description:
        "(optional): set in milliseconds, the time it takes for the slide to scroll itself",
    },
    simulateTouch: {
      description:
        "(optional): simulateTouch is true by default, if false then the slides will not be scrolled by touch on the slides",
    },
    type: {
      description:
        "(optional): with always-with-buttons, the next button will always be displayed, should be used for those sliders whose slides are generated on the client, by default, if there are no slides in the slider, the buttons will not be displayed",
    },
  },
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const DefaultSlider: Story = {
  args: {
    children: (
      <SwiperSlide>
        <MovieCard type="related" content={mockMovie} />
      </SwiperSlide>
    ),
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  },
};
