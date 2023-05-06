import { FC } from "react";
import styles from "./CreatorsModalList.module.sass";
import Creators from "/src/components/ModalWindows/MovieInfoModal/CreatorsModalList/Creators/Creators";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";

interface CreatorsModalListProps {
  persons: IPerson[];
}

const CreatorsModalList: FC<CreatorsModalListProps> = ({ persons }) => {
  const { t } = useTranslation("movie");

  const directors = persons.filter((person) => person.filmRoles[0].slug === "rezhisser");
  const actors = persons.filter((person) => person.filmRoles[0].slug === "aktyor");
  const scenarists = persons.filter((person) => person.filmRoles[0].slug === "scenariy");
  const producers = persons.filter((person) => person.filmRoles[0].slug === "prodyuser");
  const dubbing = persons.filter((person) => person.filmRoles[0].slug === "aktyor-dublyazha");
  const painters = persons.filter((person) => person.filmRoles[0].slug === "hudozhnik");
  const operators = persons.filter((person) => person.filmRoles[0].slug === "operator");
  const compositors = persons.filter((person) => person.filmRoles[0].slug === "kompozitor");

  return (
    <div className={styles.container}>
      {directors.length !== 0 && <Creators title={t("creators.directors")} persons={directors} />}
      {actors.length !== 0 && <Creators title={t("creators.actors")} persons={actors} />}
      {scenarists.length !== 0 && (
        <Creators title={t("creators.scenarists")} persons={scenarists} />
      )}
      {producers.length !== 0 && <Creators title={t("creators.producers")} persons={producers} />}
      {dubbing.length !== 0 && <Creators title={t("creators.dubbing")} persons={dubbing} />}
      {painters.length !== 0 && <Creators title={t("creators.painters")} persons={painters} />}
      {operators.length !== 0 && <Creators title={t("creators.operators")} persons={operators} />}
      {compositors.length !== 0 && (
        <Creators title={t("creators.compositors")} persons={compositors} />
      )}
    </div>
  );
};

export default CreatorsModalList;
