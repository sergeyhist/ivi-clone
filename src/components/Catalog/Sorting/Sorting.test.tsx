import { act, fireEvent, screen } from "@testing-library/react";
import Sorting from "./Sorting";
import { renderWithProviders } from "/src/utils/test-utils";
import { setSortingMethod } from "/src/store/slices/filtersSlice";
import mockRouter from "next-router-mock";
import { IProviderRender } from "/src/types/IRender";

jest.mock("next/router", () => require("next-router-mock"));

describe("Sorting component", () => {
  let render: IProviderRender;
  let sorting: HTMLElement;
  let sortingDropdown: HTMLElement;
  let sortingMethod: string;

  mockRouter.locale = "en";

  beforeEach(() => {
    render = renderWithProviders(<Sorting />);
    sorting = screen.getByTestId("sorting");
    sortingDropdown = screen.getByTestId("sorting-dropdown");
    sortingMethod = render.store.getState().filters.sortingMethod;
  });

  test("should render correctly", () => {
    expect(render.component.container).toBeInTheDocument();
    expect(sortingDropdown).not.toHaveClass("sorting__dropdown_active");
  });

  test("open dropdown on click", () => {
    fireEvent.click(sorting.getElementsByClassName("title")[0]);
    expect(sortingDropdown).toHaveClass("sorting__dropdown_active");
  });

  test("select option from the list", () => {
    fireEvent.click(sorting.getElementsByClassName("title")[0]);
    expect(sortingDropdown).toHaveClass("sorting__dropdown_active");
    fireEvent.click(screen.getAllByTestId("sorting-option")[1]);
    expect(render.store.getState().filters.sortingMethod).not.toEqual(sortingMethod);
  });

  test("close dropdown on escape keydown", () => {
    fireEvent.click(sorting.getElementsByClassName("title")[0]);
    expect(sortingDropdown).toHaveClass("sorting__dropdown_active");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(sortingDropdown).not.toHaveClass("sorting__dropdown_active");
  });

  test("wrong sorting method", () => {
    act(() => {
      render.store.dispatch(setSortingMethod("test"));
    });
    expect(screen.getByTestId("sorting-title")).toBeEmptyDOMElement();
  });
});

describe("Sorting component (different locales)", () => {
  let render: IProviderRender;
  let sorting: HTMLElement;
  let sortingDropdown: HTMLElement;
  let i = 0;
  const locales = ["en", "ru", ""];

  beforeEach(() => {
    mockRouter.locale = locales[i];
    render = renderWithProviders(<Sorting />);
    sorting = screen.getByTestId("sorting");
    sortingDropdown = screen.getByTestId("sorting-dropdown");
    i++;
  });

  test("name sorting with en locale", () => {
    fireEvent.click(sorting.getElementsByClassName("title")[0]);
    expect(sortingDropdown).toHaveClass("sorting__dropdown_active");
    fireEvent.click(screen.getAllByTestId("sorting-option")[3]);
    expect(render.store.getState().filters.sortingMethod).toEqual("name_en");
  });

  test("name sorting with ru locale", () => {
    fireEvent.click(sorting.getElementsByClassName("title")[0]);
    expect(sortingDropdown).toHaveClass("sorting__dropdown_active");
    fireEvent.click(screen.getAllByTestId("sorting-option")[3]);
    expect(render.store.getState().filters.sortingMethod).toEqual("name_ru");
  });

  test("name sorting with empty locale", () => {
    fireEvent.click(sorting.getElementsByClassName("title")[0]);
    expect(sortingDropdown).toHaveClass("sorting__dropdown_active");
    fireEvent.click(screen.getAllByTestId("sorting-option")[3]);
    expect(render.store.getState().filters.sortingMethod).toEqual("name_ru");
  });
});
