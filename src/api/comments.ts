import axios from "axios";
import { IComment } from "../types/IComment";

export const createComment = async (
  film_id: string,
  user_id: string,
  text: string,
  parent_id: null | string,
  token: string
): Promise<IComment | undefined> => {
  try {
    const data = JSON.stringify({
      title: "About film",
      text: text,
      film_id: film_id,
      parent_id: parent_id,
      user_id: user_id,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/comments`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      data: data,
    };

    const response = await axios.request<IComment>(config);
    return response.data;
  } catch (error) {
    return undefined
  }
};
