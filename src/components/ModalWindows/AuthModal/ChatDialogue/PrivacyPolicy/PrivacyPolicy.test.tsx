import { render } from "@testing-library/react";
import PrivacyPolicy from "/src/components/ModalWindows/AuthModal/ChatDialogue/PrivacyPolicy/PrivacyPolicy";

describe("PrivacyPolicy", () => {
  it("should renders without errors", () => {
    const { getByTestId } = render(<PrivacyPolicy />);
    expect(getByTestId("privacy-policy")).toBeInTheDocument();
  });
});