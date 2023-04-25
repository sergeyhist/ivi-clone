import {FC, useEffect, useRef, useState} from "react";
import styles from "./CommentInput.module.sass";

const CommentInput:FC = ()=>{
  const [isInputActive, setIsInputActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleInputBlur = (): void => {
      if (inputRef.current?.value === "") setIsInputActive(false);
    };

    const handleClickOutside = (e: MouseEvent): void => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        handleInputBlur();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = (): void => {
    if (inputRef.current) {
      inputRef.current?.focus();
      setIsInputActive(true);
    }
  };

  return(
    <div onClick={handleInputClick} ref={contentRef} className={styles.chat__input__content}>
      <div
        className={`${styles.chat__input__placeholder} ${
          isInputActive ? styles.placeholder_active : ""
        }`}
      >
        Написать отзыв
      </div>
      <div className={styles.chat__input_block}>
        <div className={styles.chat__input__icon}></div>
        <input
          ref={inputRef}
          className={`${styles.chat__input} ${
            isInputActive ? styles.input_active : ""
          }`}
        />
      </div>
    </div>
  )
}

export default CommentInput;
