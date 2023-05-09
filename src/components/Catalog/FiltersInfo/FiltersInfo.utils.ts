import { IFilters } from "/src/types/IFilter";
import { IPerson } from "/src/types/IPerson";

export const personFinder = (
  slug: string,
  filters: IFilters,
  persons: IPerson[]
): IPerson | undefined => {
  return filters[slug].length > 0
    ? persons.find(
        (person) =>
          person.first_name_en.toLowerCase() ===
            (filters[slug] as string).split("_")[0] &&
          person.last_name_en.toLowerCase() ===
            (filters[slug] as string).split("_")[1]
      )
    : undefined;
};

export const getPersonName = (person: IPerson, locale = "ru"): string => {
  return `${String(person[`first_name_${locale}`])} ${String(
    person[`last_name_${locale}`]
  )}`;
};
