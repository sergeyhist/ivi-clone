import axios from "axios";
import { mockComment } from "/src/utils/comments";
import { createComment } from "/src/api/comments";

jest.mock("axios");
jest.mock("swr");

describe("Countries api", () => {
  test("getCountriesSlugs", async () => {
    (axios.request as jest.Mock).mockResolvedValue({
      data: mockComment,
    });

    const result = await createComment("test", "test", "text", "test", "token");

    expect(result).toEqual(mockComment);
  });

  test("getCountriesSlugs with undefined data", async () => {
    (axios.request as jest.Mock).mockRejectedValue(jest.fn());

    const result = await createComment("test", "test", "text", "test", "token");

    expect(result).toEqual(undefined);
  });
});
