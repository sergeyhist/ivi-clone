import type { Meta, StoryObj } from "@storybook/react";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import "/src/styles/global.sass";

const meta: Meta<typeof CustomTitle> = {
  title: "UI/CustomTitle",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "a string that represents the title to be displayed.",
    },
    type: {
      description:
        "(optional): a string that represents the type of title to be displayed. " +
        "This can be one of the following options: " +
        '"default", "link", "underline", "large", "medium", or "small". By default, this is set to "default".',
    },
    className: {
      description:
        "(optional): a string that represents additional CSS classes to be applied to the component.",
    },
  },
  component: CustomTitle,
};

export default meta;
type Story = StoryObj<typeof CustomTitle>;

export const FirstStory: Story = {
  args: {
    title: "First title",
    type: "default",
  },
};

export const SecondStory: Story = {
  args: {
    title: "Second title",
    type: "link",
  },
};

export const ThirdStory: Story = {
  args: {
    title: "Third title",
    type: "underline",
  },
};
