import { render, screen } from "@testing-library/react";
import Navigation from "/src/components/Layout/Header/NavigationLayout/Navigation/Navigation";

const setIsDropdownActive =jest.fn();
const setDropDownType =jest.fn();
describe("Navigation", () => {
  beforeEach(()=>{
    render(<Navigation setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType}/>);
  })
  it("should renders without errors", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
  it("should set IsDropdownActive to false after mouse enter",()=>{

  })
});