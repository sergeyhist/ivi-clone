import { render } from "@testing-library/react";
import FooterAsk from "/src/components/Layout/Footer/FooterAsk/FooterAsk";

describe("FooterAsk", () => {
  it("should renders without errors", () => {
    const { container } = render(<FooterAsk />);
    expect(container).toBeDefined();
  });
});