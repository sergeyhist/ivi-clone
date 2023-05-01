import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";
import ProgressBar from "/src/UI/ProgressBar/ProgressBar";

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