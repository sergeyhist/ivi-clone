import { FC } from "react";
import Links from "../Links/Links";
import styles from "./LinkList.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "/src/hooks/redux";
import {
  getCountriesLinksByCategory,
  makeLinksFromSlugs,
  sortSlugs,
  yearsList,
} from "/src/components/Layout/Header/DropDown/LinkList/LinkList.utils";
import { genresListSlugs } from "/src/utils/mocks/genres";

interface LinkListProps {
  selectedGenre: DropDownType;
}

const LinkList: FC<LinkListProps> = ({ selectedGenre }) => {
  const { t } = useTranslation(["genres", "dropDownCategory", "header"]);
  const { genresSlugs } = useAppSelector((state) => state.slugs);

  const order: DropDownType[] = ["movies", "series", "cartoons"];

  const sortedGenresSlugs = sortSlugs(
    [...(genresSlugs.length > 0 ? genresSlugs : genresListSlugs).slice(0, 20)],
    order,
    selectedGenre
  );
  const translatedGenres: string[] = sortedGenresSlugs.map((genre) =>
    t(`genres:${genre}`)
  );
  const genresHrefs = makeLinksFromSlugs(sortedGenresSlugs, "genres");

  const translatedYears: string[] = yearsList.map((year) =>
    t(`dropDownCategory:years.${selectedGenre}`, { year: year })
  );
  const yearsHrefs = yearsList.map((year) => {
    return `year=${year}-${year}`;
  });

  const countriesList = getCountriesLinksByCategory(selectedGenre);
  const countriesHrefs = Object.keys(countriesList).map(
    (country) => countriesList[country]
  );
  const translatedCountries: string[] = Object.keys(countriesList).map(
    (country) => t(`dropDownCategory:countries.${country}`)
  );

  return (
    <div className={styles.list}>
      <div>
        <Links
          title={t("header:genreTitles.0")}
          links={translatedGenres}
          hrefs={genresHrefs}
        />
      </div>
      <div className={styles.list__container}>
        <Links
          title={t("header:genreTitles.1")}
          links={translatedCountries}
          hrefs={countriesHrefs}
        />
        <Links
          title={t("header:genreTitles.2")}
          links={translatedYears}
          hrefs={yearsHrefs}
        />
      </div>
    </div>
  );
};

export default LinkList;
