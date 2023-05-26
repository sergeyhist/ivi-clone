import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import FooterList from "./FooterList";
import { topLeftLinks } from "../FooterTop/FooterTop.utils";

describe("Footer list", () => {
  beforeEach(() => {
    renderWithProviders(<FooterList items={topLeftLinks} />);
  });

  test("should renders without errors", () => {
    expect(screen.getByTestId("footer-list")).toBeInTheDocument();
  });
});
