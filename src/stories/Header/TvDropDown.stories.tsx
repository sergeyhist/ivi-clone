import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";
import { Provider } from "react-redux";
import { store } from "/src/store"
import TvDropDown from "/src/components/Layout/Header/DropDown/TvDropDown/TvDropDown";

const meta: Meta<typeof TvDropDown> = {
  title: "Header/TvDropDown",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store = {store}>
        <div style={{display: "flex"}}>
          <Story />
        </div>
        </Provider>
    ),
  ],
  argTypes: {},
  component: TvDropDown,
};

export default meta;
type Story = StoryObj<typeof TvDropDown>;

export const FirstStory: Story = {
  args: {
  },
};
