import type { Meta, StoryObj } from "@storybook/react";
import SlideshowWidget from "/src/UI/SlideshowWidget/SlideshowWidget";
import { slideshowItems } from "/src/utils/slideshowItems";
import "/src/styles/global.sass";

const meta: Meta<typeof SlideshowWidget> = {
  title: "UI/SlideshowWidget",
  tags: ["autodocs"],
  component: SlideshowWidget,
  argTypes: {
    items: {
      description:
        "an array of objects of type ILink, which contains information about the links to be displayed in the slideshow.",
    },
    rowCount: {
      description:
        "a number that represents the number of rows to be displayed in the slideshow. This can be either 3 or 4.",
    },
    scale: {
      description:
        "(optional): a number that represents the scaling factor for the slideshow. By default, this is set to 1.",
    },
    width: {
      description:
        '(optional): a string that represents the width of the slideshow. By default, this is set to "auto".',
    },
    isDark: {
      description:
        "(optional): a boolean value that determines whether to use the dark theme for the slideshow. By default, this is set to false.",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ marginLeft: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlideshowWidget>;

export const SmallWidget: Story = {
  args: {
    items: slideshowItems,
    rowCount: 3,
    width: "244px",
  },
};

export const LargeWidget: Story = {
  args: {
    scale: 1.5,
    width: "332px",
    isDark: true,
    items: slideshowItems,
    rowCount: 4,
  },
};
