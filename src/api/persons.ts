import axios from "axios";
import { IPerson } from "/src/types/IPerson";
import useSWR, { SWRResponse } from "swr";
import { actorsList } from "../utils/mocks/actors";

export const getPersonById = async (
  personId: string | string[] | undefined
): Promise<IPerson | undefined> => {
  try {
    const response = await axios.get(
      `${String(process.env.SERVER_HOST)}/persons/${personId as string}`
    );
    return response.data as IPerson;
  } catch (err) {
    return actorsList[0];
  }
};

export const getPersons = async (url: string): Promise<IPerson[]> => {
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
