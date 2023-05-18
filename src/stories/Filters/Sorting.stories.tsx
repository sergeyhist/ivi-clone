import type { Meta, StoryObj } from "@storybook/react";
import Sorting from "/src/components/Catalog/Sorting/Sorting";

const meta: Meta<typeof Sorting> = {
  title: "Filters/Sorting Block",
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "100%" }}>
          <Story />
        </div>
      );
    },
  ],
  component: Sorting,
};

export default meta;
type Story = StoryObj<typeof Sorting>;

export const SortingBlock: Story = {};
