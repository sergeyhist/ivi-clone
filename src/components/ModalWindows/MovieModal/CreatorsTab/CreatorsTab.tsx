import { FC } from "react";
import styles from "./CreatorsTab.module.sass";
import Creators from "./CreatorsList/CreatorsList";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";

interface CreatorsTabProps {
  persons: IPerson[];
}

const CreatorsTab: FC<CreatorsTabProps> = ({ persons }) => {
  const { t } = useTranslation("movie");

  const directors = persons.filter(
    (person) => person.filmRoles[0].slug === "filmmaker"
  );
  const actors = persons.filter((person) => person.filmRoles[0].slug === "actor");
  const scenarists = persons.filter(
    (person) => person.filmRoles[0].slug === "scenario"
  );
  const producers = persons.filter(
    (person) => person.filmRoles[0].slug === "producer"
  );
  const dubbing = persons.filter(
    (person) => person.filmRoles[0].slug === "actordubbing"
  );
  const painters = persons.filter(
    (person) => person.filmRoles[0].slug === "painter"
  );
  const operators = persons.filter(
    (person) => person.filmRoles[0].slug === "operator"
  );
  const compositors = persons.filter(
    (person) => person.filmRoles[0].slug === "composer"
  );

  return (
    <div data-testid="creators-tab" className={styles.container}>
      {directors.length !== 0 && (
        <Creators title={t("creators.directors")} persons={directors} />
      )}
      {actors.length !== 0 && (
        <Creators title={t("creators.actors")} persons={actors} />
      )}
      {scenarists.length !== 0 && (
        <Creators title={t("creators.scenarists")} persons={scenarists} />
      )}
      {producers.length !== 0 && (
        <Creators title={t("creators.producers")} persons={producers} />
      )}
      {dubbing.length !== 0 && (
        <Creators title={t("creators.dubbing")} persons={dubbing} />
      )}
      {painters.length !== 0 && (
        <Creators title={t("creators.painters")} persons={painters} />
      )}
      {operators.length !== 0 && (
        <Creators title={t("creators.operators")} persons={operators} />
      )}
      {compositors.length !== 0 && (
        <Creators title={t("creators.compositors")} persons={compositors} />
      )}
    </div>
  );
};

export default CreatorsTab;
