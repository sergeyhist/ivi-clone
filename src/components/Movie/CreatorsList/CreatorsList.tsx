import { FC } from "react";
import styles from "./CreatorsList.module.sass";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowModal } from "/src/store/slices/modalsSlice";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";
import Creator from "/src/UI/Creator/Creator";

interface CreatorsListProps {
  persons: IPerson[];
}

const CreatorsList: FC<CreatorsListProps> = ({ persons }) => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();
  const { t } = useTranslation("creators");

  const firstTenCreators = persons.slice(0, 10);

  const clickHandler = (): void => {
    dispatch(
      setShowModal({
        ...showModal,
        showMovieInfoModal: { isShow: true },
      })
    );
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
