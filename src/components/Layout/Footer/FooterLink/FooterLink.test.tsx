import { renderWithProviders } from "/src/utils/test-utils";
import { topLeftLinks } from "../FooterTop/FooterTop.utils";
import FooterLink from "./FooterLink";

describe("Footer link", () => {
  test("should renders without errors", () => {
    const render = renderWithProviders(
      <FooterLink {...topLeftLinks[0]} />
    );
    expect(render.component.container).toMatchSnapshot();
  });
});
