import {fireEvent, render, screen} from "@testing-library/react";
import SearchString from "/src/components/ModalWindows/SearchModal/SearchString/SearchString";
import userEvent from "@testing-library/user-event";

describe("SearchString",()=>{
  const setSearchStates = jest.fn();
  const setSearchQuery = jest.fn();
  const searchStates = {
    stringActive: false,
    buttonActive: true,
    buttonHover: false,
    inputActive: true,
  };
  it("should renders without errors",()=>{

    render(<SearchString searchQuery="test" searchStates={searchStates} setSearchQuery={setSearchQuery} setSearchStates={setSearchStates}/>);
    const searchString = screen.getByTestId("search-string");
    expect(searchString).toBeInTheDocument();
    expect(searchString).not.toHaveClass("string_active");
    fireEvent.mouseOver(searchString);
    expect(setSearchStates).toHaveBeenCalledWith({
      stringActive: false,
      buttonActive: true,
      buttonHover: true,
      inputActive: true,
    });
    fireEvent.mouseOut(searchString);
    expect(setSearchStates).toHaveBeenCalledWith({
      stringActive: false,
      buttonActive: true,
      buttonHover: false,
      inputActive: true,
    });
    fireEvent.click(screen.getByTestId("search-button"));
    expect(setSearchQuery).toHaveBeenCalledWith("");
    expect(setSearchStates).toHaveBeenCalledWith({
      stringActive: false,
      buttonActive: true,
      buttonHover: false,
      inputActive: true,
    })
  });
  it("should call setSearchQuery after change input",()=>{
    render(<SearchString searchQuery="test" searchStates={searchStates} setSearchQuery={setSearchQuery} setSearchStates={setSearchStates}/>);
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput,"test");
    expect(searchInput).toHaveValue("test");
    expect(setSearchQuery).toHaveBeenCalled();
  })
})