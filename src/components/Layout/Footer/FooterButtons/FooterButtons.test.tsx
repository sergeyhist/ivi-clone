import { renderWithProviders } from "/src/utils/test-utils";
import { act, fireEvent, screen } from "@testing-library/react";
import { store } from "/src/store";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import { config } from "react-transition-group";
import userEvent from "@testing-library/user-event";
import FooterButtons from "./FooterButtons";

config.disabled = true;
window.open = jest.fn();

describe("Footer buttons", () => {
  const spy = jest.spyOn(window, "open");

  beforeEach(() => {
    store.dispatch(setWindowSize({ width: 1920, height: 1080 }));
    renderWithProviders(<FooterButtons />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Footer buttons rendered without errors", () => {
    expect(screen.getByTestId("footer-buttons"));
  });

  test("Phones list rendered without errors", () => {
    fireEvent.click(screen.getByTestId("phones"));
    expect(screen.getByTestId("phones-dropdown")).toBeInTheDocument();
  });

  test("Phones list removes after escape keydown", () => {
    fireEvent.click(screen.getByTestId("phones"));
    expect(screen.getByTestId("phones-dropdown")).toBeInTheDocument();
    act(() => userEvent.keyboard("{Escape}"));
    expect(screen.queryByTestId("phones-dropdown")).not.toBeInTheDocument();
  });

  test("Phones list removes after click outside", () => {
    fireEvent.click(screen.getByTestId("phones"));
    expect(screen.getByTestId("phones-dropdown")).toBeInTheDocument();
    act(() => userEvent.click(screen.getByTestId("footer-buttons")));
    expect(screen.queryByTestId("phones-dropdown")).not.toBeInTheDocument();
  });

  test("Chat button opens window", () => {
    fireEvent.click(screen.getByTestId("chat"));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("https://www.ivi.ru/profile");
  });

  test("Mail button opens window", () => {
    fireEvent.click(screen.getByTestId("support"));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("mailto:support@ivi.ru");
  });
});
