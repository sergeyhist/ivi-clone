import {FC} from "react";
import styles from "./CommentsList.module.sass";
import {IComment} from "/src/types/IComment";
import CommentItem from "/src/components/ModalWindows/MovieInfoModal/CommentsList/CommentItem/CommentItem";

interface CommentListProps {
  comments: IComment[]
}

const CommentsList: FC<CommentListProps> = ({comments}) => {
  return (
    <div className={styles.list}>
      {
        comments.map((comment, i) => (
          <CommentItem comment={comment} level={1} key={i}/>
        ))
      }
    </div>
  )
}

export default CommentsList;
