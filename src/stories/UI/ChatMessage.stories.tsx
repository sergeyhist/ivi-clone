import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import ChatMessage from "/src/components/ModalWindows/AuthModal/ChatMessage/ChatMessage";

const meta: Meta<typeof ChatMessage> = {
  title: "UI/ChatMessage",
  tags: ['autodocs'],
  argTypes:{
    titleText:{
      description:"A string that represents title text"
    },
    subtitleText:{
      description: "(optional) a string that represents subtitle text"
    }
  },
  decorators: [
    (Story) => (
      <main style={{ width: "200px" }}>
        <Story />
      </main>
    ),
  ],
  component: ChatMessage,
};

export default meta;
type Story = StoryObj<typeof ChatMessage>;

export const FirstStory: Story = {
  args:{
    titleText: "Test message"
  }
};

export const SecondStory: Story = {
  args:{
    titleText: "Message title",
    subtitleText: "some subtitle text"
  }
};

