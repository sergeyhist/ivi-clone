import type { Meta, StoryObj } from "@storybook/react";
import SliderButtons from "/src/UI/SliderButtons/SliderButtons";
import "/src/styles/global.sass";
import Container from "/src/UI/Container/Container";

const meta: Meta<typeof SliderButtons> = {
  title: "UI/SliderButtons",
  tags: ["autodocs"],
  argTypes: {
    prevCallback: { description: "" },
    nextCallback: { description: "" },
    prevClassName: { description: "" },
    nextClassName: { description: "" },
    state: { description: "" },
  },
  decorators: [
    (Story) => (
      <main style={{ padding: "24px" }}>
        <Container>
          <Story />
        </Container>
      </main>
    ),
  ],
  component: SliderButtons,
};

export default meta;
type Story = StoryObj<typeof SliderButtons>;

export const DefaultMovieSlides: Story = {
  args: {
    prevCallback: () => console.log("prev"),
    nextCallback: () => console.log("next"),
    state: { prev: true, next: true },
  },
};
