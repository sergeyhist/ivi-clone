import { FC, useEffect, useState } from "react";
import styles from "./Creators.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";
import Creator from "/src/UI/Creator/Creator";

interface CreatorsProps {
  persons: IPerson[];
  title?: string | null;
}

const Creators: FC<CreatorsProps> = ({ persons, title }) => {
  const [showAllCreators, setShowAllCreators] = useState(false);
  const [creatorsToShow, setCreatorsToShow] = useState<IPerson[]>(persons);
  const { t } = useTranslation("movieInfo");

  useEffect(() => {
    if (creatorsToShow.length > 16 && !showAllCreators)
      setCreatorsToShow(creatorsToShow.slice(0, 16));
  }, [creatorsToShow, setCreatorsToShow, showAllCreators]);

  useEffect(() => {
    if (showAllCreators) setCreatorsToShow(persons);
  }, [showAllCreators, setCreatorsToShow, persons]);

  return (
    <div className={styles.creators}>
      <h2 className={styles.creators__title}>{title}</h2>
      <div className={styles.creators__list}>
        {creatorsToShow.map((person, i) => (
          <Creator key={i} person={person} type="large" />
        ))}
        {persons.length > 16 && !showAllCreators && (
          <CustomButton
            className={styles.button}
            clickCallback={() => setShowAllCreators(true)}
            type="frame"
          >
            {t("showButton")}
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default Creators;
