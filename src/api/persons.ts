import axios from "axios";
import { IPerson } from "/src/types/IPerson";
import useSWR, { SWRResponse } from "swr";

export const getPersonById = async (
  personId: string | string[] | undefined
): Promise<IPerson | undefined> => {
  try {
    const response = await axios.get(
      `http://85.237.34.125:4000/persons/${personId as string}`
    );
    return response.data as IPerson;
  } catch (err) {
    console.log(err);
  }
};

const getPersons = async (url: string): Promise<IPerson[]> => {
  const response = await axios.get(url);

  return response.data as IPerson[];
};

export const useGetActors = (): SWRResponse<IPerson[]> => {
  return useSWR(
    `${String(process.env.SERVER_HOST)}/name/persons?film_role=actor`,
    getPersons
  );
};

export const useGetDirectors = (): SWRResponse<IPerson[]> => {
  return useSWR(
    `${String(process.env.SERVER_HOST)}/name/persons?film_role=filmmaker`,
    getPersons
  );
};
