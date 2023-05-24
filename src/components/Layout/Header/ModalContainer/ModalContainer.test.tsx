import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import React from "react";
import ModalContainer from "/src/components/Layout/Header/ModalContainer/ModalContainer";
import {
  setShowAuthModal,
  setShowSearchModal,
} from "/src/store/slices/modalsSlice";

jest.mock("next/router", () => require("next-router-mock"));

describe("ModalContainer", () => {
  it("should render without errors", () => {
    render(
      <Provider store={store}>
        <div id="__next"></div>
        <ModalContainer />
      </Provider>
    );

    act(() => store.dispatch(setShowAuthModal(true)));
    act(() => store.dispatch(setShowSearchModal(true)));
    const authModal = screen.getByTestId("modal-container");
    const searchModal = screen.getByTestId("search-modal");
    const closeAuthButton = screen.getByTestId("close-auth-btn");
    const closeSearchButton = screen.getByTestId("close-search-btn");
    expect(authModal).toBeInTheDocument();
    expect(searchModal).toBeInTheDocument();
    fireEvent.click(closeAuthButton);
    fireEvent.click(closeSearchButton);
    expect(authModal).not.toBeInTheDocument();
    expect(searchModal).not.toBeInTheDocument();
    expect(store.getState().showModal.showAuthModal).toBeFalsy();
    expect(store.getState().showModal.showSearchModal).toBeFalsy();
  });
});
