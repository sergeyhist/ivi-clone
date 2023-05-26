import { act } from "@testing-library/react";
import LinkList from "/src/components/Layout/Header/DropDown/LinkList/LinkList";
import {
  cartoonsCountriesHrefs,
  getCountriesLinksByCategory,
  moviesCountriesHrefs,
  seriesCountriesHrefs,
  sortSlugs,
} from "/src/components/Layout/Header/DropDown/LinkList/LinkList.utils";
import { DropDownType } from "/src/components/Layout/Header/Header.utils";
import { setSlugs } from "/src/store/slices/slugsSlice";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("LinkList", () => {
  const list = ["zeta", "alpha", "gamma"];
  const order: DropDownType[] = ["movies", "series", "cartoons"];
  const selectedGenre = "movies";

  test("render genre links from store", () => {
    const render = renderWithProviders(<LinkList selectedGenre="movies" />);

    act(() => render.store.dispatch(
      setSlugs({
        ...render.store.getState().slugs,
        genresSlugs: ["test", "test"],
      })
    ));

    const links = render.component.getAllByRole("link");

    expect(links.length).toBeGreaterThan(2);
    expect(links[0].getAttribute("href")).toContain("movies?genres=");
    expect(links[1].getAttribute("href")).toContain("movies?genres=");
    expect(links[2].getAttribute("href")).not.toContain("movies?genres=");
  });

  test("render genre links from store", () => {
    const render = renderWithProviders(<LinkList selectedGenre="movies" />);
    const links = render.component.getAllByRole("link");

    expect(links.length).toBeGreaterThan(19);
    expect(links[0].getAttribute("href")).toContain("movies?genres=");
    expect(links[19].getAttribute("href")).toContain("movies?genres=");
    expect(links[20].getAttribute("href")).not.toContain("movies?genres=");
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
