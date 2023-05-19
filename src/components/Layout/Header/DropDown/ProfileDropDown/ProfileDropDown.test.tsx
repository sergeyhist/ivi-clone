import {act, fireEvent, screen} from "@testing-library/react";
import ProfileDropDown from "/src/components/Layout/Header/DropDown/ProfileDropDown/ProfileDropDown";
import { setAuth } from "/src/store/slices/authSlice";
import { renderWithProviders } from "/src/utils/test-utils";

describe("ProfileDropDown", () => {
  it("should render without errors", () => {
    renderWithProviders(<ProfileDropDown />);
    expect(screen.getByTestId("profile-dropdown")).toBeInTheDocument();
  });

  it("should change showAuthModal state to true", () => {
    const {store} = renderWithProviders(<ProfileDropDown />);
    fireEvent.click(screen.getByTestId("auth-btn"));
    expect(store.getState().showModal.showAuthModal).toBeTruthy();
  });

  it("should render user email after set authState to true", () => {
    const {store} = renderWithProviders(<ProfileDropDown />);
    act(()=>store.dispatch(setAuth({ isLogged: true, userEmail: "test" })));

    expect(screen.getByTestId("user-email")).toBeInTheDocument();
  });
});