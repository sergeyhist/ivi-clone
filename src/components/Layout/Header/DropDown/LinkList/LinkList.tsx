import { FC, useEffect, useRef, useState } from "react";
import Links from "../Links/Links";
import styles from "./LinkList.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "/src/hooks/redux";
import {
  getCountriesLinksByCategory,
  localizeAndLimitList,
  makeLinksFromSlugs,
  mockCountries,
  mockGenres,
  mockGenresSlugs,
  mockYears,
  sortSlugs,
} from "/src/components/Layout/Header/DropDown/LinkList/LinkList.utils";

interface LinkListProps {
  selectedGenre: DropDownType;
}

const LinkList: FC<LinkListProps> = ({ selectedGenre }) => {
  const { t } = useTranslation("dropDownCategory");
  const [genresList, setGenresList] = useState<string[]>();
  const previousSelectedGenre = useRef<DropDownType>("");
  const storedSlugs = useAppSelector((state) => state.slugs);

  const order: DropDownType[] = ["movies", "series", "cartoons"];

  const translatedGenres: string[] = t(`${selectedGenre}.genres`, {
    returnObjects: true,
  });
  const genres = !Array.isArray(translatedGenres)
    ? mockGenres
    : translatedGenres;

  const translatedCountries: string[] = t(`${selectedGenre}.countries`, {
    returnObjects: true,
  });
  const countries = !Array.isArray(translatedCountries)
    ? mockCountries
    : translatedCountries;

  const translatedYears: string[] = t(`${selectedGenre}.years`, {
    returnObjects: true,
  });
  const years = !Array.isArray(translatedYears) ? mockYears : translatedYears;

  const genresSlugs = sortSlugs(
    [...storedSlugs.genresSlugs],
    order,
    selectedGenre
  );

  const genresHrefs = makeLinksFromSlugs(
    genresSlugs.length === 0 ? mockGenresSlugs : genresSlugs,
    "genres"
  );

  const yearsHrefs = years.map((year, i) => {
    return `year=202${years.length - 1 - i}-202${years.length - 1 - i}`;
  });

  useEffect(() => {
    if (selectedGenre !== previousSelectedGenre.current) {
      setGenresList(localizeAndLimitList(genresSlugs, "genres", 20, t));
      previousSelectedGenre.current = selectedGenre;
    }
  }, [genresSlugs, selectedGenre, t]);

  return (
    <div className={styles.list}>
      <div>
        <Links
          title={t("header:genreTitles.0")}
          links={genresList?.length ? genresList : genres}
          hrefs={genresHrefs}
        />
      </div>
      <div className={styles.list__container}>
        <Links
          title={t("header:genreTitles.1")}
          links={countries}
          hrefs={getCountriesLinksByCategory(selectedGenre)}
        />
        <Links
          title={t("header:genreTitles.2")}
          links={years}
          hrefs={yearsHrefs}
        />
      </div>
    </div>
  );
};

export default LinkList;
