import { FC, MouseEventHandler } from "react";
import styles from "./CommentCard.module.sass";
import { IComment } from "/src/types/IComment";
import { getFormateDate } from "../../../../utils/movie";
import { useTranslation } from "next-i18next";
import Votes from "/src/UI/Votes/Votes";

interface CommentsCardProps {
  comment: IComment;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CommentsCard: FC<CommentsCardProps> = ({ comment, onClick }) => {
  const { t } = useTranslation("movie");

  return (
    <article className={styles.comment}>
      <button onClick={onClick} className={styles.comment__button}>
        <p className={styles.comment__author}>{comment.user.email}</p>
        <p className={styles.comment__content}>{comment.text}</p>
        <p className={styles.comment__date}>
          {getFormateDate(new Date(comment.createdAt), t)}
        </p>
      </button>
      <Votes like={Number(comment.like)} className={styles.votes} />
    </article>
  );
};

export default CommentsCard;
