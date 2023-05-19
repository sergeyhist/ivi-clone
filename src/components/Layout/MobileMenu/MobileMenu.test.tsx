import { fireEvent, screen } from "@testing-library/react";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MobileMenu", () => {
  it("renders without errors", () => {
    renderWithProviders(<MobileMenu />);
    const container = screen.getByTestId("mobile-menu-container");
    expect(container).toBeInTheDocument();
  });
  it("should change showSearchModal store state to true", () => {
    const { store } = renderWithProviders(<MobileMenu />);
    const searchModalLink = screen.getByTestId("mobile-menu-link-2");
    fireEvent.click(searchModalLink);
    expect(store.getState().showModal.showSearchModal).toBeTruthy();
  });
});
