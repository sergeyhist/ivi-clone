import type { Meta, StoryObj } from "@storybook/react";
import PersonSelector from "/src/components/Catalog/Filters/PersonSelector/PersonSelector";
import { actorsList } from "/src/utils/mocks/actors";

const meta: Meta<typeof PersonSelector> = {
  title: "Filters/Person Selector",
  argTypes: {
    type: {
      description: "Type of the filter. Uses as a key for translations and query params",
    },
    list: {
      description: "List of the availiable persons"
    },
    filter: {
      description: "Activated filter",
    },
  },
  args: {
    type: "actor",
    list: actorsList,
    filter: "kelly_hill",
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
  component: PersonSelector,
};

export default meta;
type Story = StoryObj<typeof PersonSelector>;

export const Person_Selector: Story = {};
