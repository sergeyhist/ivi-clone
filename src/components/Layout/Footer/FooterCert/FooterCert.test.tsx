import FooterCert from "./FooterCert";
import { renderWithProviders } from "/src/utils/test-utils";

describe("Footer cert", () => {
  test("should renders without errors", () => {
    const render = renderWithProviders(<FooterCert />);
    expect(render.component.container).toMatchSnapshot();
  });
});
