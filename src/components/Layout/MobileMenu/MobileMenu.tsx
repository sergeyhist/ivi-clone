import { FC, useState, MouseEvent } from "react";
import styles from "./MobileMenu.module.sass";
import { iconsClassNames, tabsLinks } from "./MobileMenu.utils";
import { useTranslation } from "next-i18next";
import { useAppDispatch } from "/src/hooks/redux";
import Link from "next/link";
import { setShowSearchModal } from "/src/store/slices/modalsSlice";

const MobileMenu: FC = () => {
  const { t } = useTranslation("mobileMenu");
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleTabClick = (e: MouseEvent, index: number): void => {
    if (index === 2) {
      e.preventDefault();
      dispatch(setShowSearchModal(true));
    }
    setActiveTab(index);
  };

  return (
    <div className={styles.container} data-testid="mobile-menu-container">
      <div className={styles.content}>
        {iconsClassNames.map((iconClass, i) => {
          return (
            <Link
              className={styles.content__item}
              onClick={(e) => {
                handleTabClick(e, i);
              }}
              key={i}
              href={tabsLinks[i]}
              target={(i !== (0 || 1) && "_blank") || undefined}
              data-testid={`mobile-menu-link-${i}`}
            >
              <div
                className={`${styles.glow__image} ${
                  activeTab === i ? styles.active : ""
                }`}
                data-testid="glow-image"
              ></div>
              <div
                className={`${iconClass} ${styles.icon} ${
                  activeTab === i ? styles.item_selected : ""
                }`}
                data-testid="icon"
              ></div>
              <div
                className={`${styles.content__item__caption} ${
                  activeTab === i ? styles.item_selected : ""
                }`}
                data-testid="caption"
              >
                {t(`links.${i}`)}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
