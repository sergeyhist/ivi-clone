import type { Meta, StoryObj } from "@storybook/react";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import "/src/styles/global.sass";

const meta: Meta<typeof ModalInput> = {
  title: "UI/ModalInput",
  tags: ['autodocs'],
  argTypes:{
    authData: {
      description: "(optional) Value of input which you can get from parent component"
    },
    setAuthData:{
      description: "(optional) A state setter function that sets the value of authData."
    },
    inputType: {
      description: "A string that represents the type of input element. Can be one of \"email\", \"password\", or \"text\"."
    },
    showIcon: {
      description: "(optional) A boolean that indicates whether to show an icon next to the input element."
    },
    buttonText: {
      description: "A string that represents the text to be displayed on the button."
    },
    showErrorMessage: {
      description: "(optional) A boolean that indicates whether to show an error message if the authentication data is invalid."
    },
    clickCallback: {
      description: "(optional) A callback function that is called when the button is clicked."
    },
    preventDefault: {
      description: "(optional) A boolean that indicates whether to prevent the default form submission behavior."
    },
    className: {
      description: "(optional) A string representing the CSS class name(s) to be applied to the component."
    },
    placeholderText: {
      description: "A string that represents the placeholder text to be displayed in the input element."
    },
    setIsValid: {
      description: "(optional) A state setter function that sets the validity of the authentication data, based on some validation criteria."
    },
    isFocused:{
      description: "(optional) A state which indicates whether the input will have focus"
    }
  },
    decorators: [
      (Story) => (
        <div style={{ width: "300px" }}>
  <Story />
  </div>
),
],
  component: ModalInput,
};

export default meta;
type Story = StoryObj<typeof ModalInput>;

export const EmailInput: Story = {
  args: {
   inputType: "email",
    placeholderText: "Input your email",
    buttonText: "submit",
    showIcon: true,
  },
};

export const PasswordInput: Story = {
  args: {
    inputType: "password",
    placeholderText: "Input your password",
    buttonText: "Enter",
  },
};
