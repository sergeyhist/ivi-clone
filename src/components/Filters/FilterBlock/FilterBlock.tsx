import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./FilterBlock.module.sass";
import ListItem from "./ListItem/ListItem";
import SliderContent from "./SliderContent/SliderContent";
import { IFilter, IFilterSlide } from "/src/types/IFilter";
import Slider from "/src/UI/Slider/Slider";

interface FilterBlockProps {
  type: "multi" | "single";
  title: string;
  items: IFilter[];
  sliderItems?: IFilterSlide[];
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}

const FilterBlock: FC<FilterBlockProps> = ({
  type,
  title,
  items,
  sliderItems,
  activeFilters,
  setActiveFilters,
}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickHandler = (slug: string) => {
    if (activeFilters.includes(slug)) {
      setActiveFilters(activeFilters.filter((el) => el !== slug));
    } else {
      setActiveFilters([...activeFilters, slug]);
    }
  };

  const activeTitle = isDropdownActive ? ` ${styles.filter__title_active}` : "";
  const activeArrow = isDropdownActive ? ` ${styles.filter__arrow_active}` : "";
  const activeDropdown = isDropdownActive
    ? ` ${styles.filter__dropdown_active}`
    : "";

  return (
    <div className={styles.filter + " unselectable"}>
      <div
        onClick={() => {
          setIsDropdownActive((curr) => !curr);
        }}
        className={styles.filter__title + activeTitle}
      >
        {title}
        <span className={styles.filter__arrow + activeArrow}></span>
      </div>
      <div className={styles.filter__dropdown + activeDropdown}>
        {sliderItems && (
          <Slider
            rowClassName={styles.filter__slider}
            swiperClassName={styles.swiper}
            breakpoints={{
              0: { slidesPerView: 3, spaceBetween: 12 },
              743: { slidesPerView: 5, spaceBetween: 12 },
            }}
            prevClassName={styles.filter__prev}
            nextClassName={styles.filter__next}
          >
            {sliderItems.map((item, i) => (
              <SwiperSlide key={i}>
                <SliderContent icon={item.icon as string} text={item.text} />
              </SwiperSlide>
            ))}
          </Slider>
        )}
        <ul className={styles.filter__items}>
          {items.map((item, i) => (
            <ListItem
              key={i}
              text={item.text}
              isActive={activeFilters.includes(item.slug)}
              clickCallback={() => {
                clickHandler(item.slug);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterBlock;
