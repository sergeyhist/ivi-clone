import { render, screen } from "@testing-library/react";
import SearchCloseButton from "/src/components/ModalWindows/SearchModal/SearchCloseButton/SearchCloseButton";

describe("SearchCloseButton", () => {
  it("should renders without errors", () => {
    render(<SearchCloseButton clickCallback={jest.fn} />);
    expect(screen.getByTestId("close-search-btn")).toBeInTheDocument();
  });
});