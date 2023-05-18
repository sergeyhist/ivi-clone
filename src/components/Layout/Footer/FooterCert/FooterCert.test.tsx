import FooterCert from "./FooterCert";
import { renderWithProviders } from "/src/utils/test-utils";

describe("Footer cert", () => {
  test("should renders without errors", () => {
    const { container } = renderWithProviders(<FooterCert />);
    expect(container).toBeDefined();
  });
});
