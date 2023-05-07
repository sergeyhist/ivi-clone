import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { genreIcons, sliderBreakpoints } from "../../Filters.utils";
import styles from "./FilterSlider.module.sass";
import SliderContent from "./SliderContent/SliderContent";
import { IFilters } from "/src/types/IFilter";
import Slider from "/src/UI/Slider/Slider";
import { isFilterActive } from "/src/utils/filters/isFilterActive";

interface FilterSliderProps {
  items: string[];
  filters: IFilters;
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
      wrapperClassName={styles.slider}
      swiperClassName={styles.swiper}
      breakpoints={sliderBreakpoints}
      prevClassName={styles.prev}
      nextClassName={styles.next}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <SliderContent
            icon={genreIcons[item]}
            text={`${filtersType}:${item}`}
            isActive={isFilterActive(filters[filtersType], item)}
            clickCallback={() => clickCallback(item)}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default FilterSlider;
