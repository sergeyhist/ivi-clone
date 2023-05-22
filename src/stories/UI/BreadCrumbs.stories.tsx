import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import BreadCrumbs from "/src/UI/BreadCrumbs/BreadCrumbs";

const meta: Meta<typeof BreadCrumbs> = {
  title: "UI/BreadCrumbs",
  tags: ["autodocs"],
  argTypes: {},
  component: BreadCrumbs,
};

export default meta;
type Story = StoryObj<typeof BreadCrumbs>;

export const DefaultMovieSlides: Story = {
  args: {
    customRoutes: ["/", "/movies/"],
  },
};
