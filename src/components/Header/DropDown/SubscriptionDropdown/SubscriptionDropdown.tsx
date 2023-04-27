import {FC} from "react";
import styles from "./SubscriptionDropdown.module.sass";
import {titlesIconsClassNames} from "/src/components/Header/DropDown/SubscriptionDropdown/SubscriptionDropdown.utils";
import {useTranslation} from "react-i18next";
import SlideshowWidget from "/src/UI/SlideshowWidget/SlideshowWidget";
import {slideshowItems} from "/src/utils/slideshowItems";

const SubscriptionDropdown:FC = () => {
  const {t} = useTranslation();

  return(
    <div className={styles.container}>
      <div className={styles.content__left}>
        <div className={styles.header}>
          <h2 className={styles.title}>Подписка Иви</h2>
          <p>Стоимость 399 ₽ в месяц, продление автоматическое</p>
        </div>
        <div className={styles.titles}>
          {titlesIconsClassNames.map((title,i)=>
            <div className={`${styles.item} ${i === 1 ? styles.item_long : ""}`} key={i}>
              <div className={`${title} ${styles.icon}`} ></div>
              <div className={styles.text}>{t(`header.subscriptionTitles.${i}`)}</div>
            </div>
          )
          }
        </div>
      </div>
     <div className={styles.content__rigth}>
       <SlideshowWidget items={slideshowItems} rowCount={4}/>
     </div>
    </div>
  )
}

export default SubscriptionDropdown;
