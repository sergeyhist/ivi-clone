import FooterWidget from "./FooterWidget";
import { renderWithProviders } from "/src/utils/test-utils";

describe("Footer widget", () => {
  test("should renders without errors", () => {
    const { container } = renderWithProviders(<FooterWidget />);
    expect(container).toMatchSnapshot();
  });
});
