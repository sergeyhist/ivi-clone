import { render, screen } from "@testing-library/react";
import Navigation from "/src/components/Layout/Header/NavigationLayout/Navigation/Navigation";

const setIsDropdownActive =jest.fn();
const setDropDownType =jest.fn();
describe("Navigation", () => {
  it("should renders without errors", () => {
    render(<Navigation setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType}/>);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});