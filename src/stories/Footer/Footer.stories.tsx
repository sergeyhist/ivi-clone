import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store"
import "/src/styles/global.sass";
import Footer from "/src/components/Layout/Footer/Footer";
import {setWindowSize} from "/src/store/slices/windowSizeSlice";

const meta: Meta<typeof Footer> = {
  title: "Footer/Footer",
  decorators: [
    (Story, context) => {
      if (context.name.includes("Mobile")) {
        store.dispatch(setWindowSize({ width: 320, height: 1020 }));
        return (
          <Provider store={store}>
            <div style={{ width: "100vw", height: "500px", marginInline:"auto" }}>
              <Story />
            </div>
          </Provider>
        );
      } else {
        store.dispatch(setWindowSize({ width: 1980, height: 1020 }));
        return (
          <Provider store={store}>
            <div style={{ width: "100vw", height: "500px", marginInline:"auto"  }}>
              <Story />
            </div>
          </Provider>
        );
      }
    },
  ],
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const DesktopFooter: Story = {};

export const MobileFooter: Story = {};

