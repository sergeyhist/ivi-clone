import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";

const meta: Meta<typeof CustomButton> = {
  title: "CustomButton",
  component: CustomButton,
  tags: ['autodocs'],
  argTypes:{
    className:{
      description: "CustomButton class name"
    },
    children:{
      description:"Inner content of CustomButton"
    },
    clickCallback:{
      description:"Optional click handler"
    },
    type:{
      description:"Stylized type of button"
    },
    style:{
      description:"Optional css styles"
    },
    preventDefault:{
      description:"Sets preventDefault event"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [{ name: "dark", value: "#100e19" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const FirstStory: Story = {
  args: {
    children: "Button",
    type: "red",
    style: {width: "  100%"}
  },
};
