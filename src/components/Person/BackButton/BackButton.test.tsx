import { render } from "@testing-library/react";
import BackButton from "/src/components/Person/BackButton/BackButton";

jest.mock("next/router", () => require("next-router-mock"));

describe("BackButton", () => {
  it("should renders without errors", () => {
    const { container } = render(<BackButton />);
    expect(container).toBeDefined();
  });
});