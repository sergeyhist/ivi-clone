import { Dispatch, FC, SetStateAction, useState } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./MultiSelector.module.sass";
import ListItem from "./ListItem/ListItem";
import SliderContent from "./SliderContent/SliderContent";
import { IFilter, IFilterSlide } from "/src/types/IFilter";
import Slider from "/src/UI/Slider/Slider";
import FilterTitle from "../FilterTitle/FilterTitle";

interface FilterBlockProps {
  title: string;
  items: IFilter[];
  sliderItems?: IFilterSlide[];
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}

const MultiSelector: FC<FilterBlockProps> = ({
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

  const activeDropdown = isDropdownActive
    ? ` ${styles.filter__dropdown_active}`
    : "";

  return (
    <div className={styles.filter + " unselectable"}>
      <FilterTitle
        text={title}
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
      />
      <div className={styles.filter__dropdown + activeDropdown}>
        {sliderItems && (
          <Slider
            wrapperClassName={styles.filter__slider}
            swiperClassName={styles.swiper}
            breakpoints={{
              0: { slidesPerView: 3, spaceBetween: 12 },
              743: { slidesPerView: 5, spaceBetween: 12 },
            }}
            prevClassName={styles.prev}
            nextClassName={styles.next}
          >
            {sliderItems.map((item, i) => (
              <SwiperSlide key={i}>
                <SliderContent
                  icon={item.icon as string}
                  text={item.text}
                  isActive={activeFilters.includes(item.slug)}
                  clickCallback={() => {
                    clickHandler(item.slug);
                  }}
                />
              </SwiperSlide>
            ))}
          </Slider>
        )}
        <ul className={styles.filter__list}>
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

export default MultiSelector;
