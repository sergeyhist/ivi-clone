import { FC, MouseEventHandler } from "react";
import styles from "./CommentCard.module.sass";
import { IMovieComment } from "/src/types/IMovie";

interface CommentsCardProps {
  comment: IMovieComment;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CommentsCard: FC<CommentsCardProps> = ({ comment, onClick }) => {
  return (
    <article className={styles.comment}>
      <button onClick={onClick} className={styles.comment__button}>
        <p className={styles.comment__author}>{comment.author}</p>
        <p className={styles.comment__content}>{comment.text}</p>
        <p className={styles.comment__date}>{comment.date}</p>
      </button>
      <div className={styles.vote}>
        <button className={styles.vote__like}>
          <i className={`${styles.icon} ${styles.icon_like}`}></i>
        </button>
        <span
          className={`${styles.vote__value} ${styles.vote__value_positive}`}
        >
          64
        </span>
        <button className={styles.vote__dislike}>
          <i className={`${styles.icon} ${styles.icon_dislike}`}></i>
        </button>
      </div>
    </article>
  );
};

export default CommentsCard;
