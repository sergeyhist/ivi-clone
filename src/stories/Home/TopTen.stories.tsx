import type { Meta, StoryObj } from "@storybook/react";
import TopTen from "/src/components/Home/TopTen/TopTen";
import "/src/styles/global.sass";
import { mockMovie } from "/src/utils/mocks/movies";

const meta: Meta<typeof TopTen> = {
  title: "Home/TopTen",
  component: TopTen,
};

export default meta;
type Story = StoryObj<typeof TopTen>;

export const DefaultMovieCard: Story = {
  args: {
    topTenMovies: [mockMovie],
  },
};
