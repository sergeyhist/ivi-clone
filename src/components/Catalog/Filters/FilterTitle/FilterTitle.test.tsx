import { fireEvent } from "@testing-library/react";
import FilterTitle from "./FilterTitle";
import { IProviderRender } from "/src/types/IRender";
import { renderWithProviders } from "/src/utils/test-utils";
import React from "react";

describe("Filter title component", () => {
  let i = 0;
  let render: IProviderRender;
  const fakeClick = jest.fn();

  beforeEach(() => {
    render = renderWithProviders(
      <FilterTitle
        text="test"
        isActive={i === 1}
        filters={i !== 3 ? "test" : ["test", "test"]}
        filtersType="test"
        clickCallback={fakeClick}
      />
    );
  });

  afterEach(() => {
    i++;
  });

  test("component has been rendered correctly", () => {
    expect(render.component.getByTestId("filter-title")).toBeInTheDocument();
  });

  test("render component with active states", () => {
    expect(render.component.getByTestId("filter-title")).toBeInTheDocument();
    expect(render.component.getByTestId("filter-title")).toHaveClass(
      "title_active"
    );
    expect(render.component.getByTestId("filter-title-arrow")).toHaveClass(
      "title__arrow_active"
    );
  });

  test("click on component", () => {
    fireEvent.click(render.component.getByTestId("filter-title"));
    expect(fakeClick).toHaveBeenCalled();
  });

  test("render component with array of active filters", () => {
    expect(render.component.getByTestId("filter-title")).toBeInTheDocument();
    expect(
      render.component.getByTestId("filter-title-active")
    ).toHaveTextContent("test:test, test:test");
  });
});
