import { render, screen } from "@testing-library/react";
import BottomInfo from "/src/components/Layout/Header/HeaderWidget/WidgetBottom/BottomInfo/BottomInfo";

describe("BottomInfo", () => {
  it("should render without errors", () => {
    render(<BottomInfo />);
    expect(screen.getByTestId("bottom-info")).toBeInTheDocument();
  });
});