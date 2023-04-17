import { FC, useState, ReactNode } from "react";
import { Swiper } from "swiper/react";
import styles from "./Slider.module.sass";
import SliderButtons from "/src/UI/SliderButtons/SliderButtons";
import { SwiperOptions } from "swiper";
import { Swiper as swiperType } from "swiper/types";

interface SliderProps {
  children: ReactNode;
  swiperClassName?: string;
  rowClassName?: string;
  breakpoints: SwiperOptions["breakpoints"];
  prevClassName?: string;
  nextClassName?: string;
}

const Slider: FC<SliderProps> = ({
  children,
  swiperClassName = "",
  rowClassName = "",
  breakpoints,
  prevClassName = "",
  nextClassName = "",
}) => {
  const [show, setShow] = useState({ prev: false, next: true });
  return (
    <div className={`${styles.row} ${rowClassName}`}>
      <Swiper
        onSlideChange={(event: swiperType) => {
          setShow({
            prev: !event.isBeginning,
            next: !event.isEnd,
          });
        }}
        className={`${styles.swiper} ${swiperClassName}`}
        breakpoints={breakpoints}
      >
        {children}
        <SliderButtons state={show} prevClassName={prevClassName} nextClassName={nextClassName} />
      </Swiper>
    </div>
  );
};

export default Slider;
