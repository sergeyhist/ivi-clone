import { FC, ReactNode, useState } from "react";
import styles from "./MovieInfoModal.module.sass";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import { useAppSelector } from "/src/hooks/redux";
import { InfoTabs } from "/src/types/InfoTabs";
import CreatorsModalList from "/src/components/ModalWindows/MovieInfoModal/CreatorsModalList/CreatorsModalList";
import CommentForm from "/src/components/ModalWindows/MovieInfoModal/CommentForm/CommentForm";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import { useTranslation } from "next-i18next";
import { mockMovie } from "/src/utils/movie";
import { IComment } from "/src/types/IComment";
import { IPerson } from "/src/types/IPerson";

interface MovieInfoModalProps {
  persons: IPerson[];
  comments: IComment[];
  movieTitle: string;
  closeCallback: () => void;
}

const MovieInfoModal: FC<MovieInfoModalProps> = ({
  persons,
  comments,
  movieTitle,
  closeCallback,
}) => {
  const { t } = useTranslation("movieInfo");
  const defaultTab = useAppSelector((state) => state.showModal.showMovieInfoModal.defaultTab);
  const screenWidth = useAppSelector((state) => state.windowSize.width);
  const [selectedTab, setSelectedTab] = useState<InfoTabs>(defaultTab || "actors");
  const commentsTabClass = selectedTab === "comments" ? styles.active : "";
  const actorsTabClass = selectedTab === "actors" ? styles.active : "";

  const getSelectedTab = (tab: InfoTabs): ReactNode => {
    switch (tab) {
      case "actors":
        return <CreatorsModalList persons={persons} />;
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
                className={`${styles.tabs__item} ${actorsTabClass}`}
                onClick={() => setSelectedTab("actors")}
              >
                {t("tabs.0")}
              </li>
              <li
                className={`${styles.tabs__item} ${commentsTabClass}`}
                onClick={() => setSelectedTab("comments")}
              >
                {t("tabs.1")}
              </li>
            </ul>
          </div>
          <div className={styles.tabs__content}>{getSelectedTab(selectedTab)}</div>
        </div>

        {screenWidth > 880 && (
          <div className={styles.card}>
            <MovieCard content={mockMovie} type="poster" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieInfoModal;
