import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { sliderBreakpoints } from "../../Filters.utils";
import styles from "./FilterSlider.module.sass";
import SliderContent from "./SliderContent/SliderContent";
import { IFilter, IFilterSlide } from "/src/types/IFilter";
import Slider from "/src/UI/Slider/Slider";

interface FilterSliderProps {
  items: IFilterSlide[];
  activeFilters: IFilter[];
  clickCallback: (result: IFilter) => void;
}

const FilterSlider: FC<FilterSliderProps> = ({
  items,
  activeFilters,
  clickCallback,
}) => {
  return (
    <Slider
      wrapperClassName={styles.slider}
      swiperClassName={styles.swiper}
      breakpoints={sliderBreakpoints}
      prevClassName={styles.prev}
      nextClassName={styles.next}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <SliderContent
            icon={item.icon as string}
            text={item.text}
            isActive={activeFilters.some((filter) => filter.slug === item.slug)}
            clickCallback={() => clickCallback(item)}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default FilterSlider;
