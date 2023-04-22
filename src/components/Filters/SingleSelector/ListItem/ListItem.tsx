import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ListItem.module.sass";

interface ListItemProps {
  slug: string;
  text: string;
  isActive: boolean;
  clickCallback: () => void;
}

const ListItem: FC<ListItemProps> = ({
  slug,
  text,
  isActive,
  clickCallback,
}) => {
  const { t } = useTranslation();

  const activeItem = isActive ? ` ${styles.item_active}` : "";
  const activeCheckbox = isActive ? ` ${styles.item__checkbox_active}` : "";

  return (
    <li onClick={clickCallback} className={styles.item + activeItem}>
      {text ? t(text) : slug}
      <div className={styles.item__checkbox + activeCheckbox}>
        <div></div>
      </div>
    </li>
  );
};

export default ListItem;
