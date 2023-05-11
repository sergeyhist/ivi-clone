import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ModalInput.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";

interface ModalInputProps {
  authData?: string;
  setAuthData?: Dispatch<SetStateAction<string>>;
  setIsValid?: Dispatch<SetStateAction<boolean>>;
  inputType: "email" | "password" | "text";
  showIcon?: boolean;
  placeholderText: string;
  buttonText: string;
  showErrorMessage?: boolean;
  clickCallback?: () => void | Promise<void>;
  preventDefault?: boolean;
  className?: string;
}

const ModalInput: FC<ModalInputProps> = ({
  authData,
  setAuthData,
  setIsValid,
  inputType,
  placeholderText,
  buttonText,
  showErrorMessage,
  clickCallback,
  preventDefault,
  showIcon = false,
  className,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInputSelected, setIsPasswordInputSelected] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current?.value !== "") {
      setIsButtonDisabled(false);
      setIsInputActive(true);
      inputRef.current?.focus();
      if (inputType === "password") setIsPasswordInputSelected(true);
    }
    return () => {
      setShowPassword(false);
    };
  }, [inputType, authData]);

  useEffect(() => {
    if (showPassword && inputRef.current && inputType === "password") {
      inputRef.current.type = "text";
    } else {
      if (inputRef.current && inputType === "password")
        inputRef.current.type = "password";
    }
  }, [showPassword, isPasswordInputSelected, inputType]);

  useEffect(() => {
    const handleInputBlur = (): void => {
      if (inputRef.current?.value === "") setIsInputActive(false);
      if (setIsPasswordInputSelected && inputRef.current?.value === "")
        setIsPasswordInputSelected(false);
    };

    const handleClickOutside = (e: MouseEvent): void => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
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
    setAuthData && setAuthData(value);
    setIsValid && setIsValid(false);
    if (setIsPasswordInputSelected && value !== "") setIsPasswordInputSelected(true);
  };

  const handleInputClick = (): void => {
    if (inputRef.current) {
      inputRef.current?.focus();
      setIsInputActive(true);
    }
  };

  return (
    <div className={`${styles.input__container} ${className ? className : ""}`}>
      <div
        ref={contentRef}
        className={`${styles.input__content} ${
          showErrorMessage ? styles.input__error : ""
        }`}
        onClick={handleInputClick}
      >
        <div
          className={`${styles.input__placeholder} ${
            isInputActive ? styles.placeholder_active : ""
          }`}
        >
          {placeholderText}
        </div>
        <div className={styles.input_block}>
          {showIcon && <div className={styles.input__icon}></div>}
          <input
            type={inputType}
            ref={inputRef}
            value={authData}
            className={`${styles.input} ${isInputActive ? styles.input_active : ""}`}
            onChange={handleInputChange}
            autoComplete={"on"}
            required
          />
          {inputType === "password" && (
            <div
              className={`${styles.show__icon} ${
                isPasswordInputSelected ? "" : styles.show__icon_disabled
              } ${!showPassword ? styles.password_show : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prevState) => !prevState);
              }}
            ></div>
          )}
        </div>
      </div>
      <CustomButton
        preventDefault={preventDefault}
        clickCallback={clickCallback}
        className={`${styles.button} ${
          isButtonDisabled ? styles.button_disabled : ""
        }`}
        type="red"
      >
        {buttonText}
      </CustomButton>
    </div>
  );
};

export default ModalInput;
