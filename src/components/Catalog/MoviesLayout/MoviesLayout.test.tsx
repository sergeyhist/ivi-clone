import { render } from "@testing-library/react";
import MoviesLayout from "./MoviesLayout";

describe("Movies layout component", () => {
  test("layout rendered correctly", () => {
    const { container } = render(<MoviesLayout>test</MoviesLayout>);

    expect(container).toMatchSnapshot();
  });
});
