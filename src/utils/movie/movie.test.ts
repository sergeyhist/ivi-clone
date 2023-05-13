import { mockMovie, getMovieName } from "./movie";

describe("movie getMovieName test", () => {
  it("Should display name_ru", () => {
    expect(getMovieName(mockMovie, "ru")).toEqual("Зеленая миля");
  });
  it("Should display name_en", () => {
    expect(getMovieName(mockMovie, "en")).toEqual("The Green Mile");
  });
});
