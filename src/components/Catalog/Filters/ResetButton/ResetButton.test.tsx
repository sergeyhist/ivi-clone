import { fireEvent } from "@testing-library/react";
import ResetButton from "./ResetButton";
import { IProviderRender } from "/src/types/IRender";
import { renderWithProviders } from "/src/utils/test-utils";

describe("Reset button component", () => {
  let render: IProviderRender;
  const fakeClick = jest.fn();

  beforeEach(() => {
    render = renderWithProviders(
      <ResetButton text="test" textPosition="left" clickCallback={fakeClick} />
    );
  });

  test("component has been rendered correctlty", () => {
    expect(
      render.component.getByTestId("reset-all-button")
    ).toBeInTheDocument();
  });

  test("click callabck has been called", () => {
    fireEvent.click(render.component.getByTestId("reset-all-button"));
    expect(fakeClick).toHaveBeenCalledTimes(1);
  });
});
