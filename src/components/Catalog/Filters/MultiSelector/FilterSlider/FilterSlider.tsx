import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { genreIcons, sliderBreakpoints } from "../../Filters.utils";
import styles from "./FilterSlider.module.sass";
import SliderContent from "./SliderContent/SliderContent";
import Slider from "/src/UI/Slider/Slider";
import { isFilterActive } from "/src/utils/filters/isFilterActive";

interface FilterSliderProps {
  items: string[];
  filters: string[];
  filtersType: string;
  clickCallback: (result: string) => void;
}

const FilterSlider: FC<FilterSliderProps> = ({
  items,
  filters,
  filtersType,
  clickCallback,
}) => {
  return (
    <Slider
      dataTestId="filter-slider"
      wrapperClassName={styles.slider}
      swiperClassName={styles.swiper}
      breakpoints={sliderBreakpoints}
      prevClassName={styles.prev}
      nextClassName={styles.next}
      type="always-with-buttons"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <SliderContent
            icon={genreIcons[item]}
            text={`${filtersType}:${item}`}
            isActive={isFilterActive(filters, item)}
            clickCallback={() => clickCallback(item)}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default FilterSlider;
