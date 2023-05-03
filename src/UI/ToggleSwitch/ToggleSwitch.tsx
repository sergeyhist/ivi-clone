import { ChangeEvent, FC } from "react";
import styles from "./ToggleSwitch.module.sass";

interface ToggleSwitchProps {
  className?: string;
  leftContent: string;
  rightContent: string;
  clickCallback: (e?: ChangeEvent<HTMLInputElement>) => void;
  scale?: string;
  isChecked?: boolean;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  className = "",
  leftContent,
  rightContent,
  clickCallback,
  isChecked= false,
  scale = "0.8",
}) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ scale: scale }}
    >
      <input
        className={styles.checkbox}
        id={`react-switch-new`}
        onChange={clickCallback}
        checked={isChecked}
        type="checkbox"
      />
      <label className={styles.label} htmlFor={`react-switch-new`}>
        <span className={styles.button} />
        <span className={styles.left__item}>{leftContent}</span>
        <span className={styles.right__item}>{rightContent}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
