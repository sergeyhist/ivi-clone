import {FC, useState} from "react";
import styles from "./MobileMenu.module.sass";
import {iconsClassNames, tabsLinks} from "/src/components/MobileMenu/MobileMenu.utils";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "/src/hooks/redux";
import {setShowModal} from "/src/store/slices/modalsSlice";

const MobileMenu: FC = () => {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const showModal = useAppSelector((state) => state.showModal);
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
                i === 2 && dispatch(setShowModal({...showModal,showSearchModal: true}))
              }} key={i} href={i !== 2 ? tabsLinks[i] : undefined} target={i!== 0 && "_blank" || undefined}>
                <div className={`${styles.glow__image} ${activeTab === i ? styles.active : ''}`}></div>
                <div className={`${iconClass} ${styles.icon} ${activeTab === i ? styles.item_selected : ''}`}></div>
                <div className={`${styles.content__item__caption} ${activeTab === i ? styles.item_selected : ''}`}>
                  {t(`mobileMenu.links.${i}`)}
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default MobileMenu;
