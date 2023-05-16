import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import Header from "/src/components/Layout/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "100%", height: "500px", marginInline: "auto" }}>
          <Story />
        </div>
      );
    },
  ],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const DesktopHeader: Story = {};
export const MobileHeader: Story = {};
