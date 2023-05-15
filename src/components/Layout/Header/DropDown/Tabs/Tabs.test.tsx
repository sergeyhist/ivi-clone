import { render, screen } from "@testing-library/react";
import Tabs from "/src/components/Layout/Header/DropDown/Tabs/Tabs";
import {
  cartoonsTabsHrefs,
  getTabsHrefs,
  moviesTabsHrefs,
  seriesTabsHrefs,
} from "/src/components/Layout/Header/DropDown/Tabs/Tabs.utils";

describe("Tabs", () => {
  it("should renders without errors", () => {
    render(<Tabs selectedGenre="movies" />);
    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });
  it("returns an array of hrefs for cartoons genre", () => {
    const result = getTabsHrefs("cartoons");
    expect(result).toEqual(cartoonsTabsHrefs);
  });
  it("returns an array of hrefs for movies genre", () => {
    const result = getTabsHrefs("movies");
    expect(result).toEqual(moviesTabsHrefs);
  });

  it("returns an array of hrefs for series genre", () => {
    const result = getTabsHrefs("series");
    expect(result).toEqual(seriesTabsHrefs);
  });
});
