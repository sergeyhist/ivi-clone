import { FC, useRef, useState } from "react";
import styles from "./MovieTrailer.module.sass";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IMovie } from "/src/types/IMovie";
import { getAgeImg } from "/src/utils/movie";
import Image from "next/image";

interface MovieTrailerProps {
  movie: IMovie;
}

const MovieTrailer: FC<MovieTrailerProps> = ({ movie }) => {
  const video = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState<boolean>(false);

  const clickFullScreen = (): void => {
    video.current?.requestFullscreen();
  };

  const clickPlay = (): void => {
    video.current?.play();
    setPlay(true);
  };

  const clickPause = (): void => {
    video.current?.pause();
    setPlay(false);
  };

  const stateHandler = (): void => {
    if (video.current?.paused) {
      setPlay(false);
      return;
    }
    setPlay(true);
  };

  return (
    <div data-testid="trailer" className={styles.trailer}>
      <video
        data-testid="video"
        onPlay={stateHandler}
        onPause={stateHandler}
        ref={video}
        muted={true}
        className={styles.trailer__img}
      >
        <source src="/video/trailer2.mp4" type="video/mp4" />
      </video>

      <div className={styles.trailer__over}>
        <button
          data-testid="full-screen-button"
          onClick={clickFullScreen}
          className={styles.trailer__player}
        >
          <i className={styles.trailer__icon}></i>
        </button>

        <div className={styles.trailer__center}>
          {!isPlay && (
            <button
              data-testid="play-button"
              onClick={clickPlay}
              className={styles.play}
            >
              <FaPlay size={30} className={styles.play__icon} />
            </button>
          )}
          {isPlay && (
            <button
              data-testid="pause-button"
              onClick={clickPause}
              className={styles.pause}
            >
              <FaPause size={30} className={styles.pause__icon} />
            </button>
          )}
        </div>

        <div className={styles.age}>
          <Image
            className={styles.age__img}
            height={16}
            width={24}
            src={getAgeImg(movie.age_limit)}
            alt={"age"}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
