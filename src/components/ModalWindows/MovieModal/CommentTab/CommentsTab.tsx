import { FC, FormEvent, useState } from "react";
import { IComment } from "/src/types/IComment";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import styles from "./CommentsTab.module.sass";
import CommentsList from "./CommentsList/CommentsList";
import { useTranslation } from "next-i18next";

interface CommentsTabProps {
  comments: IComment[];
}

const CommentsTab: FC<CommentsTabProps> = ({ comments }) => {
  const [commentsState, setCommentsState] = useState<IComment[]>(comments);
  const [inputText, setInputText] = useState("");
  const [replyFor, setReplyFor] = useState<IComment | undefined>(undefined);
  const { t } = useTranslation("movieInfo");

  const handleSubmitForm = (event: FormEvent): void => {
    event.preventDefault();
    const date = new Date();
    const newComment: IComment = {
      comment_id: String(Math.round(Math.random() * 1000000)),
      title: "About film",
      text: inputText,
      film_id: "eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc",
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
      user_id: "f7b2bc15-ea49-453e-a924-c0c32b21cee0",
      parent_id: null,
      user: {
        email: "admin@gmail.com",
        profile: {
          profile_id: "51ab6af9-0739-4384-8f52-f5cee6b7ca58",
          first_name: "Victor",
          last_name: "Barinov",
        },
      },
      sub_comments: [],
    };

    if (
      replyFor &&
      !inputText.indexOf("@" + String(replyFor.user.profile.first_name))
    ) {
      replyFor.sub_comments.push(newComment);
      setCommentsState(commentsState);
      setInputText("");
      return;
    }

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
      <CommentsList
        setInputText={setInputText}
        setReplyFor={setReplyFor}
        comments={commentsState}
      />
    </form>
  );
};

export default CommentsTab;
