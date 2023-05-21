import { FC, useState } from "react";
import styles from "./Votes.module.sass";

interface VotesProps {
  className?: string;
  like: number;
}

const Votes: FC<VotesProps> = ({ like, className = "" }) => {
  const [likes, setLikes] = useState<number>(like);

  const likeHandler = (): void => {
    setLikes(likes + 1);
  };

  const dislikeHandler = (): void => {
    setLikes(likes - 1);
  };

  return (
    <div data-testid="votes" className={`${styles.container} ${className}`}>
      <button
        data-testid="like"
        onClick={likeHandler}
        type="button"
        className={styles.like}
      ></button>
      <div data-testid="likes" className={styles.count}>
        {likes}
      </div>
      <button
        data-testid="dislike"
        onClick={dislikeHandler}
        type="button"
        className={styles.dislike}
      ></button>
    </div>
  );
};

export default Votes;
