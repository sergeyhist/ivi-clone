import { render } from "@testing-library/react";
import PhonesList from "/src/components/Layout/Footer/FooterButtons/PhonesList/PhonesList";

describe("PhonesList", () => {
  it("should renders without errors", () => {
    const { container } = render(<PhonesList />);
    expect(container).toBeDefined();
  });
});