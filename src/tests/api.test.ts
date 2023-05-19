import axios from "axios";
import {
  createUser,
  getUserByEmail,
  login,
  LoginResponse,
} from "/src/api/user";

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

  it("should return the login response when successful", async () => {
    const mockResponse: LoginResponse = {
      accessToken: "some-token",
    };
    const email = "test@example.com";
    const password = "test-password";
    mockedAxios.request.mockResolvedValueOnce({ data: mockResponse });

    const result = await login(email, password);

    expect(result).toEqual(mockResponse);
    expect(result).toEqual(mockResponse);
    expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    });
  });

  it("should return undefined when an error occurs", async () => {
    const email = "test@example.com";
    const password = "test-password";
    const errorMessage = "Login failed";
    const result = await login(email, password);

    mockedAxios.request.mockRejectedValueOnce(new Error(errorMessage));

    expect(result).toBeUndefined();
    expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    });
  });
  it("should send a request to create a user", async () => {
    const email = "test@example.com";
    const password = "test-password";

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    };

    await createUser(email, password);

    expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    expect(mockedAxios.request).toHaveBeenCalledWith(config);
  });
  it("should log an error when an error occurs", async () => {
    const email = "test@example.com";
    const password = "test-password";
    const errorMessage = "User creation failed";

    mockedAxios.request.mockRejectedValueOnce(new Error(errorMessage));
    const consoleSpy = jest.spyOn(console, "log");

    await createUser(email, password);

    expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    });
    expect(consoleSpy).toHaveBeenCalledWith(new Error(errorMessage));
  });
});
