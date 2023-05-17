import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import SingleSelector from "/src/components/Catalog/Filters/SingleSelector/SingleSelector";
import { yearFilterItems } from "/src/components/Catalog/Filters/Filters.utils";

const meta: Meta<typeof SingleSelector> = {
  title: "Filters/Single Selector",
  argTypes: {
    title: {
      description: "Title of the component",
    },
    items: {
      description: "List of avaliable filters",
    },
    filter: {
      description: "Activated filter",
    },
    filterType: {
      description:
        "Type of the filter. Uses as a key for translations and query params",
    },
  },
  args: {
    title: "year",
    items: yearFilterItems,
    filter: "0-1990",
    filterType: "year",
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
  component: SingleSelector,
};

export default meta;
type Story = StoryObj<typeof SingleSelector>;

export const Single_Selector: Story = {};
