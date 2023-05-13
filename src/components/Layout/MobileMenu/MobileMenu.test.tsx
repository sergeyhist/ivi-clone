import {fireEvent, render, screen} from "@testing-library/react";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";
import {Provider} from "react-redux";
import { store } from "/src/store";
import userEvent from "@testing-library/user-event";
import Layout from "/src/components/Layout/Layout";
import Movie from "/src/pages/movies/[id]";

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
    expect(screen.getByTestId("search-modal")).toBeInTheDocument();
  })
})