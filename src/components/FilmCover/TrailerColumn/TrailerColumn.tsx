import { FC } from "react";
import Trailer from "./Trailer/Trailer";
import TrailerButtons from "./TrailerButtons/TrailerButtons";
import styles from "./TrailerColumn.module.sass";

const TrailerColumn: FC = () => {
  return (
    <div className={styles.column}>
      <Trailer />
      <TrailerButtons />
    </div>
  );
};

export default TrailerColumn;
