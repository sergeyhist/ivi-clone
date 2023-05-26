import FooterCopyright from "./FooterCopyright";
import { renderWithProviders } from "/src/utils/test-utils";
import { act, screen } from "@testing-library/react";
import { store } from "/src/store";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";

describe("Footer copyright", () => {
  beforeEach(() => {
    renderWithProviders(<FooterCopyright />);
  });
  test("should renders without errors", () => {
    expect(screen.getByTestId("copyright")).toBeInTheDocument();
  });

  test("render with width more than 1159px", () => {
    act(() => store.dispatch(setWindowSize({ width: 1920, height: 1080 })));
    expect(screen.getByTestId("copyright")).toMatchSnapshot();
  });

  test("render with width less than 1160px", () => {
    act(() => store.dispatch(setWindowSize({ width: 1159, height: 1080 })));
    expect(screen.getByTestId("copyright")).toMatchSnapshot();
  });
});
