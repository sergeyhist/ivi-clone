import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import DropDown from "/src/components/Layout/Header/DropDown/DropDown";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import "/src/styles/global.sass";

const meta: Meta<typeof DropDown> = {
  title: "Header/DropDown",
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      store.dispatch(setWindowSize({ width: 1900, height: 1020 }));
      return (
        <Provider store={store}>
          <div
            style={{
              width: "1100px",
              position: "relative",
              margin: "0 auto",
              height: "500px",
            }}
          >
            <Story />
          </div>
        </Provider>
      );
    },
  ],
  argTypes: {
    dropDownType:{
      description:"A string representing the type of dropdown to be displayed."
    }
  },
  component: DropDown,
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const EntertaimentDropDown: Story = {
  args: {
    dropDownType: "movies",
  },
};

export const TvDropDown: Story = {
  args: {
    dropDownType: "tv",
  },
};

export const ProfileDropDown: Story = {
  args: {
    dropDownType: "profile",
  },
};

export const NotificationDropDown: Story = {
  args: {
    dropDownType: "notification",
  },
};

export const SubscriptionDropDown: Story = {
  args: {
    dropDownType: "subscription",
  },
};
