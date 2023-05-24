import { fireEvent, screen } from "@testing-library/react";
import MobileMenu from "/src/components/Layout/MobileMenu/MobileMenu";
import { renderWithProviders } from "/src/utils/test-utils";
import {getLinkIndex} from "/src/components/Layout/MobileMenu/MobileMenu.utils";

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
  it("should contain proper class names after click",()=>{
    renderWithProviders(<MobileMenu />);
    const thirdLink = screen.getByTestId("mobile-menu-link-3");
    const glowImage = screen.getAllByTestId("glow-image")[3];
    const icon = screen.getAllByTestId("icon")[3];
    const caption = screen.getAllByTestId("caption")[3];
    fireEvent.click(thirdLink);
    expect(glowImage).toHaveClass("active");
    expect(icon).toHaveClass("item_selected ");
    expect(caption).toHaveClass("item_selected");
  });
  it("should return correct values",()=>{
    expect(getLinkIndex("/")).toBe(0);
    expect(getLinkIndex("test/movies")).toBe(1);
    expect(getLinkIndex("example.com")).toBeNull();
  })
});
