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
  wrapperClassName?: string;
  breakpoints?: SwiperOptions["breakpoints"];
  prevClassName?: string;
  nextClassName?: string;
  loop?: boolean;
  centeredSlides?: boolean;
  autoplay?: boolean | AutoplayOptions;
  simulateTouch?: boolean;
  slidesPerView?: "auto" | number;
  type?: "default" | "always-with-buttons";
  dataTestId?: string;
}

const Slider: FC<SliderProps> = ({
  children,
  breakpoints,
  slidesPerView,
  swiperClassName = "",
  wrapperClassName = "",
  prevClassName = "",
  nextClassName = "",
  loop = false,
  centeredSlides = false,
  autoplay = false,
  simulateTouch = true,
  type = "default",
  dataTestId,
}) => {
  const [show, setShow] = useState({ prev: false, next: true });
  const swiperRef = useRef<SwiperRef>(null);

  const swiperHandler = (event: swiperType): void => {
    setShow({
      prev: !event.isBeginning,
      next: !event.isEnd,
    });
  };

  const swiperInitHandler = (event: swiperType): void => {
    type === "always-with-buttons"
      ? setShow({ prev: false, next: true })
      : swiperHandler(event);
  };

  const nextCallback = (): void => {
    swiperRef.current?.swiper.slideNext();
  };

  const prevCallback = (): void => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div
      className={`${styles.wrapper} ${wrapperClassName}`}
      data-testid={dataTestId}
    >
      <Swiper
        modules={[Autoplay]}
        ref={swiperRef}
        onSlideChange={swiperHandler}
        onSwiper={swiperInitHandler}
        className={`${styles.swiper} ${swiperClassName}`}
        breakpoints={breakpoints}
        loop={loop}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
        simulateTouch={simulateTouch}
        slidesPerView={slidesPerView}
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
