import {fireEvent, render} from "@testing-library/react";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "/src/store/slices/filtersSlice";
import windowSizeSlice from "/src/store/slices/windowSizeSlice";
import modalsSlice from "/src/store/slices/modalsSlice";
import slugsSlice from "/src/store/slices/slugsSlice";
import personsSlice from "/src/store/slices/personsSlice";
import authSlice from "/src/store/slices/authSlice";

const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice,
    showModal: modalsSlice,
    slugs: slugsSlice,
    filters: filtersSlice,
    persons: personsSlice,
    auth: authSlice,
  },
});
jest.mock('next/router', () => require('next-router-mock'));
describe("MobileMenu",()=>{
  it("renders without errors", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MobileMenu />
      </Provider>
    );
    const container = getByTestId("mobile-menu-container");
    expect(container).toBeInTheDocument();
  });
  it("should render search modal after click on link", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MobileMenu/>
      </Provider>
    );
    const searchModalLink = getByTestId("mobile-menu-link-2");
    fireEvent.click(searchModalLink);
    expect(store.getState().showModal.showSearchModal).toBeTruthy();
  })
})