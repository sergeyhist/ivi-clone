import { render, screen } from "@testing-library/react";
import SearchInput from "/src/components/ModalWindows/SearchModal/SearchInput/SearchInput";

describe("SearchInput", () => {
  it("should renders without errors", () => {
    render(
      <SearchInput
        searchQuery="test"
        searchStates={{
          stringActive: true,
          buttonActive: true,
          buttonHover: false,
          inputActive: true,
        }}
        changeCallback={jest.fn()}
      />
    );
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
});