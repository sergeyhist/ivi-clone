import type { Meta, StoryObj } from "@storybook/react";
import EntertainmentGenresDropDown
  from "/src/components/Layout/Header/DropDown/EntertainmentGenresDropDown/EntertainmentGenresDropDown";

const meta: Meta<typeof EntertainmentGenresDropDown> = {
  title: "Header/EntartaimentDropDown",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
        <div style={{width: "1000px"}}>
          <Story />
        </div>
    ),
  ],
  argTypes: {},
  component: EntertainmentGenresDropDown,
};

export default meta;
type Story = StoryObj<typeof EntertainmentGenresDropDown>;

export const FirstStory: Story = {
  args: {
    selectedGenre: "movies"
  },
};
