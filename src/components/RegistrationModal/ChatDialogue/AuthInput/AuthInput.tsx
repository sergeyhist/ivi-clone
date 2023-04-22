import {
  ChangeEvent,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./AuthInput.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";

interface EmailInputProps {
  authData: string;
  children?: ReactNode;
  setAuthData: Dispatch<SetStateAction<string>>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setIsPasswordInputSelected?: Dispatch<SetStateAction<boolean>>;
  inputType: "email" | "password" | "text";
  placeholderText: string;
  showErrorMessage: boolean;
  clickCallback?: (e: MouseEvent) => void;
}

const AuthInput: FC<EmailInputProps> = ({
  authData,
  children,
  setAuthData,
  setIsValid,
  setIsPasswordInputSelected,
  inputType,
  placeholderText,
  showErrorMessage,
  clickCallback,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current?.value !== "") {
      setIsButtonDisabled(false);
      setIsInputActive(true);
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    const handleInputBlur = (): void => {
      if (inputRef.current?.value === "") setIsInputActive(false);
      if (setIsPasswordInputSelected && inputRef.current?.value === "")
        setIsPasswordInputSelected(false);
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
  }, [setIsPasswordInputSelected]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    value !== "" ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
    setAuthData(value);
    setIsValid(false);
    if (setIsPasswordInputSelected && value !== "")
      setIsPasswordInputSelected(true);
  };

  const handleInputClick = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsInputActive(true);
    }
  };

  return (
    <div className={styles.chat__input__container}>
      <div
        ref={contentRef}
        className={`${styles.chat__input__content} ${
          showErrorMessage ? styles.chat__input__error : ""
        }`}
        onClick={handleInputClick}
      >
        <div
          className={`${styles.chat__input__placeholder} ${
            isInputActive ? styles.placeholder_active : ""
          }`}
        >
          {placeholderText}
        </div>
        <div className={styles.chat__input_block}>
          <div className={styles.chat__input__icon}></div>
          <input
            type={inputType}
            ref={inputRef}
            value={authData}
            className={`${styles.chat__input} ${
              isInputActive ? styles.input_active : ""
            }`}
            onChange={handleInputChange}
          />
          {children}
        </div>
      </div>
      <CustomButton
        clickCallback={clickCallback}
        className={`${styles.chat__button} ${
          isButtonDisabled ? styles.button_disabled : ""
        }`}
        type="red"
      >
        Продолжить
      </CustomButton>
    </div>
  );
};

export default AuthInput;
