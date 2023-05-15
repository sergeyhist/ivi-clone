import { FC, Dispatch, SetStateAction, useRef, useEffect, useState } from "react";
import { IComment } from "/src/types/IComment";
import styles from "./CommentItem.module.sass";
import Votes from "/src/UI/Votes/Votes";
import { getFormateDate } from "/src/utils/movie/movie";
import { useTranslation } from "next-i18next";
import { BiCommentAdd } from "react-icons/bi";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import { useAppSelector } from "/src/hooks/redux";

interface CommentItemProps {
  comment: IComment;
  level: number;
  setInputText: Dispatch<SetStateAction<string>>;
  setReplyFor: Dispatch<SetStateAction<IComment | undefined>>;
}

const CommentItem: FC<CommentItemProps> = ({
  comment,
  level,
  setInputText,
  setReplyFor,
}) => {
  const { t } = useTranslation("movie");
  const indentation = level * 8;
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textHeight, setTextHeight] = useState<number>(100);
  const windowSize = useAppSelector((state) => state.windowSize);

  const clickHandler = (): void => {
    setInputText("@" + comment.user.profile.first_name + ": ");
    setReplyFor(comment);
  };

  useEffect(() => {
    setTextHeight(Number(textRef.current?.scrollHeight));
  }, [windowSize.width]);

  return (
    <div
      style={{ transform: `translate(${indentation}px, 0)` }}
      className={styles.container}
    >
      <div className={styles.top}>
        <div className={styles.top__content}>
          <h4 onClick={clickHandler} className={styles.title}>
            {comment.user.profile.first_name} {comment.user.profile.last_name}
          </h4>
          <p className={styles.date}>
            {getFormateDate(new Date(comment.createdAt), t)}
          </p>
        </div>
        <div className={styles.top__actions}>
          <button
            type="button"
            onClick={clickHandler}
            className={styles.comment__add}
            data-id={comment.comment_id}
          >
            <BiCommentAdd fontWeight={700} size={20} className={styles.top__icon} />
          </button>
          <Votes />
        </div>
      </div>

      <div className={styles.comment}>
        <TextDropDown
          toggleTitles={{
            defaultTitle: t("details.show"),
            activeTitle: t("details.hide"),
          }}
          textHeight={textHeight}
        >
          <p ref={textRef} className={styles.text}>
            {comment.text}
          </p>
        </TextDropDown>
      </div>
      {comment.sub_comments.length !== 0 && (
        <div className={styles.replies}>
          {comment.sub_comments.map((sub_comment, index) => (
            <CommentItem
              setInputText={setInputText}
              comment={sub_comment}
              key={index}
              level={level + 1}
              setReplyFor={setReplyFor}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
