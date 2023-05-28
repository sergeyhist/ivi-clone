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
import useCloseEvents from "/src/hooks/useCloseEvents";

interface ModalInputProps {
  authData?: string;
  setAuthData?: Dispatch<SetStateAction<string>>;
  setIsValid?: Dispatch<SetStateAction<boolean>>;
  inputType: "email" | "password" | "text";
  showIcon?: boolean;
  placeholderText: string;
  buttonText: string;
  showErrorMessage?: boolean;
  clickCallback?: () => void;
  preventDefault?: boolean;
  isFocused?: boolean;
  className?: string;
  dataTestId?: string;
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
  isFocused = false,
  className,
  dataTestId,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInputSelected, setIsPasswordInputSelected] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
      setIsInputActive(true);
    }
  }, [isFocused]);

  useEffect(() => {
    if (inputRef.current?.value !== "") {
      setIsButtonDisabled(false);
      setIsInputActive(true);
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

  const handleInputBlur = (): void => {
    inputRef.current?.blur();
    if (inputRef.current?.value === "") setIsInputActive(false);
    if (setIsPasswordInputSelected && inputRef.current?.value === "")
      setIsPasswordInputSelected(false);
  };

  useCloseEvents([contentRef], () => handleInputBlur());

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    value !== "" ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
    setAuthData && setAuthData(value);
    setIsValid && setIsValid(false);
    if (setIsPasswordInputSelected && value !== "")
      setIsPasswordInputSelected(true);
  };

  const handleInputClick = (): void => {
    if (isInputActive === false) {
      setIsInputActive(true);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className={`${styles.input__container} ${className ? className : ""}`}
      data-testid="input-container"
    >
      <div
        ref={contentRef}
        className={`${styles.input__content} ${
          showErrorMessage ? styles.input__error : ""
        }`}
        onClick={handleInputClick}
        data-testid="input-content"
      >
        <div
          className={`${styles.input__placeholder} ${
            isInputActive ? styles.placeholder_active : ""
          }`}
          data-testid="placeholder"
        >
          {placeholderText}
        </div>
        <div className={styles.input_block}>
          {showIcon && <div className={styles.input__icon}></div>}
          <input
            type={inputType}
            ref={inputRef}
            value={authData}
            className={`${styles.input} ${
              isInputActive ? styles.input_active : ""
            }`}
            onChange={handleInputChange}
            autoComplete={"on"}
            data-testid={dataTestId}
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
              data-testid="show-icon"
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
        dataTestId={dataTestId ? `${dataTestId}-button` : "custom-button"}
      >
        {buttonText}
      </CustomButton>
    </div>
  );
};

export default ModalInput;
