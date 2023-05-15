import { render, screen } from "@testing-library/react";
import NavigationLayout from "/src/components/Layout/Header/NavigationLayout/NavigationLayout";
import {Provider} from "react-redux";
import { store } from "/src/store";
import {setWindowSize} from "/src/store/slices/windowSizeSlice";

const setIsDropdownActive =jest.fn();
const setDropDownType =jest.fn();
describe("NavigationLayout", () => {
  it("should renders without errors", () => {
    render(
      <Provider store={store}>
        <NavigationLayout setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType}/>
      </Provider>
    );
    expect(screen.getByTestId("navigation-layout")).toBeInTheDocument();
  });
  it("should renders navigation if window size more than 1159px", () => {
    store.dispatch(setWindowSize({width: 1200,height:500}));
    render(
      <Provider store={store}>
        <NavigationLayout setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType}/>
      </Provider>
    );
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});