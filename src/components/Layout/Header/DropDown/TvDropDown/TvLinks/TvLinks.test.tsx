import { render, screen } from "@testing-library/react";
import TvLinks from "/src/components/Layout/Header/DropDown/TvDropDown/TvLinks/TvLinks";

describe("TvLinks", () => {
  it("should renders without errors", () => {
    render(<TvLinks />);
    expect(screen.getByTestId("tv-links")).toBeInTheDocument();
  });
});
