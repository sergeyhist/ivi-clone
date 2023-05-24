import { IPerson } from "/src/types/IPerson";

export const getPersonFirstName = (person: IPerson, locale = "en"): string => {
  return String(person["first_name_" + locale]);
};

export const getPersonLastName = (person: IPerson, locale = "en"): string => {
  return String(person["last_name_" + locale]);
};

export const getPersonRole = (person: IPerson): string => {
  return person.filmRoles[0].slug;
};
