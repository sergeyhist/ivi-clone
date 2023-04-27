import { FC } from "react";
import styles from "./SubscriptionDropdown.module.sass";
import { titlesIconsClassNames } from "/src/components/Header/DropDown/SubscriptionDropdown/SubscriptionDropdown.utils";
import { useTranslation } from "react-i18next";
import SlideshowWidget from "/src/UI/SlideshowWidget/SlideshowWidget";
import { slideshowItems } from "/src/utils/slideshowItems";
import Link from "next/link";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const SubscriptionDropdown: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content__left}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("header.subscriptionTitles.header.0")}
          </h2>
          <p>{t("header.subscriptionTitles.header.1")}</p>
        </div>
        <div className={styles.titles}>
          {titlesIconsClassNames.map((title, i) => (
            <div
              className={`${styles.item} ${i === 1 ? styles.item_long : ""}`}
              key={i}
            >
              <div className={`${title} ${styles.icon}`}></div>
              <div className={styles.text}>
                {t(`header.subscriptionTitles.titles.${i}`)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottom__content}>
          <Link href="https://www.ivi.ru/subscribe" target="_blank">
            <CustomButton className={styles.button} type="red">
              {t("header.freeSubscription")}
            </CustomButton>
          </Link>
          <div className={styles.hint}>
            {t("header.headerWidget.widgetHint")}
          </div>
        </div>
      </div>
      <div className={styles.content__rigth}>
        <SlideshowWidget
          scale={1.5}
          width={"332px"}
          isDark={true}
          items={slideshowItems}
          rowCount={4}
        />
      </div>
    </div>
  );
};

export default SubscriptionDropdown;
