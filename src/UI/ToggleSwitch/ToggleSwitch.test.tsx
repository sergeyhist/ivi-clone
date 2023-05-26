import { act, fireEvent, render } from "@testing-library/react";
import ToggleSwitch from "/src/UI/ToggleSwitch/ToggleSwitch";
import React from "react";

jest.mock("next/router", () => require("next-router-mock"));

describe("ToggleSwitch", () => {
  const leftContent = "left";
  const rightContent = "right";
  const clickCallback = jest.fn();
  const dataTestId = "toggle-switch";

  it("should renders without errors", () => {
    const { getByTestId } = render(
      <ToggleSwitch
        leftContent={leftContent}
        rightContent={rightContent}
        clickCallback={clickCallback}
        scale={"1"}
        className="test"
        dataTestId={dataTestId}
      />
    );
    const switchToggle = getByTestId("toggle-switch");

    expect(switchToggle).toBeInTheDocument();
    expect(switchToggle).toHaveClass("test");
  });
  it("should render with default values and toggle to the right when clicked", () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <ToggleSwitch
        leftContent={leftContent}
        rightContent={rightContent}
        clickCallback={clickCallback}
        dataTestId={dataTestId}
      />
    );

    const toggleSwitch = getByTestId("toggle-switch");
    const toggleButton = getByTestId("toggle-button");
    const toggleLeft = getByTestId("toggle-left");
    const toggleRight = getByTestId("toggle-right");

    act(() => jest.runAllTimers());

    expect(toggleSwitch).toBeInTheDocument();
    expect(toggleSwitch).toHaveClass("toggle");
    expect(toggleButton).toHaveClass("toggle__button_left");
    expect(toggleLeft).toHaveTextContent(leftContent);
    expect(toggleRight).toHaveTextContent(rightContent);

    fireEvent.click(toggleSwitch);
    expect(toggleButton).toHaveClass('toggle__button_right');

    fireEvent.click(toggleSwitch);
    expect(toggleButton).toHaveClass('toggle__button_left');
  });
});
