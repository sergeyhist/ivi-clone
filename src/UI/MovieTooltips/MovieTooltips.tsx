import { FC } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./MovieToolTips.module.sass";
import { useTranslation } from "react-i18next";

const FilmsTooltips: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Tooltip className={styles.tooltip} id="save" place="top">
        <p>{t("tooltips.save")}</p>
      </Tooltip>
      <Tooltip className={styles.tooltip} id="similar" place="top">
        <p>{t("tooltips.similar")}</p>
      </Tooltip>
      <Tooltip className={styles.tooltip} id="favorite" place="top">
        <p>{t("tooltips.estimate")}</p>
      </Tooltip>
      <Tooltip className={styles.tooltip} id="block" place="top">
        <p>{t("tooltips.block")}</p>
      </Tooltip>
    </>
  );
};

export default FilmsTooltips;
