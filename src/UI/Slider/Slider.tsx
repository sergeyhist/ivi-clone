import { FC, useState, ReactNode, useRef } from "react";
import { Swiper, SwiperRef } from "swiper/react";
import styles from "./Slider.module.sass";
import SliderButtons from "/src/UI/SliderButtons/SliderButtons";
import { SwiperOptions } from "swiper";
import { Swiper as swiperType, AutoplayOptions } from "swiper/types";
import { Autoplay } from "swiper";

interface SliderProps {
  children: ReactNode;
  swiperClassName?: string;
  rowClassName?: string;
  breakpoints: SwiperOptions["breakpoints"];
  prevClassName?: string;
  nextClassName?: string;
  loop?: boolean;
  centeredSlides?: boolean;
  autoplay?: boolean | AutoplayOptions;
}

const Slider: FC<SliderProps> = ({
  children,
  swiperClassName = "",
  rowClassName = "",
  breakpoints,
  prevClassName = "",
  nextClassName = "",
  loop = false,
  centeredSlides = false,
  autoplay = false,
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
        modules={[Autoplay]}
        ref={swiperRef}
        onSlideChange={(event: swiperType) => {
          setShow({
            prev: !event.isBeginning,
            next: !event.isEnd,
          });
        }}
        className={`${styles.swiper} ${swiperClassName}`}
        breakpoints={breakpoints}
        loop={loop}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
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
