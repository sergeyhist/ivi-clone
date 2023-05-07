import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./ListItem.module.sass";

interface ListItemProps {
  text: string;
  isActive: boolean;
  clickCallback: () => void;
}

const ListItem: FC<ListItemProps> = ({ text, isActive, clickCallback }) => {
  const { t } = useTranslation();

  const activeItem = isActive ? ` ${styles.item_active}` : "";
  const activeCheckbox = isActive ? ` ${styles.item__checkbox_active}` : "";

  return (
    <li onClick={clickCallback} className={styles.item + activeItem}>
      {t(text)}
      <span className={styles.item__checkbox + activeCheckbox}></span>
    </li>
  );
};

export default ListItem;
