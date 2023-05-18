import Footer from "./Footer";
import { renderWithProviders } from "/src/utils/test-utils";
import { act } from "@testing-library/react";
import { store } from "/src/store";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";

describe("Footer widget", () => {
  test("should match to snapshot with width more than 1159", () => {
    act(() => store.dispatch(setWindowSize({ width: 1920, height: 1080 })));
    const { container } = renderWithProviders(<Footer />);
    expect(container).toMatchSnapshot();
  });

  test("should match to snapshot with width less than 1160px", () => {
    act(() => store.dispatch(setWindowSize({ width: 1159, height: 1080 })));
    const { container } = renderWithProviders(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
