import { FC, FormEvent, useState } from "react";
import { IComment } from "/src/types/IComment";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import styles from "./CommentForm.module.sass";
import CommentsList from "/src/components/ModalWindows/MovieInfoModal/CommentsList/CommentsList";
import { useTranslation } from "next-i18next";

interface CommentFormProps {
  comments: IComment[];
}

const CommentForm: FC<CommentFormProps> = ({ comments }) => {
  const [commentsState, setCommentsState] = useState<IComment[]>(comments);
  const [inputText, setInputText] = useState("");
  const { t } = useTranslation("movieInfo");

  const handleSubmitForm = (event: FormEvent): void => {
    event.preventDefault();
    const newComment: IComment = {
      title: "Vegeta",
      text: inputText,
      film_id: String(commentsState.length + 1),
      parent_id: String(commentsState.length + 1),
      user_id: commentsState.length + 1,
    };
    setCommentsState([...commentsState, newComment]);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <ModalInput
        className={styles.input}
        authData={inputText}
        setAuthData={setInputText}
        inputType="text"
        showIcon={false}
        buttonText={t("commentsInput.submit")}
        placeholderText={t("commentsInput.placeholder")}
      />
      <CommentsList comments={commentsState} />
    </form>
  );
};

export default CommentForm;
