import { FC } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./MovieToolTips.module.sass";

const MovieTooltips: FC = () => {
  return <Tooltip className={styles.tooltip} id={"movie-tooltip"} />;
};

export default MovieTooltips;
