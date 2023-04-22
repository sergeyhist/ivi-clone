import {FC, useState} from "react";
import styles from "./TabBar.module.sass";
import {iconsClassNames, tabsLinks} from "/src/components/TabBar/TabBar.utils";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "/src/hooks/redux";
import {setShowSearchModal} from "/src/store/slices/modalsSlice";

const TabBar: FC = () => {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleTabClick = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {
          iconsClassNames.map((iconClass, i) => {
            return (
              <a className={styles.content__item} onClick={() => {
                handleTabClick(i);
                i === 2 && dispatch(setShowSearchModal({showSearchModal: true}))
              }} key={i} href={i !== 2 ? tabsLinks[i] : undefined} target="_blank">
                <div className={`${styles.glow__image} ${activeTab === i ? styles.active : ''}`}></div>
                <div className={`${iconClass} ${activeTab === i ? styles.item_selected : ''}`}></div>
                <div className={`${styles.content__item__caption} ${activeTab === i ? styles.item_selected : ''}`}>
                  {t(`tabBar.links.${i}`)}
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default TabBar;
