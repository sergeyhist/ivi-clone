import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import "/src/styles/global.sass";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";

const meta: Meta<typeof MobileMenu> = {
  title: "UI/MobileMenu",
  decorators: [
    (Story) => {
      store.dispatch(setWindowSize({ width: 200, height: 1020 }));
      return (
        <Provider store={store}>
          <div
            style={{
              width: "200px",
              position: "relative",
              margin: "20px",
            }}
          >
            <Story />
          </div>
        </Provider>
      );
    },
  ],
  component: MobileMenu,
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

export const FirstStory: Story = {};
