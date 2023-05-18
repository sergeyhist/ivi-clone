import { render, screen } from "@testing-library/react";
import TvDropDown from "/src/components/Layout/Header/DropDown/TvDropDown/TvDropDown";

describe("TvDropDown", () => {
  it("should renders without errors", () => {
    render(<TvDropDown />);
    expect(screen.getByTestId("channels-container")).toBeInTheDocument();
  });
});