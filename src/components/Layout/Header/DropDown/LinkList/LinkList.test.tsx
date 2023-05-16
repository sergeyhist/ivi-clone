import { render, screen } from "@testing-library/react";
import { store } from "/src/store";
import { Provider } from "react-redux";
import LinkList from "/src/components/Layout/Header/DropDown/LinkList/LinkList";
import {
  cartoonsCountriesHrefs,
  getCountriesLinksByCategory,
  localizeAndLimitList,
  moviesCountriesHrefs,
  seriesCountriesHrefs,
  sortSlugs,
} from "/src/components/Layout/Header/DropDown/LinkList/LinkList.utils";
import { DropDownType } from "/src/components/Layout/Header/Header.utils";

describe("LinkList", () => {
  const list = ["zeta", "alpha", "gamma"];
  const order: DropDownType[] = ["movies", "series", "cartoons"];
  const selectedGenre = "movies";
  const prefix = "nav";
  const limit = 2;
  const t = (key: string) => {
    const translations = {
      "nav:home": "Home",
      "nav:about": "About",
      "nav:contact": "Contact",
    };
    return translations[key] || key;
  };

  it("should render the genre links", () => {
    render(
      <Provider store={store}>
        <LinkList selectedGenre="movies" />
      </Provider>
    );

    const genreLinks = screen.getAllByRole("link");
    expect(genreLinks).toHaveLength(27);
    expect(genreLinks[0]).toHaveAttribute("href", "/movies?genres=drama");
    expect(genreLinks[0]).toHaveTextContent("Drama");
    expect(genreLinks[1]).toHaveAttribute("href", "/movies?genres=fantasy");
    expect(genreLinks[1]).toHaveTextContent("Fantasy");
  });
  it("returns sorted array", () => {
    const expected = ["alpha", "gamma", "zeta"];
    const result = sortSlugs(list, order, selectedGenre);
    expect(result).toEqual(expected);
  });
  it("returns empty array for empty list", () => {
    const expected: string[] = [];
    const result = sortSlugs([], order, selectedGenre);
    expect(result).toEqual(expected);
  });

  it("returns an array of localized strings", () => {
    const expected = ["nav:zeta", "nav:alpha"];
    const result = localizeAndLimitList(list, prefix, limit, t);
    expect(result).toEqual(expected);
  });
  it("returns array of links for movies category", () => {
    const expected = moviesCountriesHrefs;
    const result = getCountriesLinksByCategory("movies");
    expect(result).toEqual(expected);
  });

  it("returns array of links for series category", () => {
    const expected = seriesCountriesHrefs;
    const result = getCountriesLinksByCategory("series");
    expect(result).toEqual(expected);
  });
  it("returns array of links for cartoons category", () => {
    const expected = cartoonsCountriesHrefs;
    const result = getCountriesLinksByCategory("cartoons");
    expect(result).toEqual(expected);
  });
});