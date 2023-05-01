import { FC } from "react";
import styles from "./Tabs.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";

interface TabsProps {
  selectedGenre: DropDownType;
}

const Tabs: FC<TabsProps> = ({ selectedGenre }) => {
  const { t } = useTranslation("header");
  const translatedTabs: string[] = t(`tabs.${selectedGenre}`, {
    returnObjects: true,
  });

  return (
    <div className={styles.tabs__container}>
      {translatedTabs.map((tab, i) => {
        return (
          <div key={i} className={styles.tabs__item}>
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
