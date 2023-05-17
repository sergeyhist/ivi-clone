import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "/src/UI/ProgressBar/ProgressBar";
import "/src/styles/global.sass";

const meta: Meta<typeof ProgressBar> = {
  title: "UI/ProgressBar",
  tags: ["autodocs"],
  argTypes: {
    value: {
      description:
        "A number representing the current progress value of the progress bar. " +
        "The value should be between 0 and 100, where 0 indicates no progress and 100 indicates completion.",
    },
    className: {
      description:
        "(optional) A string representing the CSS class name(s) to be applied to the component.",
    },
    isFixed: {
      description:
        "(optional) Set fixed position of the progress (Top of the screen)",
    },
    type: {
      description: "(optional) Type of the progress bar",
    },
  },
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const SmallBar: Story = {
  args: {
    value: 30,
  },
};

export const LargeBar: Story = {
  args: {
    value: 90,
  },
};
