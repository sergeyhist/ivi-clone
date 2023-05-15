import {fireEvent, render, screen} from "@testing-library/react";
import ProfileDropDown from "/src/components/Layout/Header/DropDown/ProfileDropDown/ProfileDropDown";
import { store } from "/src/store";
import {Provider} from "react-redux";
import {setAuth} from "/src/store/slices/authSlice";

describe("ProfileDropDown", () => {
  it("should render without errors", () => {
    render(
      <Provider store={store}>
        <ProfileDropDown />
      </Provider>
    );
    expect(screen.getByTestId("profile-dropdown")).toBeInTheDocument();
  });
  it("should change showAuthModal state to true",()=>{
    render(
      <Provider store={store}>
        <ProfileDropDown />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("auth-btn"));
    expect(store.getState().showModal.showAuthModal).toBeTruthy();
  })
  it("should render user email after set authState to true",()=>{
    store.dispatch(setAuth({isLogged:true,userEmail:'test'}))

    render(
      <Provider store={store}>
        <ProfileDropDown />
      </Provider>
    );
    expect(screen.getByTestId("user-email")).toBeInTheDocument();
  })
});