import {FC, useState, ReactNode} from "react";
import {Swiper} from "swiper/react";
import styles from "./Slider.module.sass";
import SliderButtons from "/src/UI/SliderButtons/SliderButtons";
import {SwiperOptions} from "swiper";

interface SliderProps {
  children: ReactNode;
  className?: string;
  spaceBetween?: number;
  breakpoints: SwiperOptions["breakpoints"];
}

const Slider: FC<SliderProps> = ({children, className, spaceBetween = 24, breakpoints}) => {
  const [show, setShow] = useState({prev: false, next: true});
  return (
    <div className={styles.row}>
      <Swiper
        onSlideChange={(event) => {
          setShow({
            prev: !event.isBeginning,
            next: !event.isEnd,
          });
        }}
        className={`${styles.swiper} ${className}`}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
      >
        {children}
        <SliderButtons state={show} prevClassName={styles.prev} nextClassName={styles.next} />
      </Swiper>
    </div>
  );
};

export default Slider;
