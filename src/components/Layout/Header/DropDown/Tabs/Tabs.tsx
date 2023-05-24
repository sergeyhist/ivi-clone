import { FC } from "react";
import styles from "./Tabs.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getTabsHrefs } from "/src/components/Layout/Header/DropDown/Tabs/Tabs.utils";
import { mockTabs } from "/src/utils/mocks/tabs";

interface TabsProps {
  selectedGenre: DropDownType;
}

const Tabs: FC<TabsProps> = ({ selectedGenre }) => {
  const { t } = useTranslation("header");
  const translatedTabs: string[] = t(`tabs.${selectedGenre}`, {
    returnObjects: true,
  });
  const tabsArray = !Array.isArray(translatedTabs) ? mockTabs : translatedTabs;

  return (
    <div className={styles.tabs__container} data-testid="tabs">
      {tabsArray.map((tab, i) => {
        return (
          <Link key={i} href={getTabsHrefs(selectedGenre)[i]} target="_blank">
            <div className={styles.tabs__item}>{tab}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
