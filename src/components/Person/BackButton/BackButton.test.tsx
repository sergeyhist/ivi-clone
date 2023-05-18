import { fireEvent, render, screen } from "@testing-library/react";
import BackButton from "/src/components/Person/BackButton/BackButton";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("BackButton", () => {
  it("should renders without errors", () => {
    const { container } = render(<BackButton />);
    expect(container).toBeDefined();
  });

  it("should call router push after click", () => {
    const back = jest.spyOn(mockRouter, "back");
    render(<BackButton />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(back).toHaveBeenCalled();
  });
});
