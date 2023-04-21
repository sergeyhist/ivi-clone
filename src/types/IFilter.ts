import { ReactNode } from "react";

export interface IFilter {
  slug: string;
  text: string;
}

export interface IFilterSlide extends IFilter {
  icon?: ReactNode;
}
