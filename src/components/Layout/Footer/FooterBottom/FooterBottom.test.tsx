import { fireEvent, render } from "@testing-library/react";
import FooterBottom from "/src/components/Layout/Footer/FooterBottom/FooterBottom";
import {
  bottomLeftLinks,
  bottomRightLinks,
} from "/src/components/Layout/Footer/FooterBottom/FooterBottom.utils";

jest.mock("next/router", () => require("next-router-mock"));
window.open = jest.fn();

describe("FooterBottom", () => {
  it("should renders without errors", () => {
    const { getByTestId } = render(<FooterBottom />);
    expect(getByTestId("footer-bottom")).toBeInTheDocument();
  });
  it("navigates to the link URL", () => {
    const { getByText } = render(<FooterBottom />);
    const openSpy = jest.spyOn(window, "open");
    fireEvent.click(getByText("appstore"));

    expect(openSpy).toHaveBeenCalledWith(bottomLeftLinks[0].url);
  });
  it("opens the link URL in a new tab using window.open when the link has target=_blank", () => {
    const { getByTestId } = render(<FooterBottom />);
    const openSpy = jest.spyOn(window, "open");
    fireEvent.click(getByTestId("link-0"));

    expect(openSpy).toHaveBeenCalledWith(bottomRightLinks[0].url);
  });
});
