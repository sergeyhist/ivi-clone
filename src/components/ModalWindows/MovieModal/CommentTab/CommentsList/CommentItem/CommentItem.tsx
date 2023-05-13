import { FC, Dispatch, SetStateAction } from "react";
import { IComment } from "/src/types/IComment";
import styles from "./CommentItem.module.sass";
import Votes from "/src/UI/Votes/Votes";
import { getFormateDate } from "/src/utils/movie";
import { useTranslation } from "next-i18next";
import { BiCommentAdd } from "react-icons/bi";

interface CommentItemProps {
  comment: IComment;
  level: number;
  setInputText: Dispatch<SetStateAction<string>>;
  setReplyFor: Dispatch<SetStateAction<IComment | undefined>>;
}

const CommentItem: FC<CommentItemProps> = ({
  comment,
  level,
  setInputText,
  setReplyFor,
}) => {
  const { t } = useTranslation("movie");
  const indentation = level * 8;

  const clickHandler = (): void => {
    setInputText("@" + comment.user.profile.first_name + ": ");
    setReplyFor(comment);
  };

  return (
    <div
      style={{ transform: `translate(${indentation}px, 0)` }}
      className={styles.container}
    >
      <div className={styles.top}>
        <div className={styles.top__content}>
          <h4 onClick={clickHandler} className={styles.title}>
            {comment.user.profile.first_name} {comment.user.profile.last_name}
          </h4>
          <p className={styles.date}>
            {getFormateDate(new Date(comment.createdAt), t)}
          </p>
        </div>
        <div className={styles.top__actions}>
          <button
            type="button"
            onClick={clickHandler}
            className={styles.comment__add}
            data-id={comment.comment_id}
          >
            <BiCommentAdd fontWeight={700} size={20} className={styles.top__icon} />
          </button>
          <Votes />
        </div>
      </div>

      <div className={styles.comment}>
        <div className={styles.text}>{comment.text}</div>
      </div>
      {comment.sub_comments.length !== 0 && (
        <div className={styles.replies}>
          {comment.sub_comments.map((sub_comment, index) => (
            <CommentItem
              setInputText={setInputText}
              comment={sub_comment}
              key={index}
              level={level + 1}
              setReplyFor={setReplyFor}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
