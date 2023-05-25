import { fireEvent } from "@testing-library/react";
import MultiSelector from "./MultiSelector";
import { IProviderRender } from "/src/types/IRender";
import { genresListSlugs } from "/src/utils/mocks/genres";
import { renderWithProviders } from "/src/utils/test-utils";
import * as query from "/src/utils/query";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("src/utils/query");

describe("Multi selector component", () => {
  let render: IProviderRender;

  beforeEach(() => {
    render = renderWithProviders(
      <MultiSelector
        title={"genre"}
        items={genresListSlugs}
        filters={["anime", "melodrama"]}
        filtersType="genres"
      />
    );
  });

  test("component has been rendered correctly", () => {
    const { getByTestId } = render.component;
    expect(getByTestId("multi-selector")).toBeInTheDocument();
  });

  test("componeent's slider has been rendered correctly", () => {
    const { getByTestId } = render.component;
    expect(getByTestId("filter-slider")).toBeInTheDocument();
  });

  test("slider's click callback has been called", () => {
    const { getAllByTestId } = render.component;
    const spy = jest.spyOn(query, "setQueryParams");

    fireEvent.click(getAllByTestId("slider-content")[0]);

    expect(spy).toHaveBeenCalled();
  });

  test("list item click callback has been called", () => {
    const { getAllByTestId } = render.component;
    const spy = jest.spyOn(query, "setQueryParams");

    fireEvent.click(getAllByTestId("list-item")[0]);

    expect(spy).toHaveBeenCalled();
  });

  test("dropdown become active on title component click", () => {
    const { getByTestId } = render.component;

    fireEvent.click(getByTestId("filter-title"));

    expect(getByTestId("multi-selector-dropdown")).toHaveClass(
      "filter__dropdown_active"
    );
  });

  test("dropdown become inactive on escape keydown", () => {
    const { getByTestId } = render.component;

    fireEvent.click(getByTestId("filter-title"));
    expect(getByTestId("multi-selector-dropdown")).toHaveClass(
      "filter__dropdown_active"
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(getByTestId("multi-selector-dropdown")).not.toHaveClass(
      "filter__dropdown_active"
    );
  });
});
