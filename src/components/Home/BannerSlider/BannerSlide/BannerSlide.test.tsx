import React from "react";
import BannerSlide from "./BannerSlide";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { slides } from "../BannerSlider.utils";
import { SwiperSlide } from "swiper/react";
import { getClassName } from "./BannerSlide.utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("BannerSlider", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <SwiperSlide>
        <BannerSlide slide={slides[0]} />
      </SwiperSlide>
    );
    expect(screen.getByTestId("banner-slide")).toHaveClass("slide_hidden");
  });
});

describe("BannerSlider", () => {
  it("should renders without errors", () => {
    expect(getClassName(false)).toMatch(/slide_hidden/);
    expect(getClassName(true)).not.toMatch(/slide_hidden/);
  });
});
