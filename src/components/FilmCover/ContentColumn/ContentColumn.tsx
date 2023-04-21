import { FC } from "react";
import Raiting from "./Raiting/Raiting";
import DropDown from "./DropDown/DropDown";
import Medallions from "./Medallions/Medallions";
import Params from "./Params/Params";
import Title from "./Title/Title";
import styles from "./ContentColumn.module.sass";

const ContentColumn: FC = () => {
  return (
    <div className={styles.column}>
      <Title />

      <Params />

      <Medallions />

      <DropDown />

      <Raiting grade="8.9" title="Рейтинг Иви" category="Интересный сюжет" grades="143 908" />
    </div>
  );
};

export default ContentColumn;
