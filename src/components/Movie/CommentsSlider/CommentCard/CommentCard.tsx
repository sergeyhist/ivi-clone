import { FC, MouseEventHandler } from "react";
import styles from "./CommentCard.module.sass";
import { IComment } from "/src/types/IComment";
import { getFormateDate } from "/src/utils/movie";
import { useTranslation } from "next-i18next";

interface CommentsCardProps {
  comment: IComment;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CommentsCard: FC<CommentsCardProps> = ({ comment, onClick }) => {
  const { t } = useTranslation("movie");

  return (
    <article className={styles.comment}>
      <button onClick={onClick} className={styles.comment__button}>
        <p className={styles.comment__author}>
          {comment.user.profile.first_name} {comment.user.profile.last_name}
        </p>
        <p className={styles.comment__content}>{comment.text}</p>
        <p className={styles.comment__date}>
          {getFormateDate(new Date(comment.createdAt), t)}
        </p>
      </button>
      <div className={styles.vote}>
        <button className={styles.vote__like}>
          <i className={`${styles.icon} ${styles.icon_like}`}></i>
        </button>
        <span className={`${styles.vote__value} ${styles.vote__value_positive}`}>
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
