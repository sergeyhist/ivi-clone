import type { Meta, StoryObj } from "@storybook/react";
import RangeSelector from "/src/components/Catalog/Filters/RangeSelector/RangeSelector";

const meta: Meta<typeof RangeSelector> = {
  title: "Filters/Range Selector",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Title of the component",
    },
    filter: {
      description: "Activated filter",
    },
    filterType: {
      description:
        "Type of the filter. Uses as a key for translations and query params",
    },
    max: {
      description: "Max value of the range input",
    },
    step: {
      description: "Step of the range input",
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "16px",
            background: "#1f1b2e",
            position: "relative",
            marginInline: "auto",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  component: RangeSelector,
};

export default meta;
type Story = StoryObj<typeof RangeSelector>;

export const RatingFilter: Story = {
  args: {
    title: "rating",
    filter: "8",
    filterType: "rating",
    max: 9,
    step: 0.1,
  },
};

export const AssessmentsFilter: Story = {
  args: {
    title: "ratingCount",
    filter: "500000",
    filterType: "assessments",
    max: 1000000,
    step: 10000,
  },
};
