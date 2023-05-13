import { FC, useRef, useState } from "react";
import styles from "./MovieTrailer.module.sass";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const MovieTrailer: FC = () => {
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
    <div className={styles.trailer}>
      <video
        onPlay={stateHandler}
        onPause={stateHandler}
        ref={video}
        muted={true}
        className={styles.trailer__img}
      >
        <source src="/video/trailer2.mp4" type="video/mp4" />
      </video>

      <div className={styles.trailer__over}>
        <button onClick={clickFullScreen} className={styles.trailer__player}>
          <i className={styles.trailer__icon}></i>
        </button>

        <div className={styles.trailer__center}>
          {!isPlay && (
            <button onClick={clickPlay} className={styles.play}>
              <FaPlay size={30} className={styles.play__icon} />
            </button>
          )}
          {isPlay && (
            <button onClick={clickPause} className={styles.pause}>
              <FaPause size={30} className={styles.pause__icon} />
            </button>
          )}
        </div>

        <p className={styles.trailer__age}></p>
      </div>
    </div>
  );
};

export default MovieTrailer;
