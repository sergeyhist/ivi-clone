import { Dispatch, FC, SetStateAction, memo } from "react";
import styles from "./CommentsList.module.sass";
import { IComment } from "/src/types/IComment";
import CommentItem from "./CommentItem/CommentItem";

interface CommentListProps {
  comments: IComment[];
  action: Dispatch<SetStateAction<string>>;
}

const CommentsList: FC<CommentListProps> = ({ comments, action }) => {
  return (
    <div className={styles.list}>
      {comments.map((comment, i) => (
        <CommentItem action={action} comment={comment} level={1} key={i} />
      ))}
    </div>
  );
};

export default memo(CommentsList);
