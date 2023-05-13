import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "/src/store"
import DropDown from "/src/components/Layout/Header/DropDown/DropDown";
import {setWindowSize} from "/src/store/slices/windowSizeSlice";
import Header from "/src/components/Layout/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  tags: ["autodocs"],
  decorators: [
    (Story) =>{
      store.dispatch(setWindowSize({width:1900, height:1020}))
      return (
        <Provider store = {store}>
          <div style={{width: "1240px"}}>
            <Story />
          </div>
        </Provider>
      )}
  ],
  argTypes: {},
  component: Header,
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const FirstStory: Story = {

};

