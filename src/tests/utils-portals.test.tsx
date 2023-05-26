import createAppPortal from "/src/utils/createAppPortal";
import { isBrowser } from "../utils/isBrowser";
import { render } from "@testing-library/react";

jest.mock("src/utils/isBrowser");

describe("createAppPortal", () => {
  it("should render elem in __next", () => {
    (isBrowser as jest.Mock).mockImplementation(() => true);
    render(<div id="__next"></div>);
    expect(createAppPortal(<div>elem</div>)).not.toBe(null);
  });
  it("should return null", () => {
    (isBrowser as jest.Mock).mockImplementation(() => false);
    render(<div id="__next"></div>);
    expect(createAppPortal(<div>elem</div>)).toBe(null);
  });
});
