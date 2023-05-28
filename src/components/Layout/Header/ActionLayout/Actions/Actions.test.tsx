import { act, fireEvent, RenderResult, screen } from "@testing-library/react";
import { RootState } from "/src/store";
import Actions from "/src/components/Layout/Header/ActionLayout/Actions/Actions";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import { setAuth } from "/src/store/slices/authSlice";
import { renderWithProviders } from "/src/utils/test-utils";
import mockRouter from "next-router-mock";
import { ToolkitStore } from "@reduxjs/toolkit/src/configureStore";

jest.mock("next/router", () => require("next-router-mock"));

const setDropDownType = jest.fn();
const setIsDropdownActive = jest.fn();

describe("Actions desktop", () => {
  beforeEach(() => {
    const { store } = renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );
    act(() => {
      store.dispatch(setWindowSize({ width: 1600, height: 100 }));
      store.dispatch(setAuth({ isLogged: true, userEmail: "email" }));
    });
  });
  it("renders without errors", () => {
    expect(screen.getByTestId("actions-container")).toBeInTheDocument();
  });
  it("should render search button when windowSizeWidth is greater than 1159", () => {
    expect(screen.getByTestId("search-link")).toBeInTheDocument();
  });
  it("should render logout button when authState.isLogged is true", () => {
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
  });
});

describe("Actions", () => {
  const renderComponent = (): {
    store: ToolkitStore<RootState>;
    component: RenderResult;
  } =>
    renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should change showSearchModal store state to true", () => {
    const { store } = renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );
    act(() => store.dispatch(setWindowSize({ width: 1600, height: 100 })));
    const searchLink = screen.getByTestId("search-link");
    fireEvent.click(searchLink);
    expect(store.getState().showModal.showSearchModal).toBeTruthy();
    fireEvent.mouseEnter(searchLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(false);
  });

  it("should change setAuth store state to false", () => {
    const { store } = renderComponent();
    act(() => store.dispatch(setAuth({ isLogged: true, userEmail: "email" })));
    fireEvent.click(screen.getByTestId("logout-button"));
    expect(store.getState().auth.isLogged).toBeFalsy();
  });

  it("should change showAuthModal store state to true", () => {
    const { store } = renderComponent();
    const authButton = screen.getByTestId("auth-button");

    fireEvent.click(authButton);
    expect(store.getState().showModal.showAuthModal).toBeTruthy();
    fireEvent.mouseEnter(authButton);
    expect(setDropDownType).toHaveBeenCalledWith("profile");
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
  });

  it("should render subscription link when router.pathname is not '/'", () => {
    const { store } = renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );
    act(() => store.dispatch(setWindowSize({ width: 1600, height: 1700 })));
    const linkSubscription = screen.getByTestId("subscription-link");
    expect(linkSubscription).toBeInTheDocument();
    expect(linkSubscription).toHaveAttribute(
      "href",
      "https://www.ivi.ru/subscribe"
    );
    expect(linkSubscription).toHaveAttribute("target", "_blank");

    const subscriptionContent = screen.getByTestId("subscription-content");

    fireEvent.mouseEnter(subscriptionContent);

    expect(setDropDownType).toHaveBeenCalledWith("subscription");
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
  });

  it("should render subscription button when router.pathname is '/'", () => {
    mockRouter.push("/");
    const { store } = renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );
    act(() => store.dispatch(setWindowSize({ width: 1600, height: 1700 })));
    const buttonElement = screen.getByTestId("subscription-button");

    expect(buttonElement).toBeInTheDocument();
    fireEvent.mouseEnter(buttonElement);
    expect(setIsDropdownActive).toHaveBeenCalledWith(false);
  });

  it("should render notification button", () => {
    renderComponent();
    const notificationButton = screen.getByTestId("notification-button");
    expect(notificationButton).toBeInTheDocument();

    fireEvent.mouseEnter(notificationButton);

    expect(setDropDownType).toHaveBeenCalledWith("notification");
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
  });

  it("calls router.push with the correct arguments", () => {
    jest.useFakeTimers();
    const push = jest.spyOn(mockRouter, "push");

    mockRouter.locale = "ru";
    mockRouter.locales = ["en", "ru"];
    mockRouter.asPath = "/";

    renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );
    const toggleSwitch = screen.getByTestId("toggle-switch");

    act(() => fireEvent.click(toggleSwitch));
    setTimeout(() => {
      expect(push).toHaveBeenCalled();
      expect(mockRouter.locale).toEqual("en");
    }, 500);
    act(() => jest.runAllTimers());
  });
});
