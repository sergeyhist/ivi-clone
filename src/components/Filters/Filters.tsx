import { FC, useState } from "react";
import FilterBlock from "./FilterBlock/FilterBlock";
import styles from "./Filters.module.sass";
import { genreFilterItems, genreFilterSlides } from "./Filters.utils";

const Filters: FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  return (
    <section className={styles.filters}>
      <FilterBlock
        type="multi"
        title="Жанры"
        items={genreFilterItems}
        sliderItems={genreFilterSlides}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
    </section>
  );
};

export default Filters;
