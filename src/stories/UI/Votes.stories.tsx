import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import Votes from "/src/UI/Votes/Votes";

const meta: Meta<typeof Votes> = {
  title: "UI/Votes",
  tags: ["autodocs"],
  argTypes: {
    like: {
      description: "",
    },
  },
  component: Votes,
};

export default meta;
type Story = StoryObj<typeof Votes>;

export const DefaultMovieSlides: Story = {
  args: {
    like: 12,
  },
};
