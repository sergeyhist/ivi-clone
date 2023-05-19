import axios from "axios";
import { IUser } from "/src/types/IUser";

export const createUser = async (email: string, password: string): Promise<void> => {
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
    console.log(err);
  }
};

export const getUserByEmail = async (email: string): Promise<IUser | undefined> => {
  try {
    const response = await axios.get<IUser>(
      `${String(process.env.SERVER_HOST)}/users/${email}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export interface LoginResponse {
  accessToken: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | undefined> => {
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
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
