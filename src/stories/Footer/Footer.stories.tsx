import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import Footer from "/src/components/Layout/Footer/Footer";

const meta: Meta<typeof Footer> = {
  title: "Footer/Footer",
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const DesktopFooter: Story = {};
export const MobileFooter: Story = {};
