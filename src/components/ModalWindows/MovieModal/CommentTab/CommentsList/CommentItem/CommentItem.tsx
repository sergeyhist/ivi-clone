import { FC, Dispatch, SetStateAction } from "react";
import { IComment } from "/src/types/IComment";
import styles from "./CommentItem.module.sass";
import Votes from "./Votes/Votes";
import { getFormateDate } from "/src/utils/movie";
import { useTranslation } from "next-i18next";
import { BiCommentAdd } from "react-icons/bi";

interface CommentItemProps {
  comment: IComment;
  level: number;
  action: Dispatch<SetStateAction<string>>;
}

const CommentItem: FC<CommentItemProps> = ({ comment, level, action }) => {
  const { t } = useTranslation("movie");
  const indentation = level * 8;

  const clickHandler = (): void => {
    action("@" + comment.user.profile.first_name + ": ");
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.top__content}>
          <h4
            onClick={clickHandler}
            className={styles.title}
            style={{ paddingLeft: `${indentation}px` }}
          >
            {comment.user.profile.first_name} {comment.user.profile.last_name}
          </h4>
          <p className={styles.date}>
            {getFormateDate(new Date(comment.createdAt), t)}
          </p>
        </div>
        <div className={styles.top__actions}>
          <button onClick={clickHandler} className={styles.comment__add}>
            <BiCommentAdd fontWeight={700} size={20} className={styles.top__icon} />
          </button>
          <Votes />
        </div>
      </div>

      <div className={styles.comment}>
        <div className={styles.text} style={{ paddingLeft: `${indentation}px` }}>
          {comment.text}
        </div>
      </div>
      {comment.sub_comments.length !== 0 && (
        <div className={styles.replies}>
          {comment.sub_comments.map((sub_comment, index) => (
            <CommentItem
              action={action}
              comment={sub_comment}
              key={index}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
