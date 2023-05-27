import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import PageLoader from "/src/UI/PageLoader/PageLoader";

const meta: Meta<typeof PageLoader> = {
  title: "UI/PageLoader",
  component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const PrimaryStory: Story = {
};

