import {FC, ReactNode} from "react";
import {Swiper} from "swiper/react";
import styles from "./Slider.module.sass";
import SliderButtons from "./SliderButtons/SliderButtons";

interface SliderProps {
  children: ReactNode;
  slidesPerView: number;
  loop: boolean;
  centeredSlides: boolean;
  className?: string;
  spaceBetween: number;
  prevClassName?: string;
  nextClassName?: string;
}

const Slider: FC<SliderProps> = ({
  children,
  slidesPerView,
  loop,
  centeredSlides,
  className,
  spaceBetween,
  prevClassName,
  nextClassName,
}) => {
  return (
    <Swiper
      className={`${styles.swiper} ${className}`}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      centeredSlides={centeredSlides}
    >
      {children}
      <SliderButtons prevClassName={prevClassName} nextClassName={nextClassName} />
    </Swiper>
  );
};

export default Slider;
