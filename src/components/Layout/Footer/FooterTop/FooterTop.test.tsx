import { renderWithProviders } from "/src/utils/test-utils";
import FooterTop from "./FooterTop";

describe("Footer top", () => {
  test("should renders without errors", () => {
    const { container } = renderWithProviders(<FooterTop />);
    expect(container).toMatchSnapshot();
  });
});
