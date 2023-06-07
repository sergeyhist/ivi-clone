import FiltersInfo from "./FiltersInfo";
import * as utils from "./FiltersInfo.utils";
import { useGetActors, useGetDirectors } from "/src/api/persons";
import { defaultFilters } from "/src/utils/filters/filtersVariables";
import * as text from "/src/utils/filters/getFiltersText";
import { actorsList } from "/src/utils/mocks/actors";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("axios");
jest.mock("src/utils/filters/getFiltersText");
jest.mock("src/api/persons");
jest.mock("./FiltersInfo.utils");

describe("Filters info component", () => {
  let personFinderSpy: jest.SpyInstance;
  let getPersonNameSpy: jest.SpyInstance;

  beforeEach(() => {
    getPersonNameSpy = jest.spyOn(utils, "getPersonName");
    personFinderSpy = jest.spyOn(utils, "personFinder");

    (useGetActors as jest.Mock).mockReturnValue({
      data: actorsList,
    });
    (useGetDirectors as jest.Mock).mockReturnValue({
      data: actorsList,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("component has been rendered correctly", () => {
    const render = renderWithProviders(<FiltersInfo />);
    expect(render.component.getByTestId("filters-info")).toBeInTheDocument();
  });

  test("personFinder has been called", () => {
    renderWithProviders(<FiltersInfo />);
    expect(personFinderSpy).toHaveBeenCalledTimes(2);
  });

  test("getPersonName has been called", () => {
    (utils.personFinder as jest.Mock).mockReturnValue(actorsList[0]);
    renderWithProviders(<FiltersInfo />);
    expect(getPersonNameSpy).toHaveBeenCalledTimes(2);
  });

  test("getFiltersText has been called with actor and director info", () => {
    const getFiltersTextSpy = jest.spyOn(text, "getFiltersText");

    (utils.personFinder as jest.Mock).mockReturnValue(actorsList[0]);
    (utils.getPersonName as jest.Mock).mockReturnValue("Test Test");

    const render = renderWithProviders(<FiltersInfo />);

    expect(getFiltersTextSpy).toHaveBeenCalled();
    expect(getFiltersTextSpy).toHaveBeenCalledWith(
      render.store.getState().filters.filters,
      "Test Test",
      "Test Test"
    );
  });

  test("getFiltersText has been called with undefined actor and director", () => {
    const getFiltersTextSpy = jest.spyOn(text, "getFiltersText");

    (utils.personFinder as jest.Mock).mockReturnValue(actorsList[0]);
    (utils.getPersonName as jest.Mock).mockReturnValue(undefined);

    const render = renderWithProviders(<FiltersInfo />);

    expect(getFiltersTextSpy).toHaveBeenCalled();
    expect(getFiltersTextSpy).toHaveBeenCalledWith(
      render.store.getState().filters.filters,
      undefined,
      undefined
    );
  });
});

describe("personFinder function", () => {
  test("call function with valid filter", async () => {
    jest.unmock("./FiltersInfo.utils");

    const utils = await import("./FiltersInfo.utils");
    const result = utils.personFinder(
      "actor",
      { ...defaultFilters, actor: "elaine_mclaurin" },
      actorsList
    );

    expect(result).toEqual(actorsList[1]);
  });

  test("call function with undefined filter", async () => {
    jest.unmock("./FiltersInfo.utils");

    const utils = await import("./FiltersInfo.utils");
    const result = utils.personFinder(
      "actor",
      { ...defaultFilters, actor: [] },
      actorsList
    );

    expect(result).toEqual(undefined);
  });
});

describe("getPersonName function", () => {
  test("call function with en locale", async () => {
    jest.unmock("./FiltersInfo.utils");

    const utils = await import("./FiltersInfo.utils");
    const result = utils.getPersonName(actorsList[1], "ru");

    expect(result).toEqual("Илэйн МакЛорин");
  });

  test("call function with ru locale", async () => {
    jest.unmock("./FiltersInfo.utils");

    const utils = await import("./FiltersInfo.utils");
    const result = utils.getPersonName(actorsList[1], "en");

    expect(result).toEqual("Elaine McLaurin");
  });

  test("call function with undefined locale", async () => {
    jest.unmock("./FiltersInfo.utils");

    const utils = await import("./FiltersInfo.utils");
    const result = utils.getPersonName(actorsList[1]);

    expect(result).toEqual("Илэйн МакЛорин");
  });
});
