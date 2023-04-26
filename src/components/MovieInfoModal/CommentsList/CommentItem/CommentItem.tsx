import {FC} from "react";
import {IComment} from "/src/types/IComment";
import styles from "./CommentItem.module.sass";
import Votes from "/src/components/MovieInfoModal/CommentsList/CommentItem/Votes/Votes";

interface CommentItemProps{
  comment:IComment,
  level: number
}

const CommentItem:FC<CommentItemProps> = ({comment,level})=>{
  const indentation = level * 8;

  return(
    <div className={styles.container}>
      <h4 style={{ paddingLeft: `${indentation}px` }}>{comment.author}</h4>
      <div className={styles.comment}>
        <div className={styles.text} style={{ paddingLeft: `${indentation}px` }}>{comment.text}</div>
        <Votes/>
      </div>
      {comment.replies && (
        <div className={styles.replies}>
          {comment.replies.map((reply,i)=>(
            <CommentItem comment={reply} key={i} level={level + 1}/>
          ))}
        </div>
      )

      }
    </div>
  )
}

export default CommentItem;
