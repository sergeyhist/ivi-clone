import axios from "axios";
import {IPerson} from "/src/types/IPerson";

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