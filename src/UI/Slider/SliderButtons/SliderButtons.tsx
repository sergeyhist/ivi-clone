import {FC, useState} from "react";
import styles from "./SliderButtons.module.sass";
import {useSwiper} from "swiper/react";

interface SliderButtonsProps {
  prevClassName?: string;
  nextClassName?: string;
}

const SliderButtons: FC<SliderButtonsProps> = ({nextClassName, prevClassName}) => {
  const swiper = useSwiper();

  const nextClick = () => {
    swiper.slideNext();
  };

  const prevClick = () => {
    swiper.slidePrev();
  };

  return (
    <div>
      <button onClick={prevClick} className={`${styles.button} ${styles.button_prev} ${prevClassName}`}>
        <i className={styles.button_prev__icon}></i>
      </button>

      <button onClick={nextClick} className={`${styles.button} ${styles.button_next} ${nextClassName}`}>
        <i className={styles.button_next__icon}></i>
      </button>
    </div>
  );
};

export default SliderButtons;
