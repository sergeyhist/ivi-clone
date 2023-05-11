import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store"
import DropDown from "/src/components/Layout/Header/DropDown/DropDown";

const meta: Meta<typeof DropDown> = {
  title: "Header/DropDown",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store = {store}>
        <div style={{width: "1240px", position:"relative", zIndex:"2"}}>
          <Story style={{width: "1240px"}} />
        </div>
      </Provider>
    ),
  ],
  argTypes: {},
  component: DropDown,
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const EntertaimentDropDown: Story = {
  args: {
    dropDownType: "movies"
  },
};

export const TvDropDown: Story = {
  args: {
    dropDownType: "tv"
  },
};

export const ProfileDropDown: Story = {
  args: {
    dropDownType: "profile"
  },
};
