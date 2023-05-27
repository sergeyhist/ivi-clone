import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import "/src/styles/global.sass";

const meta: Meta<typeof CustomButton> = {
  title: "UI/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      description:
        "(optional) A string representing the CSS class name(s) to be applied to the component.",
    },
    children: {
      description: "Inner content of CustomButton",
    },
    clickCallback: {
      description:
        "(optional) A callback function that is called when the button is clicked.",
    },
    type: {
      description: "A string that represents the type of input element.",
    },
    style: {
      description: "Optional css styles",
    },
    preventDefault: {
      description:
        "(optional) A boolean that indicates whether to prevent the default form submission behavior.",
    },
  },
  decorators: [
    (Story) => (
      <main style={{ width: "200px" }}>
        <Story />
      </main>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const RedButton: Story = {
  args: {
    children: "Button",
    type: "red",
    style: { width: "  100%" },
  },
};

export const GradientButton: Story = {
  args: {
    ...RedButton.args,
    type: "purple",
  },
};

export const DarkButton: Story = {
  args: {
    ...RedButton.args,
    type: "dark",
  },
};

export const PromoButton: Story = {
  args: {
    ...RedButton.args,
    type: "promo",
  },
};

export const FrameButton: Story = {
  args: {
    ...RedButton.args,
    type: "frame",
  },
};

export const AdminButton: Story = {
  args: {
    children: "Button",
    type: "admin",
  },
};