import {render,screen} from "@testing-library/react";
import SearchPlaceholder from "/src/components/ModalWindows/SearchModal/SearchPlaceholder/SearchPlaceholder";

describe("SearchPlaceholder",()=>{
  it("should renders without errors",()=>{
    render(<SearchPlaceholder searchStates={{
      stringActive: false,
      buttonActive: true,
      buttonHover: false,
      inputActive: true,
    }}/>);
    const searchPlaceholder = screen.getByTestId("search-placeholder");
    expect(searchPlaceholder).toBeInTheDocument();
    expect(searchPlaceholder).not.toHaveClass("placeholder_active");
  })
})