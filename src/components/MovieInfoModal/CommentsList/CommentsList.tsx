import {FC} from "react";
import styles from "./CommentsList.module.sass";
import {IComment} from "/src/types/IComment";
import CommentItem from "/src/components/MovieInfoModal/CommentsList/CommentItem/CommentItem";

interface CommentListProps {
  comments: IComment[]
}

const CommentsList: FC<CommentListProps> = ({comments}) => {
  return (
    <div>
      {
        comments.map((comment, i) => (
          <CommentItem comment={comment} level={1} key={i}/>
        ))
      }
    </div>
  )
}

export default CommentsList;
