import { act, fireEvent } from "@testing-library/react";
import PersonSelector from "./PersonSelector";
import { IProviderRender } from "/src/types/IRender";
import { actorsList } from "/src/utils/mocks/actors";
import { renderWithProviders } from "/src/utils/test-utils";
import { config } from "react-transition-group";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";

config.disabled = true;

jest.mock("next/router", () => require("next-router-mock"));

describe("Person selector component", () => {
  let i = 0;
  let render: IProviderRender;
  let slug: string;

  beforeEach(() => {
    switch (i) {
      case 1:
      case 7:
        slug = "nicholas_foote";
        break;
      case 8:
        slug = "nich_foo";
        break;
      case 9:
      case 10:
        slug = "kelly_hill";
        break;
      default:
        slug = "";
    }

    jest.useFakeTimers();
    render = renderWithProviders(
      <PersonSelector type="actor" list={actorsList} filter={slug} />
    );
  });

  afterEach(() => {
    i++;
    jest.resetAllMocks();
  });

  test("component has been rendered correctly", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("person-selector")).toBeInTheDocument();
  });

  test("render component with active filter", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("person-selector")).toBeInTheDocument();
    expect(getByTestId("selector-input")).toHaveValue("Николас Фут");
  });

  test("input change", () => {
    const { getByTestId } = render.component;

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("test"));

    expect(getByTestId("selector-input")).toHaveValue("test");
  });

  test("render dropdown list with persons", () => {
    const { getByTestId } = render.component;

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("mi"));

    expect(getByTestId("person-list")).toBeInTheDocument();
  });

  test("render dropdown list while input value includes space", () => {
    const { getByTestId } = render.component;

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("mi hi"));
    act(() => jest.runAllTimers());

    expect(getByTestId("selector-input")).toHaveValue("mi hi");
    expect(getByTestId("person-list")).toBeInTheDocument();
  });

  test("close dropdown list on escape keydown", () => {
    const { getByTestId, queryByTestId } = render.component;

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("mi"));

    expect(getByTestId("person-list")).toBeInTheDocument();

    act(() => userEvent.keyboard("{Escape}"));
    expect(queryByTestId("person-list")).not.toBeInTheDocument();
  });

  test("click callback in dropdown list has been called", () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render.component;

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("mi"));
    act(() => jest.runAllTimers());

    expect(getByTestId("person-list")).toBeInTheDocument();

    fireEvent.click(getAllByTestId("list-item")[0]);
    expect(queryByTestId("person-list")).not.toBeInTheDocument();
  });

  test("click on reset button", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("selector-input")).toHaveValue("Николас Фут");

    act(() => userEvent.click(getByTestId("reset-button")));
    expect(getByTestId("selector-input")).toBeEmptyDOMElement();
  });

  test("render component with wrong active filter", () => {
    const { getByTestId } = render.component;

    expect(getByTestId("selector-input")).toBeEmptyDOMElement();
  });

  test("render dropdown list with active filter", () => {
    const { getByTestId, getAllByTestId } = render.component;

    expect(getByTestId("person-selector")).toBeInTheDocument();
    expect(getByTestId("selector-input")).toHaveValue("Келли Хилл");

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("{Backspace}"));
    act(() => jest.runAllTimers());

    expect(getByTestId("person-list")).toBeInTheDocument();
    expect(getByTestId("selector-input")).toHaveValue("Келли Хил");
    expect(getAllByTestId("list-item")[0]).toHaveClass("list__item_active");
  });

  test("render dropdown list with en locale", () => {
    const { getByTestId, getAllByTestId } = render.component;

    mockRouter.locale = "en";

    expect(getByTestId("person-selector")).toBeInTheDocument();
    expect(getByTestId("selector-input")).toHaveValue("Келли Хилл");

    act(() => userEvent.click(getByTestId("selector-input")));
    act(() => userEvent.keyboard("{Backspace}"));
    act(() => jest.runAllTimers());

    expect(getByTestId("person-list")).toBeInTheDocument();
    expect(getAllByTestId("list-item")[0]).toHaveTextContent("Kelly Hill");
  });
});
