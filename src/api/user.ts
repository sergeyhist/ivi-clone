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
      },
      withCredentials: true,
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async ():Promise<void> =>{
  try {
    axios.defaults.withCredentials = true
    await axios.delete(`${String(process.env.SERVER_HOST)}/logout`,{
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    });
  }catch (err){
    console.log(err);
  }
}

export const refreshAccessToken = async (): Promise<ResponseWithToken | undefined> => {
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
    if(response.status === 201){
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const token = response.data.accessToken as string;
      console.log(token);
      localStorage.setItem("token", token);
    } else if (response.status === 401){
      localStorage.removeItem("token");
    }

    return response.data;
  }catch (err){
    console.log(err);
  }
}
