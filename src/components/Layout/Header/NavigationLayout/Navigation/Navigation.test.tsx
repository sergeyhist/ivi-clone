import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "/src/components/Layout/Header/NavigationLayout/Navigation/Navigation";

const setIsDropdownActive = jest.fn();
const setDropDownType = jest.fn();
describe("Navigation", () => {
  beforeEach(() => {
    render(
      <Navigation
        setIsDropdownActive={setIsDropdownActive}
        setDropDownType={setDropDownType}
      />
    );
  });
  it("should renders without errors", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("should set IsDropdownActive to false after mouse enter", () => {
    const firstNavLink = screen.getByTestId("nav-item-1");
    const secondNavLink = screen.getByTestId("nav-item-2");
    fireEvent.mouseEnter(firstNavLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(false);
    fireEvent.mouseEnter(secondNavLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(false);
  });

  it("should set IsDropdownActive to true after mouse enter", () => {
    const thirdNavLink = screen.getByTestId("nav-item-3");
    const fourthNavLink = screen.getByTestId("nav-item-4");
    const fifthNavLink = screen.getByTestId("nav-item-5");
    const sixNavLink = screen.getByTestId("nav-item-6");
    fireEvent.mouseEnter(thirdNavLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
    expect(setDropDownType).toHaveBeenCalledWith("movies");
    fireEvent.mouseEnter(fourthNavLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
    expect(setDropDownType).toHaveBeenCalledWith("series");
    fireEvent.mouseEnter(fifthNavLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
    expect(setDropDownType).toHaveBeenCalledWith("cartoons");
    fireEvent.mouseEnter(sixNavLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
    expect(setDropDownType).toHaveBeenCalledWith("tv");
  });
});
