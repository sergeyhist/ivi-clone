import { fireEvent, render } from "@testing-library/react";
import ToggleSwitch from "/src/UI/ToggleSwitch/ToggleSwitch";
import React from "react";

describe("ToggleSwitch", () => {
  const leftContent = "left";
  const rightContent = "right";
  const clickCallback = jest.fn();
  const dataTestId = "toggle-switch";
  it("should renders without errors", () => {
    const { container, getByTestId } = render(
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

    expect(container).toBeDefined();
    expect(switchToggle).toHaveClass("test");
  });
  it("should render with default values and toggle to the right when clicked", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
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

    expect(toggleSwitch).toBeInTheDocument();
    expect(toggleSwitch).toHaveClass("toggle");
    expect(toggleButton).toHaveClass("toggle__button_left");
    expect(toggleLeft).toHaveTextContent(leftContent);
    expect(toggleRight).toHaveTextContent(rightContent);

    fireEvent.click(toggleSwitch);

    expect(setStateMock).toHaveBeenCalledTimes(2);
  });
});
