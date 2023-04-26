import { ReactNode } from "react";
import WidgetBanners from "./WidgetBanners/WidgetBanners";
import ILink from "/src/types/ILink";

export const widgetInitHandler = (
  items: ILink[],
  linksCount: number
): ReactNode[] => {
  const widgets: ReactNode[] = [];

  for (let i = 0; i < linksCount; i += 3) {
    widgets.push(
      <WidgetBanners
        key={i}
        isReverse={widgets.length % 2 !== 0}
        links={items.slice(i, i + 3)}
      />
    );
  }

  return widgets;
};
