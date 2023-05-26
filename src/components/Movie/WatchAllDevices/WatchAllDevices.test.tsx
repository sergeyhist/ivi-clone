import React from "react";
import WatchAllDevices from "./WatchAllDevices";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("WatchAllDevices", () => {
  it("should render without errors", () => {
    renderWithProviders(<WatchAllDevices movieTitle="title" imageUrl="url" />);
  });
});
