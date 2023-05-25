import { act, fireEvent } from "@testing-library/react";
import RangeSelector from "./RangeSelector";
import { IProviderRender } from "/src/types/IRender";
import * as query from "/src/utils/query";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("src/utils/query");

describe("Range selector component", () => {
  let i = 0;
  let render: IProviderRender;

  beforeEach(() => {
    jest.useFakeTimers();
    render = renderWithProviders(
      <RangeSelector
        title={"rating"}
        max={9}
        step={0.1}
        filter={i !== 1 ? "8" : ""}
        filterType="rating"
      />
    );
  });

  afterEach(() => {
    i++;
  });

  test("component has been rendered correctly", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("range-selector")).toBeInTheDocument();
  });

  test("render component with undefined active filter", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("range-selector")).toBeInTheDocument();
    expect(getByTestId("range-input")).toHaveValue("0");
  });

  test("filter callback has been called", () => {
    const spy = jest.spyOn(query, "setQueryParams");
    const { getByTestId } = render.component;

    fireEvent.change(getByTestId("range-input"), { target: { value: "7.1" } });
    act(() => jest.runAllTimers());

    expect(spy).toHaveBeenCalled();
  });
});
