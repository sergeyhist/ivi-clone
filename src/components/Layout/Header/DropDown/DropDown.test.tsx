import DropDown from "/src/components/Layout/Header/DropDown/DropDown";
import {act, screen} from "@testing-library/react";
import { renderWithProviders } from "/src/utils/test-utils";
import {setWindowSize} from "/src/store/slices/windowSizeSlice";

describe("DropDown", () => {
  it("renders without errors when windowSizeWidth is greater than 1160", () => {
   const {store} = renderWithProviders(
      <DropDown dropDownType="movies" />
    );
    act(()=>store.dispatch(setWindowSize({width:1600,height:600})));
    expect(screen.getByTestId("ent-dropdown")).toBeInTheDocument();
  });

  it("renders without errors TvDropDown", () => {
    const {store} = renderWithProviders(<DropDown dropDownType="tv" />);
    act(()=>store.dispatch(setWindowSize({width:1600,height:600})));
    expect(screen.getByTestId("channels-container")).toBeInTheDocument();
  });

  it("renders without errors NotificationDropDown ", () => {
    const {store} = renderWithProviders(
      <DropDown dropDownType="notification" />
    );
    act(()=>store.dispatch(setWindowSize({width:1600,height:600})));
    expect(screen.getByTestId("notification-dropdown")).toBeInTheDocument();
  });

  it("renders without errors ProfileDropDown", () => {
    const {store} = renderWithProviders(
      <DropDown dropDownType="profile" />
    );
    act(()=>store.dispatch(setWindowSize({width:1600,height:600})));
    expect(screen.getByTestId("profile-dropdown")).toBeInTheDocument();
  });

  it("renders without errors SubscriptionDropdown", () => {
    const {store} = renderWithProviders(
      <DropDown dropDownType="subscription" />
    );
    act(()=>store.dispatch(setWindowSize({width:1600,height:600})));
    expect(screen.getByTestId("subscription-dropdown")).toBeInTheDocument();
  });
});
