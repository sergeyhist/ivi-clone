import { FC, ReactNode, memo } from "react";
import styles from "./MovieModal.module.sass";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { InfoTabs } from "/src/types/InfoTabs";
import CreatorsModalList from "./CreatorsTab/CreatorsTab";
import CommentForm from "./CommentTab/CommentsTab";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import { useTranslation } from "next-i18next";
import { IComment } from "/src/types/IComment";
import { IPerson } from "/src/types/IPerson";
import createAppPortal from "/src/utils/createAppPortal";
import { modalsSlice } from "/src/store/slices/modalsSlice";
import { IMovie } from "/src/types/IMovie";

interface MovieModalProps {
  movie: IMovie;
  persons: IPerson[];
  comments: IComment[];
  movieTitle: string;
}

const MovieModal: FC<MovieModalProps> = ({
  persons,
  comments,
  movieTitle,
  movie,
}) => {
  const { t } = useTranslation("movie");
  const dispatch = useAppDispatch();
  const { setShowMovieModal } = modalsSlice.actions;
  const { showMovieModal } = useAppSelector((state) => state.showModal);
  const screenWidth = useAppSelector((state) => state.windowSize.width);
  const commentsTabClass =
    showMovieModal.defaultTab === "comments" ? styles.active : "";
  const actorsTabClass = showMovieModal.defaultTab === "actors" ? styles.active : "";

  const closeClick = (): void => {
    dispatch(
      setShowMovieModal({ isShow: false, defaultTab: showMovieModal.defaultTab })
    );
  };

  const setDefaultTab = (tab: "actors" | "comments"): void => {
    dispatch(setShowMovieModal({ isShow: true, defaultTab: tab }));
  };

  const getSelectedTab = (tab: InfoTabs): ReactNode => {
    switch (tab) {
      case "actors":
        return <CreatorsModalList persons={persons} />;
      case "comments":
        return <CommentForm comments={comments} />;
    }
  };

  useOverflowHidden();

  return createAppPortal(
    <>
      {showMovieModal.isShow && (
        <div className={styles.modal}>
          <div className={styles.back} onClick={closeClick}>
            {t("modal.backLink")}
          </div>
          <div className={"container"}>
            <div className={styles.row}>
              <div className={styles.content}>
                <h2 className={styles.title}>{movieTitle}</h2>
                <ul className={styles.tabs__list}>
                  <li
                    className={`${styles.tabs__item} ${actorsTabClass}`}
                    onClick={() => setDefaultTab("actors")}
                  >
                    {t("tabs.0")}
                  </li>
                  <li
                    className={`${styles.tabs__item} ${commentsTabClass}`}
                    onClick={() => setDefaultTab("comments")}
                  >
                    {t("tabs.1")}
                  </li>
                </ul>
                <div className={styles.tabs__content}>
                  {getSelectedTab(showMovieModal.defaultTab)}
                </div>
              </div>
              {screenWidth > 880 && (
                <div className={styles.card}>
                  <MovieCard content={movie} type="poster" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MovieModal);
