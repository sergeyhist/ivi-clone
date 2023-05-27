import axios from "axios";
import {
  createUser,
  getUserByEmail,
  isUserAuthorized,
  login,
  logout,
  refreshAccessToken,
  ResponseWithToken,
} from "/src/api/user";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getUserByEmail", () => {
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

describe("login", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return the login response when successful", async () => {
    const mockResponse: ResponseWithToken = {
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
        "Access-Control-Allow-Credentials": true,
      },
      withCredentials: true,
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
        "Access-Control-Allow-Credentials": true,
      },
      withCredentials: true,
      data: JSON.stringify({
        email,
        password,
      }),
    });
  });
});

describe("createUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
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
  });
});

describe("logout", () => {
  it("should call axios.delete with the correct parameters", async () => {
    mockedAxios.delete.mockResolvedValueOnce({});

    await logout();

    expect(axios.delete).toHaveBeenCalledWith(
      `${String(process.env.SERVER_HOST)}/logout`,
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  });
  it("should log error if axios.delete throws an error", async () => {
    const error = new Error("Some error");
    mockedAxios.delete.mockRejectedValueOnce(error);

    await logout();

    expect(mockedAxios.delete).toHaveBeenCalledWith("undefined/logout", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  });
});

describe("refreshAccessToken", () => {
  it("should call axios.request with the correct parameters", async () => {
    const expectedConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/refresh`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const responseData = { token: "new-access-token" };
    mockedAxios.request.mockResolvedValueOnce({ data: responseData });

    const result = await refreshAccessToken();

    expect(mockedAxios.request).toHaveBeenCalledWith(expectedConfig);
    expect(result).toEqual(responseData);
  });
  it("should log error if axios.request throws an error", async () => {
    const error = new Error("Some error");
    mockedAxios.request.mockRejectedValueOnce(error);

    const result = await refreshAccessToken();

    expect(mockedAxios.request).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});

describe("isUserAuthorized", () => {
  it("should call axios.get with the correct parameters", async () => {
    const expectedUrl = `${String(process.env.SERVER_HOST)}/isauth`;
    const responseData = true;
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });

    const result = await isUserAuthorized();

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, {
      withCredentials: true,
    });
    expect(result).toEqual(responseData);
  });
  it("should log error if axios.get throws an error", async () => {
    const error = new Error("Some error");
    mockedAxios.get.mockRejectedValueOnce(error);

    const result = await isUserAuthorized();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
