import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store"
import {setWindowSize} from "/src/store/slices/windowSizeSlice";
import "/src/styles/global.sass";
import Header from "/src/components/Layout/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  decorators: [
    (Story, context) => {
      if (context.name.includes("Mobile")) {
        store.dispatch(setWindowSize({ width: 320, height: 1020 }));
        return (
          <Provider store={store}>
            <div style={{ width: "500px", height: "500px", marginInline:"auto" }}>
              <Story />
            </div>
          </Provider>
        );
      } else {
        store.dispatch(setWindowSize({ width: 1980, height: 1020 }));
        return (
          <Provider store={store}>
            <div style={{ width: "1240px", height: "500px", marginInline:"auto"  }}>
              <Story />
            </div>
          </Provider>
        );
      }
    },
  ],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const DesktopHeader: Story = {};
export const MobileHeader: Story ={};

