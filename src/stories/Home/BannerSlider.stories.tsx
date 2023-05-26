import type { Meta, StoryObj } from "@storybook/react";
import BannerSlider from "/src/components/Home/BannerSlider/BannerSlider";
import "/src/styles/global.sass";

const meta: Meta<typeof BannerSlider> = {
  title: "Home/BannerSlider",
  component: BannerSlider,
};

export default meta;
type Story = StoryObj<typeof BannerSlider>;

export const DefaultMovieCard: Story = {};
