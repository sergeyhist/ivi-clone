import { Dispatch, FC, SetStateAction } from "react";
import styles from "./CommentsList.module.sass";
import { IComment } from "/src/types/IComment";
import CommentItem from "./CommentItem/CommentItem";

interface CommentListProps {
  comments: IComment[];
  setInputText: Dispatch<SetStateAction<string>>;
  setReplyFor: Dispatch<SetStateAction<IComment | undefined>>;
}

const CommentsList: FC<CommentListProps> = ({
  comments,
  setInputText,
  setReplyFor,
}) => {
  return (
    <div className={styles.list}>
      {comments.map((comment, i) => (
        <CommentItem
          setInputText={setInputText}
          comment={comment}
          setReplyFor={setReplyFor}
          level={1}
          key={i}
        />
      ))}
    </div>
  );
};

export default CommentsList;
