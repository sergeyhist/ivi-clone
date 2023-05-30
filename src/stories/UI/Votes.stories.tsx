import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import Votes from "/src/UI/Votes/Votes";

const meta: Meta<typeof Votes> = {
  title: "UI/Votes",
  tags: ["autodocs"],
  argTypes: {
    like: {
      description: "displayed number of ratings in the component",
    },
    className: {
      description: "Custom className of component's container for custom CSS",
    },
  },
  component: Votes,
};

export default meta;
type Story = StoryObj<typeof Votes>;

export const DefaultVotes: Story = {
  args: {
    like: 12,
  },
};
