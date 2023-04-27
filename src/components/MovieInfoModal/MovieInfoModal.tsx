import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./MovieInfoModal.module.sass";
import { ICreator } from "/src/types/ICreator";
import CreatorsModalList from "/src/components/MovieInfoModal/CreatorsModalList/CreatorsModalList";
import { comments } from "/src/components/MovieInfoModal/MovieInfoModal.utils";
import CommentForm from "/src/components/MovieInfoModal/CommentForm/CommentForm";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import { slides } from "/src/components/HomeSliders/HomeSliders.utils";
import { useAppSelector } from "/src/hooks/redux";
import { InfoTabs } from "/src/types/InfoTabs";

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
  const [selectedTab, setSelectedTab] = useState<InfoTabs>(
    defaultTab || "actors"
  );

  const getSelectedTab = (tab: InfoTabs): ReactNode => {
    switch (tab) {
      case "actors":
        return <CreatorsModalList creators={creators} />;
      case "comments":
        return <CommentForm comments={comments} />;
    }
  };

  useEffect(() => {
    const overflowBodyStyle = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowBodyStyle;
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={closeCallback}>
        К фильму
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {movieTitle} актёры и создатели фильма
          </h2>
          <div className={styles.tabs__list_wrapper}>
            <ul className={styles.tabs__list}>
              <li
                className={`${styles.tabs__item} ${
                  selectedTab === "actors" ? styles.active : ""
                }`}
                onClick={() => setSelectedTab("actors")}
              >
                Создатели
              </li>
              <li
                className={`${styles.tabs__item} ${
                  selectedTab === "comments" ? styles.active : ""
                }`}
                onClick={() => setSelectedTab("comments")}
              >
                Отзывы
              </li>
            </ul>
          </div>
          <div className={styles.tabs__content}>
            {getSelectedTab(selectedTab)}
          </div>
        </div>
        <div className={styles.card}>
          <MovieCard content={slides[0]} type="poster" />
        </div>
      </div>
    </div>
  );
};

export default MovieInfoModal;
