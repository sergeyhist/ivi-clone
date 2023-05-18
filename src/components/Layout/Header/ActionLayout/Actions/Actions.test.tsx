import { fireEvent, screen } from "@testing-library/react";
import { store } from "/src/store";
import Actions from "/src/components/Layout/Header/ActionLayout/Actions/Actions";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import { setAuth } from "/src/store/slices/authSlice";
import { renderWithProviders } from "/src/utils/test-utils";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

store.dispatch(setWindowSize({ width: 1960, height: 1200 }));
const setDropDownType = jest.fn();
const setIsDropdownActive = jest.fn();

describe("Actions", () => {
  const renderComponent = (): void => {
    renderWithProviders(
      <Actions
        setDropDownType={setDropDownType}
        setIsDropdownActive={setIsDropdownActive}
      />
    );
  }

  afterEach(() => {
    jest.clearAllMocks();
  })


  it("renders without errors", () => {
    renderComponent();
    expect(screen.getByTestId("actions-container")).toBeInTheDocument();
  });

  it("should render search button when windowSizeWidth is greater than 1159", () => {
    renderComponent();
    expect(screen.getByTestId("search-link")).toBeInTheDocument();
  });

  it("should change showSearchModal store state to true", () => {
    renderComponent();
    const searchLink = screen.getByTestId("search-link");
    fireEvent.click(searchLink);
    expect(store.getState().showModal.showSearchModal).toBeTruthy();
    fireEvent.mouseEnter(searchLink);
    expect(setIsDropdownActive).toHaveBeenCalledWith(false);
  });

  it("should render logout button when authState.isLogged is true", () => {
    store.dispatch(setAuth({ isLogged: true, userEmail: "email" }));

    renderComponent();

    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
  });

  it("should change setAuth store state to false", () => {
    store.dispatch(setAuth({ isLogged: true, userEmail: "email" }));
    
    renderComponent();

    fireEvent.click(screen.getByTestId("logout-button"));
    expect(store.getState().auth.isLogged).toBeFalsy();
  });

  it("should change showAuthModal store state to true", () => {
    renderComponent();
    const authButton = screen.getByTestId("auth-button");

    fireEvent.click(authButton);
    expect(store.getState().showModal.showAuthModal).toBeTruthy();
    fireEvent.mouseEnter(authButton);
    expect(setDropDownType).toHaveBeenCalledWith("profile");
    expect(setIsDropdownActive).toHaveBeenCalledWith(true);
  });

  it("should render subscription link when router.pathname is not '/'", () => {
    renderComponent();
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
    renderComponent();

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
});
