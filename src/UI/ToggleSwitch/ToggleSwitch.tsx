import { FC, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import styles from "./ToggleSwitch.module.sass";

interface ToggleSwitchProps {
  className?: string;
  leftContent: string;
  rightContent: string;
  clickCallback: (result: string) => void;
  scale?: string;
  defaultValue?: "left" | "right";
  dataTestId?: string;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  className = "",
  leftContent,
  rightContent,
  clickCallback,
  scale = "0.8",
  defaultValue,
  dataTestId,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [toggleValue, setToggleValue] = useState<string>(
    defaultValue || "left"
  );

  const debouncedCallback = useDebouncedCallback(clickCallback, 200);

  const activeToggle = isActive ? ` ${styles.toggle_active}` : "";

  useEffect(() => {
    setIsActive(true);
    debouncedCallback(toggleValue === "left" ? leftContent : rightContent);
    setTimeout(() => setIsActive(false), 600);
  }, [debouncedCallback, leftContent, rightContent, toggleValue]);

  return (
    <div
      onClick={() => {
        setToggleValue(toggleValue === "left" ? "right" : "left");
      }}
      className={`${styles.toggle} ${className} ${activeToggle}`}
      style={{ scale: scale }}
      data-testid={dataTestId}
    >
      <div
        className={`${styles.toggle__button} ${
          styles[`toggle__button_${toggleValue}`]
        }`}
        data-testid="toggle-button"
      />
      <span className={styles.toggle__left} data-testid="toggle-left">{leftContent}</span>
      <span className={styles.toggle__right} data-testid="toggle-right">{rightContent}</span>
    </div>
  );
};

export default ToggleSwitch;
