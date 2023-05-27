import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import ResetButton from "/src/components/Catalog/Filters/ResetButton/ResetButton";

const meta: Meta<typeof ResetButton> = {
  title: "Filters/ResetButton",
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "A string that represents component text."
    },
    textPosition: {
      description: "A string that represents text position. Can be right or left."
    },
    clickCallback: {
      description: "A callback function that is called when the button is clicked."
    }
  },
  component: ResetButton,
};

export default meta;
type Story = StoryObj<typeof ResetButton>;

export const FirstStory: Story = {
  args: {
    text:"Reset Filters",
    textPosition: "left"
  },
};

export const SecondStory: Story = {
  args: {
    text:"Reset",
    textPosition: "right"
  },
};
