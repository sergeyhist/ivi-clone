import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import Container from "/src/UI/Container/Container";

const meta: Meta<typeof Container> = {
  title: "UI/Container",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "Children React.Node which will be displayed inside the Container",
    },
  },
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const DefaultMovieSlides: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ea tempore
        debitis animi architecto deserunt explicabo molestias commodi in nobis sunt
        aspernatur exercitationem, corporis laudantium, dolorum repellat! Modi,
        corrupti culpa!
      </p>
    ),
  },
};
