import { renderWithProviders } from "/src/utils/test-utils";
import AuthModal from "/src/components/ModalWindows/AuthModal/AuthModal";
import { fireEvent } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("AuthModal", () => {
  it("should renders without errors", () => {
    const { component: {getByTestId} } = renderWithProviders(
      <AuthModal closeCallback={jest.fn()} />
    );
    expect(getByTestId("modal-container")).toBeInTheDocument();
  });

  it('should close the modal when "Escape" key is pressed', () => {
    const closeCallbackMock = jest.fn();
    const {component: {getByTestId} } = renderWithProviders(
      <AuthModal closeCallback={closeCallbackMock} />
    );

    const modalContainer = getByTestId("modal-container");
    fireEvent.keyDown(modalContainer, { key: "Escape" });

    expect(closeCallbackMock).toHaveBeenCalled();
  });
});