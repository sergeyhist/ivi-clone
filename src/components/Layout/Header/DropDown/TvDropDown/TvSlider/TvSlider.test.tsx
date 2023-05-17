import { render, screen } from "@testing-library/react";
import TvSlider from "/src/components/Layout/Header/DropDown/TvDropDown/TvSlider/TvSlider";
import { tvSlides } from "/src/components/Layout/Header/DropDown/TvDropDown/TvDropDown.utils";

describe("TvSlider", () => {
  it("should renders without errors", () => {
    render(<TvSlider slides={tvSlides} />);
    expect(screen.getByTestId("tv-slider")).toBeInTheDocument();
  });
});