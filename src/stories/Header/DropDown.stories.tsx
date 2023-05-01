import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";
import { Provider } from "react-redux";
import { store } from "/src/store"
import ProfileDropDown from "/src/components/Layout/Header/DropDown/ProfileDropDown/ProfileDropDown";

const meta: Meta<typeof ProfileDropDown> = {
  title: "Header/DropDown",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store = {store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {},
  component: ProfileDropDown,
};

export default meta;
type Story = StoryObj<typeof ProfileDropDown>;

export const EntertaimentDropDown: Story = {
  args: {
  },
};

export const TvDropDown: Story = {
  args: {
  },
};
