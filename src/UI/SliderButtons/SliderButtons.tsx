import { FC } from "react";
import styles from "./SliderButtons.module.sass";

interface IStateProp {
  prev: boolean;
  next: boolean;
}

interface SliderButtonsProps {
  prevCallback: () => void;
  nextCallback: () => void;
  prevClassName?: string;
  nextClassName?: string;
  state?: IStateProp;
}

const SliderButtons: FC<SliderButtonsProps> = ({
  prevCallback,
  nextCallback,
  nextClassName = "",
  prevClassName = "",
  state = { prev: true, next: true },
}) => {
  return (
    <>
      {state.prev && (
        <button
          data-testid="prev-button"
          onClick={prevCallback}
          className={`${styles.button} ${styles.button_prev} ${prevClassName}`}
        >
          <i className={`${styles.button__icon} ${styles.button__icon_prev}`}></i>
        </button>
      )}

      {state.next && (
        <button
          data-testid="next-button"
          onClick={nextCallback}
          className={`${styles.button} ${styles.button_next} ${nextClassName}`}
        >
          <i className={`${styles.button__icon} ${styles.button__icon_next}`}></i>
        </button>
      )}
    </>
  );
};

export default SliderButtons;
