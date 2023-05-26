import { render, screen } from "@testing-library/react";
import ErrorMessage from "/src/components/ModalWindows/AuthModal/ChatDialogue/ErrorMessage/ErrorMessage";

describe("ErrorMessage", () => {
  it("should renders without errors", () => {
    const { getByTestId } = render(<ErrorMessage showErrorMessage={true} />);
    expect(getByTestId("error-message")).toBeInTheDocument();
    const errorMessage = screen.getByText("errorMessage.title");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should hide error message", () => {
    const { container } = render(<ErrorMessage showErrorMessage={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render correct translation", () => {
    render(<ErrorMessage showErrorMessage={true} />);

    const errorTitle = screen.getByText("errorMessage.title");
    const errorSubtitle = screen.getByText("errorMessage.subtitle");

    expect(errorTitle).toBeInTheDocument();
    expect(errorSubtitle).toBeInTheDocument();
  });
});