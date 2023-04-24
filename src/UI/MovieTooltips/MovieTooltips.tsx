import { FC } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./MovieToolTips.module.sass";

const FilmsTooltips: FC = () => {
  return (
    <>
      <Tooltip className={styles.tooltip} id="save" place="top">
        <p>Смотреть позже</p>
      </Tooltip>
      <Tooltip className={styles.tooltip} id="similar" place="top">
        <p>Похожее</p>
      </Tooltip>
      <Tooltip className={styles.tooltip} id="favorite" place="top">
        <p>Уже смотрел, оценить</p>
      </Tooltip>
      <Tooltip className={styles.tooltip} id="block" place="top">
        <p>Не нравится такое</p>
      </Tooltip>
    </>
  );
};

export default FilmsTooltips;
