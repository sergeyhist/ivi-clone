import { fireEvent, screen } from "@testing-library/react";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";
import { store } from "/src/store";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MobileMenu", () => {
  beforeEach(() => {
    renderWithProviders(<MobileMenu />);
  });

  test("renders without errors", () => {
    const container = screen.getByTestId("mobile-menu-container");
    expect(container).toBeInTheDocument();
  });
  test("should change showSearchModal store state to true", () => {
    const searchModalLink = screen.getByTestId("mobile-menu-link-2");
    fireEvent.click(searchModalLink);
    expect(store.getState().showModal.showSearchModal).toBeTruthy();
  });
});
