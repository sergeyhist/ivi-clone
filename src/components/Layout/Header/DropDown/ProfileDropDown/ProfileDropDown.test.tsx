import { fireEvent,screen } from "@testing-library/react";
import ProfileDropDown from "/src/components/Layout/Header/DropDown/ProfileDropDown/ProfileDropDown";
import { store } from "/src/store";
import { setAuth } from "/src/store/slices/authSlice";
import { renderWithProviders } from "/src/utils/test-utils";

describe("ProfileDropDown", () => {
  it("should render without errors", () => {
    renderWithProviders(<ProfileDropDown />);
    expect(screen.getByTestId("profile-dropdown")).toBeInTheDocument();
  });

  it("should change showAuthModal state to true", () => {
    renderWithProviders(<ProfileDropDown />);
    fireEvent.click(screen.getByTestId("auth-btn"));
    expect(store.getState().showModal.showAuthModal).toBeTruthy();
  });

  it("should render user email after set authState to true", () => {
    store.dispatch(setAuth({ isLogged: true, userEmail: "test" }));

    renderWithProviders(<ProfileDropDown />);
    expect(screen.getByTestId("user-email")).toBeInTheDocument();
  });
});