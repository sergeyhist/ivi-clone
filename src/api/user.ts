import axios from "axios";
import { IUser } from "/src/types/IUser";

export const createUser = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios.request(config);
  } catch (err) {
    return;
  }
};

export const getUserByEmail = async (
  email: string
): Promise<IUser | undefined> => {
  try {
    const response = await axios.get<IUser>(
      `${String(process.env.SERVER_HOST)}/users/${email}`
    );
    return response.data;
  } catch (err) {
    return undefined;
  }
};

export interface ResponseWithToken {
  accessToken: string;
}

export const login = async (
  email: string,
  password: string
): Promise<ResponseWithToken | undefined> => {
  try {
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/login`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      withCredentials: true,
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  } catch (err) {
    return undefined;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await axios.delete(`${String(process.env.SERVER_HOST)}/logout`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return;
  }
};

export interface RefreshResponse extends ResponseWithToken {
  email: string;
}

export const refreshAccessToken = async (): Promise<
  RefreshResponse | undefined
> => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/refresh`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const response = await axios.request(config);

    return response.data;
  } catch (err) {
    return undefined;
  }
};

export const isUserAuthorized = async (): Promise<boolean | undefined> => {
  try {
    const response = await axios.get(
      `${String(process.env.SERVER_HOST)}/isauth`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (err) {
    return undefined;
  }
};
