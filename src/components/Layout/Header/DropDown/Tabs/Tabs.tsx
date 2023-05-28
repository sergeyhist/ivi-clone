import { FC } from "react";
import styles from "./Tabs.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getTabsHrefs } from "/src/components/Layout/Header/DropDown/Tabs/Tabs.utils";

interface TabsProps {
  selectedGenre: DropDownType;
}

const Tabs: FC<TabsProps> = ({ selectedGenre }) => {
  const { t } = useTranslation("header");
  const tabsHrefs = getTabsHrefs(selectedGenre);

  return (
    <div className={styles.tabs__container} data-testid="tabs">
      {tabsHrefs.map((href, i) => {
        return (
          <Link key={i} href={href} target="_blank">
            <div className={styles.tabs__item}>{t(`tabs.${selectedGenre}.${i}`)}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
