import { fireEvent, render, screen } from "@testing-library/react";
import WidgetBottom from "/src/components/Layout/Header/HeaderWidget/WidgetBottom/WidgetBottom";
import styles from "./WidgetBottom.module.sass";

describe("WidgetBottom", () => {
  it("should render without errors", () => {
    render(<WidgetBottom isBottomActive={true} />);
    expect(screen.getByTestId("bottom-info")).toBeInTheDocument();
  });

  it("should open subscription link on button click", () => {
    window.open = jest.fn();
    render(<WidgetBottom isBottomActive={true} />);
    const button = screen.getByTestId("buy-button");

    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(
      "https://www.ivi.ru/profile/subscription"
    );
  });

  it("should apply active class when isBottomActive prop is true", () => {
    const isBottomActive = true;
    const expectedClassName = `${styles.bottom} ${styles.bottom_active}`;

    render(<WidgetBottom isBottomActive={isBottomActive} />);
    const bottomElement = screen.getByTestId("widget-bottom");

    expect(bottomElement).toHaveClass(expectedClassName);
  });

  it("should not apply styles.bottom_active class if isBottomActive prop is false", () => {
    const isBottomActive = false;
    const expectedClassName = styles.bottom;

    render(<WidgetBottom isBottomActive={isBottomActive} />);
    const bottomElement = screen.getByTestId("widget-bottom");

    expect(bottomElement).toHaveClass(expectedClassName);
  });
});
