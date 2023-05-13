import type { Meta, StoryObj } from "@storybook/react";
import HeaderWidget from "/src/components/Layout/Header/HeaderWidget/HeaderWidget";
import "/src/styles/global.sass";

const meta: Meta<typeof HeaderWidget> = {
  title: "Header/HeaderWidget",
  component: HeaderWidget,
};

export default meta;
type Story = StoryObj<typeof HeaderWidget>;

export const PrimaryWidget: Story = {

};