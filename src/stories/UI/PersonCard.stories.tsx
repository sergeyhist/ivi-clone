import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import "/src/styles/global.sass";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import { mockPerson } from "/src/utils/mocks/person";

const meta: Meta<typeof PersonCard> = {
  title: "UI/PersonCard",
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
  argTypes: {
    person: {
      description:
        "a required object of type IPerson that represents the data for the person to be displayed on the card.",
    },
    firstName: {
      description:
        "(optional) string value that represents the first name of the person to be displayed on the card. If not provided, the first name will not be displayed.",
    },
    lastName: {
      description:
        "(optional) string value that represents the last name of the person to be displayed on the card. If not provided, the last name will not be displayed.",
    },
  },
  component: PersonCard,
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

export const FirstStory: Story = {
  args: {
    firstName: "Мелисса",
    lastName: "Сейджмиллер",
    person: mockPerson,
  },
};
