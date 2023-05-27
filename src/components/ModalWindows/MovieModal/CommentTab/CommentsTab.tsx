import { FC, FormEvent, useState, Dispatch, SetStateAction } from "react";
import { IComment } from "/src/types/IComment";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import styles from "./CommentsTab.module.sass";
import CommentsList from "./CommentsList/CommentsList";
import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowAuthModal, setShowMovieModal } from "/src/store/slices/modalsSlice";
import { getUserByEmail } from "/src/api/user";
import { createComment } from "/src/api/comments";
import { useRouter } from "next/router";

interface CommentsTabProps {
  comments: IComment[];
  setCommentsState: Dispatch<SetStateAction<IComment[]>>;
}

const CommentsTab: FC<CommentsTabProps> = ({ comments, setCommentsState }) => {
  const { t } = useTranslation("movie");
  const [inputText, setInputText] = useState("");
  const [replyFor, setReplyFor] = useState<IComment | undefined>(undefined);
  const [placeholderText, setPlaceholderText] = useState<string | null>(
    t("modal.commentsInput.placeholder")
  );
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const { userEmail, isLogged } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { query } = useRouter();

  const handleSubmitForm = (event: FormEvent): void => {
    event.preventDefault();

    if (!isLogged) {
      dispatch(setShowAuthModal(true));
      dispatch(setShowMovieModal({ isShow: false, defaultTab: "actors" }));
      return;
    }

    if (inputText.length < 5) {
      setShowErrorMessage(true);
      setPlaceholderText(t("modal.commentsInput.errors.0"));
      return;
    }

    getUserByEmail(userEmail).then((user) => {
      if (!user) {
        setShowErrorMessage(true);
        setPlaceholderText(t("modal.commentsInput.errors.1"));
        return;
      }

      if (showErrorMessage) {
        setShowErrorMessage(false);
        setPlaceholderText(t("modal.commentsInput.placeholder"));
      }

      if (replyFor && !inputText.indexOf("@" + String(replyFor.user.email))) {
        return createComment(
          String(query.id),
          user.user_id,
          inputText,
          replyFor.comment_id,
          String(localStorage.getItem("token"))
        ).then((res) => {
          if (!res) return;
          replyFor.sub_comments.unshift(res);
          setCommentsState(comments);
          setInputText("");
        });
      }

      createComment(
        String(query.id),
        user.user_id,
        inputText,
        null,
        String(localStorage.getItem("token"))
      ).then((res) => {
        if (!res) return;
        setCommentsState([res, ...comments]);
        setInputText("");
      });
    });
  };

  return (
    <div data-testid="comments-tab">
      <form data-testid="comments-form" onSubmit={handleSubmitForm}>
        <ModalInput
          className={styles.input}
          authData={inputText}
          setAuthData={setInputText}
          inputType="text"
          showIcon={false}
          buttonText={t("modal.commentsInput.submit")}
          placeholderText={String(placeholderText)}
          showErrorMessage={showErrorMessage}
        />
      </form>
      <CommentsList
        setInputText={setInputText}
        setReplyFor={setReplyFor}
        comments={comments}
      />
    </div>
  );
};

export default CommentsTab;
