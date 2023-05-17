import { render, screen } from "@testing-library/react";
import SubscriptionDropdown from "/src/components/Layout/Header/DropDown/SubscriptionDropdown/SubscriptionDropdown";

describe("SubscriptionDropDown", () => {
  it("should renders without errors", () => {
    render(<SubscriptionDropdown />);
    expect(screen.getByTestId("subscription-dropdown")).toBeInTheDocument();
  });
});