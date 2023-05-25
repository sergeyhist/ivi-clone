import { FC } from "react";
import styles from "./ListItem.module.sass";

interface ListItemProps {
  slug: string;
  text: string;
  isActive: boolean;
  clickCallback: () => void;
}

const ListItem: FC<ListItemProps> = ({ text, isActive, clickCallback }) => {
  const activeItem = isActive ? ` ${styles.item_active}` : "";
  const activeCheckbox = isActive ? ` ${styles.item__checkbox_active}` : "";

  return (
    <li
      data-testid="list-item"
      onClick={clickCallback}
      className={styles.item + activeItem}
    >
      {text}
      <div className={styles.item__checkbox + activeCheckbox}>
        <div className={styles.item__point}></div>
      </div>
    </li>
  );
};

export default ListItem;
