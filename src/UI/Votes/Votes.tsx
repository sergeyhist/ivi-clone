import { FC, useState } from "react";
import styles from "./Votes.module.sass";

interface VotesProps {
  className?: string;
}

const Votes: FC<VotesProps> = ({ className = "" }) => {
  const [likes, setLikes] = useState<number>(12);

  const likeHandler = (): void => {
    setLikes(likes + 1);
  };

  const dislikeHandler = (): void => {
    setLikes(likes - 1);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <button onClick={likeHandler} type="button" className={styles.like}></button>
      <div className={styles.count}>{likes}</div>
      <button
        onClick={dislikeHandler}
        type="button"
        className={styles.dislike}
      ></button>
    </div>
  );
};

export default Votes;
