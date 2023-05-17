import { IPerson } from "/src/types/IPerson";

const searchFields = [
  "first_name_en",
  "first_name_ru",
  "last_name_en",
  "last_name_ru",
];

const searchHandler = (person: IPerson, query: string): boolean => {
  return (
    query.length > 1 &&
    searchFields.reduce((result: boolean, field: string) => {
      return (person[field] as string)
        .toLowerCase()
        .includes(query.toLowerCase())
        ? (result = true)
        : result;
    }, false)
  );
};

export const getPersons = (list: IPerson[], query: string): IPerson[] => {
  if (query.includes(" ")) {
    return list.filter((person) =>
      query.split(" ").reduce((result, text) => {
        return searchHandler(person, text) ? (result = true) : result;
      }, false)
    );
  } else {
    return list.filter((person) => searchHandler(person, query));
  }
};

export const getPersonNameBySlug = (
  list: IPerson[],
  slug: string,
  locale: string
): string => {
  const person = slug.length > 0 && list.find(
    (person) =>
      person.first_name_en.toLowerCase() === slug.split("_")[0] &&
      person.last_name_en.toLowerCase() === slug.split("_")[1]
  );

  return person
    ? `${String(person[`first_name_${locale}`])} ${String(
        person[`last_name_${locale}`]
      )}`
    : "";
};
