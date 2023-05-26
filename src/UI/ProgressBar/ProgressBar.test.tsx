import { act, screen, waitFor } from "@testing-library/react";
import React from "react";
import ProgressBar from "./ProgressBar";
import { renderWithProviders } from "/src/utils/test-utils";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("ProgressBar", () => {
  it("should renders without errors", () => {
    renderWithProviders(<ProgressBar value={50} />);
    expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
  });

  test("render progress bar with loading type", async () => {
    renderWithProviders(<ProgressBar type="loading" value={0} />);
    await act(() => mockRouter.push("/movies"));
    await waitFor(() =>
      expect(screen.getByTestId("progress-bar")).toBeInTheDocument()
    );
  });

  test("render fixed progress bar", async () => {
    renderWithProviders(
      <ProgressBar isFixed={true} type="loading" value={0} />
    );
    await act(() => mockRouter.push("/movies"));
    await waitFor(() =>
      expect(screen.getByTestId("progress-bar")).toBeInTheDocument()
    );
  });

  test("start loading progress", async () => {
    renderWithProviders(<ProgressBar type="loading" value={0} />);
    act(() => mockRouter.events.emit("routeChangeStart"));
    await waitFor(() =>
      expect(screen.getByTestId("progress-bar")).toBeInTheDocument()
    );
  });

  test("loading complete", async () => {
    renderWithProviders(<ProgressBar type="loading" value={0} />);
    act(() => mockRouter.events.emit("routeChangeStart"));
    await waitFor(() =>
      expect(screen.getByTestId("progress-bar")).toBeInTheDocument()
    );
    act(() => mockRouter.events.emit("routeChangeComplete"));
    await waitFor(() =>
      expect(screen.queryByTestId("progress-bar")).not.toBeInTheDocument()
    );
  });

  test("loading error", async () => {
    renderWithProviders(<ProgressBar type="loading" value={0} />);
    act(() => mockRouter.events.emit("routeChangeStart"));
    await waitFor(() =>
      expect(screen.getByTestId("progress-bar")).toBeInTheDocument()
    );
    act(() => mockRouter.events.emit("routeChangeError"));
    act(() => mockRouter.events.emit("routeChangeComplete"));
    await waitFor(() =>
      expect(screen.queryByTestId("progress-bar")).not.toBeInTheDocument()
    );
  });
});
