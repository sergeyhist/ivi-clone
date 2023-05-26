import { FC } from "react";
import { TfiClose } from "react-icons/tfi";
import styles from "./ResetButton.module.sass";

interface ResetButtonProps {
  text: string;
  textPosition: "left" | "right";
  clickCallback: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({
  text,
  textPosition,
  clickCallback,
}) => {
  return (
    <button
      data-testid="reset-all-button"
      onClick={clickCallback}
      className={styles.reset + " unselectable"}
    >
      {textPosition === "left" && (
        <span className={styles.reset__text}>{text}</span>
      )}
      <span className={styles.reset__icon}>
        <TfiClose size={16} />
      </span>
      {textPosition === "right" && (
        <span className={styles.reset__text}>{text}</span>
      )}
    </button>
  );
};

export default ResetButton;
