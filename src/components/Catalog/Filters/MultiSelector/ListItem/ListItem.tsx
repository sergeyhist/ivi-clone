import { FC } from "react";
import styles from "./ListItem.module.sass";

interface ListItemProps {
  text: string;
  isActive: boolean;
  clickCallback: () => void;
}

const ListItem: FC<ListItemProps> = ({ text, isActive, clickCallback }) => {
  const activeItem = isActive ? ` ${styles.item_active}` : "";
  const activeCheckbox = isActive ? ` ${styles.item__checkbox_active}` : "";

  return (
    <li data-testid="list-item" onClick={clickCallback} className={styles.item + activeItem}>
      {text}
      <span className={styles.item__checkbox + activeCheckbox}></span>
    </li>
  );
};

export default ListItem;
