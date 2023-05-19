import axios from "axios";
import { getUserByEmail } from "/src/api/userApi";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("userApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch user by email successfully", async () => {
    const email = "test@example.com";
    const userData = { id: 1, name: "John Doe", email };

    mockedAxios.get.mockResolvedValueOnce({ data: userData });

    const result = await getUserByEmail(email);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${String(process.env.SERVER_HOST)}/users/${email}`
    );
    expect(result).toEqual(userData);
  });

  it("should handle error and return undefined", async () => {
    const email = "test@example.com";
    const error = new Error("Request failed");

    mockedAxios.get.mockRejectedValueOnce(error);

    const result = await getUserByEmail(email);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${String(process.env.SERVER_HOST)}/users/${email}`
    );
    expect(result).toBeUndefined();
  });
});
