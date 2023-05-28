import { act } from "@testing-library/react";
import Filters from "./Filters";
import { useGetActors, useGetDirectors } from "/src/api/persons";
import { IProviderRender } from "/src/types/IRender";
import { actorsList } from "/src/utils/mocks/actors";
import { renderWithProviders } from "/src/utils/test-utils";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";
import * as utils from "./Filters.utils";
import { countriesListSlugs } from "/src/utils/mocks/countries";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("axios");
jest.mock("src/api/persons");
jest.mock("./Filters.utils", () => ({
  ...jest.requireActual("./Filters.utils"),
  sortHandler: jest.fn(),
}));

describe("Filters component", () => {
  let i = 0;
  let render: IProviderRender;
  let sortHandlerSpy: jest.SpyInstance;

  beforeEach(() => {
    sortHandlerSpy = jest.spyOn(utils, "sortHandler");

    (useGetActors as jest.Mock).mockReturnValue({
      data: i !== 1 ? actorsList : undefined,
    });
    (useGetDirectors as jest.Mock).mockReturnValue({
      data: i !== 1 ? actorsList : undefined,
    });

    (utils.sortHandler as jest.Mock).mockReturnValue(countriesListSlugs);

    render = renderWithProviders(<Filters />);
  });

  afterEach(() => {
    i++;
    jest.resetAllMocks();
  });

  test("component has been rendered correctly", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("filters")).toBeInTheDocument();
  });

  test("render component with undefined actors and directors lists", () => {
    const { getAllByTestId } = render.component;

    expect(getAllByTestId("person-selector").length).toEqual(2);
  });

  test("update filters on query change", async () => {
    await act(() => mockRouter.replace({ query: { genres: "anime" } }));
    expect(render.store.getState().filters.filters.genres).toEqual("anime");
  });

  test("click on filters reset button", async () => {
    const { getAllByTestId } = render.component;
    await act(() => mockRouter.replace({ query: { genres: "anime" } }));
    expect(render.store.getState().filters.filters.genres).toEqual("anime");

    act(() => userEvent.click(getAllByTestId("reset-all-button")[0]));
    expect(render.store.getState().filters.filters.genres).toEqual([]);
  });

  test("click on page reset button", async () => {
    const { getAllByTestId } = render.component;
    await act(() => mockRouter.replace({ query: { page: "2" } }));
    expect(mockRouter.query.page).toEqual("2");

    act(() => userEvent.click(getAllByTestId("reset-all-button")[1]));
    expect(mockRouter.query.page).toEqual([]);
  });

  test("page reset button with window width > 550", () => {
    const { getAllByTestId } = render.component;
    act(() => render.store.dispatch(setWindowSize({ width: 560, height: 1080 })));

    expect(getAllByTestId("reset-all-button")[1]).toMatchSnapshot();
  });

  test("page reset button with window width < 550", () => {
    const { getAllByTestId } = render.component;
    act(() => render.store.dispatch(setWindowSize({ width: 540, height: 1080 })));

    expect(getAllByTestId("reset-all-button")[1]).toMatchSnapshot();
  });

  test("sort handler has been called", () => {
    expect(sortHandlerSpy).toHaveBeenCalled();
  });

  test("sort handler change initial array", async () => {
    jest.unmock("./Filters.utils");

    const utils = await import("./Filters.utils");

    const result = utils.sortHandler(countriesListSlugs);

    expect(result).not.toEqual(countriesListSlugs);
  });
});
