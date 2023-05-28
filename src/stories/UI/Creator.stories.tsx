import type { Meta, StoryObj } from "@storybook/react";
import Creator from "/src/UI/Creator/Creator";
import "/src/styles/global.sass";
import { mockPerson } from "/src/utils/mocks/person";

const meta: Meta<typeof Creator> = {
  title: "UI/Creator",
  tags: ["autodocs"],
  argTypes: {
    person: {
      description:
        "Object coming from the server containing information about the person",
    },
    type: {
      description:
        "(optional): a string that represents the type of Creator to be displayed. " +
        "This can be one of the following options: " +
        '"default" or "modal". By default, this is set to "default".',
    },
    className: {
      description: "className for custom CSS properties",
    },
  },
  component: Creator,
};

export default meta;
type Story = StoryObj<typeof Creator>;

export const DefaultCreator: Story = {
  args: {
    person: mockPerson,
  },
};

export const ModalCreator: Story = {
  args: {
    person: mockPerson,
    type: "modal",
  },
};
