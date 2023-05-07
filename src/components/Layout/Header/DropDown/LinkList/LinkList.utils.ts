import { DropDownType } from "/src/components/Layout/Header/Header.utils";
import { TFunction } from "i18next";

export const sortSlugs = (
  list: string[],
  order: DropDownType[],
  selectedGenre: DropDownType
): string[] => {
  return [...list].sort((a, b) =>
    a[order.indexOf(selectedGenre)] > b[order.indexOf(selectedGenre)] ? 1 : -1
  );
};

export const localizeAndLimitList = (
  list: string[],
  prefix: string,
  limit: number,
  t: TFunction
): string[] => {
    return list
      .map((slug) => {
        return t(`${prefix}:${slug}`);
      })
      .slice(0, limit);
};

export const makeLinksFromSlugs = (list:string[],referLink:string): string[] =>{
  return list.map((slug)=>{
    return `${referLink}=${slug}`
  })
}
