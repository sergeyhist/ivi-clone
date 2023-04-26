import { ReactNode } from "react";

export interface IFilter {
  slug: string;
  text: string;
}

export interface IFilterSlide extends IFilter {
  icon?: ReactNode;
}

export interface IActiveFilters {
  [key: string]: IFilter | IFilter[];
  genre: IFilter[];
  country: IFilter[];
  year: IFilter;
  rating: IFilter;
  ratingCount: IFilter;
  actor: IFilter;
  director: IFilter;
}
