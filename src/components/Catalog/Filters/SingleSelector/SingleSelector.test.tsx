import { fireEvent } from "@testing-library/react";
import { IProviderRender } from "/src/types/IRender";
import { renderWithProviders } from "/src/utils/test-utils";
import * as query from "/src/utils/query";
import SingleSelector from "./SingleSelector";
import { yearFilterItems } from "../Filters.utils";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("src/utils/query");

describe("Multi selector component", () => {
  let render: IProviderRender;

  beforeEach(() => {
    render = renderWithProviders(
      <SingleSelector
        title={"year"}
        items={yearFilterItems}
        filter={"0-1990"}
        filterType="year"
      />
    );
  });

  test("component has been rendered correctly", () => {
    const { getByTestId } = render.component;
    expect(getByTestId("single-selector")).toBeInTheDocument();
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

    expect(getByTestId("single-selector-dropdown")).toHaveClass(
      "selector__dropdown_active"
    );
  });

  test("dropdown become inactive on escape keydown", () => {
    const { getByTestId } = render.component;

    fireEvent.click(getByTestId("filter-title"));
    expect(getByTestId("single-selector-dropdown")).toHaveClass(
      "selector__dropdown_active"
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(getByTestId("single-selector-dropdown")).not.toHaveClass(
      "selector__dropdown_active"
    );
  });
});
