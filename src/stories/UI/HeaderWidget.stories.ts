import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";
import HeaderWidget from "/src/components/Layout/Header/HeaderWidget/HeaderWidget";

const meta: Meta<typeof HeaderWidget> = {
  title: "UI/HeaderWidget",
  tags: ['autodocs'],
  component: HeaderWidget,
};

export default meta;
type Story = StoryObj<typeof HeaderWidget>;

export const PrimaryWidget: Story = {

};
