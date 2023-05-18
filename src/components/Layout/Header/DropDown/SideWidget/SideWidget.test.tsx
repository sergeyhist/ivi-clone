import { render, screen } from "@testing-library/react";
import SideWidget from "/src/components/Layout/Header/DropDown/SideWidget/SideWidget";

describe("SideWidget", () => {
  it("should renders without errors", () => {
    render(<SideWidget />);
    expect(screen.getByTestId("side-widget")).toBeInTheDocument();
  });
});