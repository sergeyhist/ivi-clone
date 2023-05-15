import {fireEvent, screen, render} from "@testing-library/react";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";
import {Provider} from "react-redux";
import {store} from "/src/store";
import {beforeEach} from "node:test";

jest.mock('next/router', () => require('next-router-mock'));

describe("MobileMenu",()=>{
  beforeEach(()=>{
    render(
      <Provider store={store}>
        <MobileMenu />
      </Provider>
    );
  });

  test("renders without errors", () => {
    const container = screen.getByTestId("mobile-menu-container");
    expect(container).toBeInTheDocument();
  });
  test("should change showSearchModal store state to true", () => {
    const searchModalLink = screen.getByTestId("mobile-menu-link-2");
    fireEvent.click(searchModalLink);
    expect(store.getState().showModal.showSearchModal).toBeTruthy();
  })
})