import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";
import ModalInput from "/src/UI/ModalInput/ModalInput";

const meta: Meta<typeof ModalInput> = {
  title: "ModalInput",
  tags: ['autodocs'],
  argTypes:{
    inputType: {
      description: "Type of input"
    }
  },
  component: ModalInput,
};

export default meta;
type Story = StoryObj<typeof ModalInput>;

export const EmailInput: Story = {
  args: {
   inputType: "email",
    placeholderText: "Input your email",
    buttonText: "submit",
  },
};
