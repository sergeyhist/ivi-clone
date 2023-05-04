import axios from "axios";

export const getAllGenres = () => {
  return axios.get("http://85.237.34.125:4000/genres");
};

export const getAllCountries = () => {
  return axios.get("http://85.237.34.125:4000/countries");
};
