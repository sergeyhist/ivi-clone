import axios, { AxiosResponse } from "axios";

export const getSlides = async (): Promise<AxiosResponse> => {
  return axios.get("http://85.237.34.125:4000/filter/films?genres=komediya&rating=7.5");
};
