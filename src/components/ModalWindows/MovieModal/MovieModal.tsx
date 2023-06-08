import {
  FC,
  ReactNode,
  memo,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import styles from "./MovieModal.module.sass";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { InfoTabs } from "/src/types/InfoTabs";
import CreatorsTab from "./CreatorsTab/CreatorsTab";
import CommentsTab from "./CommentTab/CommentsTab";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import { useTranslation } from "next-i18next";
import { IComment } from "/src/types/IComment";
import { IPerson } from "/src/types/IPerson";
import { modalsSlice } from "/src/store/slices/modalsSlice";
import { IMovie } from "/src/types/IMovie";
import MoviePoster from "./MoviePoster/MoviePoster";
import { iviSans, iviIcons, iconFont } from "/src/utils/fonts";
import Container from "/src/UI/Container/Container";
import { createPortal } from "react-dom";

interface MovieModalProps {
  movie: IMovie;
  persons: IPerson[];
  comments: IComment[];
  movieTitle: string;
  setCommentsState: Dispatch<SetStateAction<IComment[]>>;
}

const MovieModal: FC<MovieModalProps> = ({
  persons,
  comments,
  movieTitle,
  movie,
  setCommentsState,
}) => {
  const { t } = useTranslation("movie");
  const dispatch = useAppDispatch();
  const { setShowMovieModal } = modalsSlice.actions;
  const { showMovieModal } = useAppSelector((state) => state.showModal);
  const screenWidth = useAppSelector((state) => state.windowSize.width);
  const commentsTabClass =
    showMovieModal.defaultTab === "comments" ? styles.active : "";
  const actorsTabClass =
    showMovieModal.defaultTab === "actors" ? styles.active : "";
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      dispatch(setShowMovieModal({ isShow: false, defaultTab: "actors" }));
    };
  }, [dispatch, setShowMovieModal]);

  const closeHandler = (): void => {
    dispatch(
      setShowMovieModal({
        isShow: false,
        defaultTab: showMovieModal.defaultTab,
      })
    );
  };

  const setDefaultTab = (tab: "actors" | "comments"): void => {
    dispatch(setShowMovieModal({ isShow: true, defaultTab: tab }));
  };

  const getSelectedTab = (tab: InfoTabs): ReactNode => {
    switch (tab) {
      case "actors":
        return <CreatorsTab persons={persons} />;
      case "comments":
        return (
          <CommentsTab
            setCommentsState={setCommentsState}
            comments={comments}
          />
        );
    }
  };

  useOverflowHidden(showMovieModal.isShow);

  if (showMovieModal.isShow) {
    return createPortal(
      <div
        ref={modalRef}
        className={`${styles.modal} ${iviSans.className} ${iviIcons.variable} ${iconFont.variable}`}
        data-testid="movie-modal"
      >
        <div
          data-testid="close-movie-modal"
          className={styles.back}
          onClick={closeHandler}
        >
          {t("modal.backLink")}
        </div>
        <Container>
          <div className={styles.row}>
            <div className={styles.content}>
              <h2 className={styles.title}>{movieTitle}</h2>
              <ul className={styles.tabs__list}>
                <li
                  className={`${styles.tabs__item} ${actorsTabClass}`}
                  onClick={() => setDefaultTab("actors")}
                  data-testid="button-creators-tab"
                >
                  {t("modal.tabs.0")}
                </li>
                <li
                  className={`${styles.tabs__item} ${commentsTabClass}`}
                  onClick={() => setDefaultTab("comments")}
                  data-testid="button-comments-tab"
                >
                  {t("modal.tabs.1")}
                </li>
              </ul>
              <div className={styles.tabs__content}>
                {getSelectedTab(showMovieModal.defaultTab)}
              </div>
            </div>
            {screenWidth > 880 && (
              <div className={styles.card}>
                <MoviePoster content={movie} />
              </div>
            )}
          </div>
        </Container>
      </div>,
      document.body
    );
  } else {
    return <></>;
  }
};

export default memo(MovieModal);
