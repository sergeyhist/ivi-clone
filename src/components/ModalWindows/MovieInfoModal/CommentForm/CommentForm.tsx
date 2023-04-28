import {FC, FormEvent, useState} from "react";
import {IComment} from "/src/types/IComment";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import styles from "./CommentForm.module.sass";
import CommentsList from "/src/components/ModalWindows/MovieInfoModal/CommentsList/CommentsList";
import {useTranslation} from "react-i18next";

interface CommentFormProps {
  comments: IComment[]
}

const CommentForm: FC<CommentFormProps> = ({comments}) => {
  const [commentsState, setCommentsState] = useState<IComment[]>(comments);
  const [inputText, setInputText] = useState("");
  const { t } = useTranslation();
  
  const handleSubmitForm = (e: FormEvent): void => {
    e.preventDefault();
    const newComment = {
      id: commentsState.length + 1,
      author: "Vegeta",
      text: inputText
    }
    setCommentsState([...commentsState, newComment]);
    setInputText("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <ModalInput
        className={styles.input}
        authData={inputText}
        setAuthData={setInputText}
        inputType="text"
        showIcon={false}
        buttonText={t("movieInfo.commentsInput.submit")}
        placeholderText={t("movieInfo.commentsInput.placeholder")}
      />
      <CommentsList comments={commentsState} />
    </form>
  );
}

export default CommentForm;
