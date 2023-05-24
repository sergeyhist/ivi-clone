import { fireEvent, render, screen } from "@testing-library/react";
import SearchButton from "/src/components/ModalWindows/SearchModal/SearchButton/SearchButton";

describe("SearchButton", () => {
  it("should renders without errors", () => {
    const clickCallback = jest.fn();
    render(
      <SearchButton
        searchQuery="test"
        searchStates={{
          stringActive: true,
          buttonActive: true,
          buttonHover: false,
          inputActive: true,
        }}
        clickCallback={clickCallback}
      />
    );
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(searchButton).toHaveClass("btn_active");
    expect(searchButton).not.toHaveClass("btn_hover");
    expect(clickCallback).toHaveBeenCalled();
  });
});