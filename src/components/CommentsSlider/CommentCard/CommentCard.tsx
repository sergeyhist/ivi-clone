import { FC } from "react";
import styles from "./CommentCard.module.sass";
import Link from "next/link";
import { IComment } from "/src/types/IComent";

interface CommentsCardProps {
  comment: IComment;
}

const CommentsCard: FC<CommentsCardProps> = ({ comment }) => {
  return (
    <article className={styles.comment}>
      <Link className={styles.comment__link} href={"/"}>
        <p className={styles.comment__author}>{comment.author}</p>
        <p className={styles.comment__content}>{comment.text}</p>
        <p className={styles.comment__date}>{comment.date}</p>
      </Link>
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
