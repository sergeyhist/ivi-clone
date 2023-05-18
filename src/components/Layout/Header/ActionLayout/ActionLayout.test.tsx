import { act, fireEvent, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { renderWithProviders } from "/src/utils/test-utils";
import Header from "../Header";

jest.mock("next/router", () => require("next-router-mock"));

describe("ActionLayout", () => {
  test("should renders without errors", () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId("actionLayout-container")).toBeInTheDocument();
  });

  test("calls router.push with the correct arguments", () => {
    jest.useFakeTimers();
    const push = jest.spyOn(mockRouter, "push");

    mockRouter.locale = "ru";
    mockRouter.locales = ["en", "ru"];
    mockRouter.asPath = "/";

    renderWithProviders(<Header />);
    const toggleSwitch = screen.getByTestId("toggle-switch");

    act(() => fireEvent.click(toggleSwitch));
    setTimeout(() => {
      expect(push).toHaveBeenCalled();
      expect(mockRouter.locale).toEqual("en");
    }, 500);
    act(() => jest.runAllTimers());
  });
});
