import type { Meta, StoryObj } from "@storybook/react";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import "/src/styles/global.sass";
import Container from "/src/UI/Container/Container";

const meta: Meta<typeof TextDropDown> = {
  title: "UI/TextDropDown",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "Children React.Node which will be displayed inside the TextDropDown",
    },
    toggleClassName: {
      description: "Toggle className for custom CSS in toggle button",
    },
    toggleTitles: {
      description: "titles that will be displayed in expanded and collapsed state",
    },
    textHeight: {
      description:
        "children React.Node element text height, when height is less than 100 toggle button will not displayed",
    },
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
  component: TextDropDown,
};

export default meta;
type Story = StoryObj<typeof TextDropDown>;

export const DefaultTextDropDown: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet qui,
        laudantium odio culpa vero a mollitia aliquid quibusdam numquam corrupti
        veritatis magni eligendi hic consequuntur pariatur ipsa eos delectus! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet qui,
        laudantium odio culpa vero a mollitia aliquid quibusdam numquam corrupti
        veritatis magni eligendi hic consequuntur pariatur ipsa eos delectus! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet qui,
        laudantium odio culpa vero a mollitia aliquid quibusdam numquam corrupti
        veritatis magni eligendi hic consequuntur pariatur ipsa eos delectus!
      </p>
    ),
    textHeight: 110,
  },
};
