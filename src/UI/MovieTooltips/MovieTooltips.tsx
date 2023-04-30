import { FC } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./MovieToolTips.module.sass";
import { useTranslation } from "react-i18next";
import { buttonsId } from "/src/utils/movieCard";

const MovieTooltips: FC = () => {
  const { t } = useTranslation("tooltips");

  return (
    <>
      {buttonsId.map((id, index) => (
        <Tooltip key={index} className={styles.tooltip} id={id} place="top">
          <p>{t(`${id}`)}</p>
        </Tooltip>
      ))}
    </>
  );
};

export default MovieTooltips;
