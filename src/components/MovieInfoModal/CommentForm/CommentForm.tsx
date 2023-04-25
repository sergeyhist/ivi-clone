import {FC} from "react";
import {IComment} from "/src/types/IComment";
import CommentInput from "/src/components/MovieInfoModal/CommentInput/CommentInput";
import CommentsList from "/src/components/MovieInfoModal/CommentsList/CommentsList";

interface CommentFormProps{
  comments: IComment[]
}

const CommentForm:FC<CommentFormProps> = ({comments})=>{
  return(
    <div>
      <CommentInput/>
      <CommentsList comments={comments}/>
    </div>
  )
}

export default CommentForm;
