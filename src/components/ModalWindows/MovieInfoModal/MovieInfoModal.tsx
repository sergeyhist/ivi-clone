import { FC, ReactNode, useState } from "react";
import styles from "./MovieInfoModal.module.sass";
import { ICreator } from "/src/types/ICreator";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import { useAppSelector } from "/src/hooks/redux";
import { InfoTabs } from "/src/types/InfoTabs";
import CreatorsModalList from "/src/components/ModalWindows/MovieInfoModal/CreatorsModalList/CreatorsModalList";
import CommentForm from "/src/components/ModalWindows/MovieInfoModal/CommentForm/CommentForm";
import { comments } from "./MovieInfoModal.utils";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import { useTranslation } from "next-i18next";
import { movie } from "/src/utils/movie";

interface MovieInfoModalProps {
  creators: ICreator[];
  movieTitle: string;
  closeCallback: () => void;
}

const MovieInfoModal: FC<MovieInfoModalProps> = ({
  creators,
  movieTitle,
  closeCallback,
}) => {
  const defaultTab = useAppSelector(
    (State) => State.showModal.showMovieInfoModal.defaultTab
  );
  const [selectedTab, setSelectedTab] = useState<InfoTabs>(defaultTab || "actors");
  const { t } = useTranslation("movieInfo");

  const getSelectedTab = (tab: InfoTabs): ReactNode => {
    switch (tab) {
      case "actors":
        return <CreatorsModalList creators={creators} />;
      case "comments":
        return <CommentForm comments={comments} />;
    }
  };

  useOverflowHidden();

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={closeCallback}>
        {t("backLink")}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{`${movieTitle} ${t("title")}`}</h2>
          <div className={styles.tabs__list_wrapper}>
            <ul className={styles.tabs__list}>
              <li
                className={`${styles.tabs__item} ${
                  selectedTab === "actors" ? styles.active : ""
                }`}
                onClick={() => setSelectedTab("actors")}
              >
                {t("tabs.0")}
              </li>
              <li
                className={`${styles.tabs__item} ${
                  selectedTab === "comments" ? styles.active : ""
                }`}
                onClick={() => setSelectedTab("comments")}
              >
                {t("tabs.1")}
              </li>
            </ul>
          </div>
          <div className={styles.tabs__content}>{getSelectedTab(selectedTab)}</div>
        </div>
        <div className={styles.card}>
          <MovieCard content={movie} type="poster" />
        </div>
      </div>
    </div>
  );
};

export default MovieInfoModal;
