import { FC, Dispatch, SetStateAction, useRef, useEffect, useState } from "react";
import { IComment } from "/src/types/IComment";
import styles from "./CommentItem.module.sass";
import Votes from "/src/UI/Votes/Votes";
import { getFormateDate } from "../../../../../../utils/movie";
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
  const indentation = level * 16 < 64 ? level * 16 : level;
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textHeight, setTextHeight] = useState<number>(100);
  const windowSize = useAppSelector((state) => state.windowSize);

  const clickHandler = (): void => {
    setInputText("@" + comment.user.email + ": ");
    setReplyFor(comment);
  };

  useEffect(() => {
    setTextHeight(Number(textRef.current?.scrollHeight));
  }, [windowSize.width]);

  return (
    <div data-testid="comment" className={styles.container}>
      <div
        data-testid="comment-indentation"
        style={{ paddingLeft: `${indentation - 16}px` }}
        className={styles.top}
      >
        <h4 className={styles.title}>{comment.user.email}</h4>
        <p className={styles.date}>
          {getFormateDate(new Date(comment.createdAt), t)}
        </p>
        <div className={styles.top__actions}>
          <button
            data-testid="reply-button"
            type="button"
            onClick={clickHandler}
            className={styles.comment__add}
            data-id={comment.comment_id}
          >
            <BiCommentAdd fontWeight={700} size={20} className={styles.top__icon} />
          </button>
          <Votes like={Number(comment.like)} />
        </div>
      </div>

      <div
        style={{ paddingLeft: `${indentation - 16}px` }}
        className={styles.comment}
      >
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
