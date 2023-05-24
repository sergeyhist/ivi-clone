import Footer from "./Footer";
import { renderWithProviders } from "/src/utils/test-utils";
import { act } from "@testing-library/react";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";

describe("Footer widget", () => {
  test("should match to snapshot with width more than 1159", () => {
    const render = renderWithProviders(<Footer />);
    act(() =>
      render.store.dispatch(setWindowSize({ width: 1920, height: 1080 }))
    );
    expect(render.component.container).toMatchSnapshot();
  });

  test("should match to snapshot with width less than 1160px", () => {
    const render = renderWithProviders(<Footer />);
    act(() =>
      render.store.dispatch(setWindowSize({ width: 1159, height: 1080 }))
    );
    expect(render.component.container).toMatchSnapshot();
  });
});
