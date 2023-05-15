import { render, screen } from "@testing-library/react";
import NotificationDropDown from "/src/components/Layout/Header/DropDown/NotificationDropdown/NotificationDropDown";

describe("NotificationDropDown", () => {
  it("should render without errors", () => {
    render(<NotificationDropDown />);
    expect(screen.getByTestId("notification-dropdown")).toBeInTheDocument();
  });
});