import React from "react";
import RelatedMovies from "./RelatedMovies";
import { mockMovie } from "/src/utils/movie";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("BannerSlider", () => {
  it("should render without errors", () => {
    renderWithProviders(<RelatedMovies movieTitle="title" movies={[mockMovie]} />);
  });
});
