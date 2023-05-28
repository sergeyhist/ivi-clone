import { fireEvent, render } from "@testing-library/react";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import styles from "./ModalInput.module.sass";
import React from "react";

describe("ModalInput", () => {
  it("should renders without errors", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="text"
        placeholderText="test"
        buttonText="test"
        showIcon={true}
      />
    );
    expect(getByTestId("input-container")).toBeInTheDocument();
  });
  it("handles input change", () => {
    const setAuthData = jest.fn();
    const setIsValid = jest.fn();
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your name"
        buttonText="Submit"
        setAuthData={setAuthData}
        setIsValid={setIsValid}
        dataTestId="modal-input"
      />
    );
    const inputElement = getByTestId("modal-input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "John" } });

    expect(inputElement.value).toBe("John");
  });

  it("should handle input blur", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your name"
        buttonText="Submit"
        dataTestId="modal-input"
      />
    );
    const input = getByTestId("modal-input");
    const content = getByTestId("placeholder");

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: "John" } });

    expect(content).toHaveClass("placeholder_active");
  });
  it("should handle click outside", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your name"
        buttonText="Submit"
        dataTestId="modal-input"
      />
    );
    const input = getByTestId("modal-input");
    const content = getByTestId("placeholder");

    fireEvent.mouseDown(document);

    expect(content).not.toHaveClass("placeholder_active");

    fireEvent.mouseDown(content);
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: "John" } });

    expect(content).toHaveClass("placeholder_active");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.keyDown(document, { key: "Escape" });

    expect(content).not.toHaveClass("placeholder_active");

    fireEvent.mouseDown(content);
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: "John" } });

    expect(content).toHaveClass("placeholder_active");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.mouseDown(document);
    expect(content).not.toHaveClass("placeholder_active");
  });
  it("handles button click", () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <ModalInput
        inputType="email"
        placeholderText="Enter your name"
        buttonText="Submit"
        clickCallback={handleClick}
      />
    );

    const buttonElement = getByText("Submit");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("toggles password visibility", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your password"
        buttonText="Submit"
        dataTestId="modal-input"
      />
    );

    const inputElement = getByTestId("modal-input") as HTMLInputElement;
    const showIconElement = getByTestId("show-icon");

    fireEvent.click(showIconElement);

    expect(inputElement.type).toBe("text");

    fireEvent.click(showIconElement);

    expect(inputElement.type).toBe("password");
  });
  it("sets input error class name", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your password"
        buttonText="Submit"
        showErrorMessage={true}
        className="test__name"
      />
    );

    const inputContent = getByTestId("input-content");
    const inputContainer = getByTestId("input-container");

    expect(inputContent).toHaveClass(styles.input__error);
    expect(inputContainer).toHaveClass("test__name");
  });
  it("should update button and input states on initial load", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your password"
        buttonText="Submit"
        dataTestId="modal-input"
      />
    );
    const input = getByTestId("modal-input");
    const button = getByTestId("modal-input-button");

    expect(button).toHaveClass("button_disabled");
    expect(input).toHaveValue("");
    expect(input).not.toHaveClass("input_active");

    fireEvent.change(input, { target: { value: "test" } });

    expect(button).not.toHaveClass("button_disabled");
    expect(input).toHaveValue("test");
    fireEvent.click(input);
    expect(input).toHaveClass("input_active");
  });
  it("should focus input and set inputActive state to true when input value is not empty", () => {
    const { getByTestId } = render(
      <ModalInput
        inputType="password"
        placeholderText="Enter your password"
        buttonText="Submit"
        dataTestId="modal-input"
      />
    );
    const input = getByTestId("modal-input");

    expect(input).not.toHaveFocus();

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(input);

    expect(input).toHaveFocus();
  });
});
