import { FC, useState, ReactNode, useRef } from "react";
import { Swiper, SwiperRef } from "swiper/react";
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
  const swiperRef = useRef<SwiperRef>(null);

  const nextCallback = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const prevCallback = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div className={`${styles.row} ${rowClassName} unselectable`}>
      <Swiper
        ref={swiperRef}
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
      </Swiper>
      <SliderButtons
        state={show}
        prevCallback={prevCallback}
        nextCallback={nextCallback}
        prevClassName={prevClassName}
        nextClassName={nextClassName}
      />
    </div>
  );
};

export default Slider;
