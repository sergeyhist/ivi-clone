import { FC } from "react";
import styles from "./CreatorsList.module.sass";
import { useAppDispatch } from "/src/hooks/redux";
import { modalsSlice } from "/src/store/slices/modalsSlice";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";
import Creator from "/src/UI/Creator/Creator";

interface CreatorsListProps {
  persons: IPerson[];
}

const CreatorsList: FC<CreatorsListProps> = ({ persons }) => {
  const { setShowMovieModal } = modalsSlice.actions;
  const dispatch = useAppDispatch();
  const { t } = useTranslation("creators");

  const firstTenCreators = persons.slice(0, 10);

  const clickHandler = (): void => {
    dispatch(setShowMovieModal({ isShow: true, defaultTab: "actors" }));
  };

  return (
    <section className="container">
      <div className={styles.container}>
        <div className={styles.creators}>
          {firstTenCreators.map((person, i) => {
            return <Creator className={styles.creator} key={i} person={person} />;
          })}

          <button className={styles.button} onClick={clickHandler}>
            {t("moreButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorsList;
