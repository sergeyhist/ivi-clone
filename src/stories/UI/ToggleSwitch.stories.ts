import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "/src/UI/ToggleSwitch/ToggleSwitch";
import "/src/styles/global.sass";

const meta: Meta<typeof ToggleSwitch> = {
  title: "UI/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  argTypes:{
    className:{
      description: "(optional) A string representing the CSS class name(s) to be applied to the component."
    },
    leftContent:{
      description: "The content to display on the left side of the toggle switch."
    },
    rightContent:{
      description: "The content to display on the right side of the toggle switch."
    },
    clickCallback: {
      description: "A function to be called when the toggle switch is clicked. The function takes one argument, result, which is either \"left\" or \"right\", depending on which side of the toggle switch was clicked."
    },
    scale: {
      description: "(optional) A CSS transform to apply to the component to scale it up or down. Example values include \"1.2\" to increase the size by 20%, or \"0.8\" to decrease the size by 20%."
    },
    defaultValue: {
      description: "The initial value of the toggle switch. This should be either \"left\" or \"right\", depending on which side of the toggle switch should be selected by default."
    }
  }
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const FirstStory: Story = {
  args: {
    leftContent: "ON",
    rightContent: "OFF",
    clickCallback: () => {
      console.log("click");
    },
  },
};

export const SecondStory: Story = {
  args: {
    leftContent: "RU",
    rightContent: "EN",
    clickCallback: () => {
      console.log("click");
    },
    defaultValue: "right",
    scale: "1",
  },
};