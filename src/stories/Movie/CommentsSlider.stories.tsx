import type { Meta, StoryObj } from "@storybook/react";
import CommentsSlider from "/src/components/Movie/CommentsSlider/CommentsSlider";
import "/src/styles/global.sass";
import { mockComment } from "/src/utils/comments";

const meta: Meta<typeof CommentsSlider> = {
  title: "Movie/CommentsSlider",
  component: CommentsSlider,
};

export default meta;
type Story = StoryObj<typeof CommentsSlider>;

export const DefaultMovieCard: Story = {
  args: {
    comments: [mockComment],
  },
};
