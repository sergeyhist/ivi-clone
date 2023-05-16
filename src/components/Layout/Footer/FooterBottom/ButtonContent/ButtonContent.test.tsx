import { render } from "@testing-library/react";
import ButtonContent from "/src/components/Layout/Footer/FooterBottom/ButtonContent/ButtonContent";

describe("ButtonContent", () => {
  it("renders the button content with an icon and bottom text", () => {
    const icon = <div data-testid="icon" />;
    const bottomText = "Bottom Text";

    const { getByTestId, getByText } = render(
      <ButtonContent icon={icon} bottomText={bottomText} />
    );

    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByText("Bottom Text")).toBeInTheDocument();
  });
  it("renders the button content with an icon, top text, and bottom text", () => {
    const icon = <div data-testid="icon" />;
    const topText = "Top Text";
    const bottomText = "Bottom Text";

    const { getByTestId, getByText } = render(
      <ButtonContent icon={icon} topText={topText} bottomText={bottomText} />
    );

    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByText("Top Text")).toBeInTheDocument();
    expect(getByText("Bottom Text")).toBeInTheDocument();
  });
});