import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import ErrorMessage from "/src/components/ModalWindows/AuthModal/ChatDialogue/ErrorMessage/ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "UI/ErrorMessage",
  decorators: [
    (Story) => (
      <main style={{ width: "400px" }}>
        <Story />
      </main>
    ),
  ],
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const FirstStory: Story = {
  args:{
    showErrorMessage:true
  }
};
