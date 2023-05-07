import { FC, useEffect, useState } from "react";
import Links from "../Links/Links";
import styles from "./LinkList.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "/src/hooks/redux";
import {
  localizeAndLimitList,
  makeLinksFromSlugs,
  sortSlugs,
} from "/src/components/Layout/Header/DropDown/LinkList/LinkList.utils";

interface LinkListProps {
  selectedGenre: DropDownType;
}

const LinkList: FC<LinkListProps> = ({ selectedGenre }) => {
  const { t } = useTranslation();

  const [genresList, setGenresList] = useState<string[]>();
  const [countriesList, setCountriesList] = useState<string[]>();
  const storedSlugs = useAppSelector((state) => state.slugs);

  const order: DropDownType[] = ["movies", "series", "cartoons"];
  const years: string[] = t(`dropDownCategory:${selectedGenre}.years`, {
    returnObjects: true,
  });

  const countriesSlugs = sortSlugs(
    [...storedSlugs.countriesSlugs],
    order,
    selectedGenre
  );

  const genresSlugs = sortSlugs(
    [...storedSlugs.genresSlugs],
    order,
    selectedGenre
  );

  const genresHrefs = makeLinksFromSlugs(genresSlugs, "genres");
  const countriesHrefs = makeLinksFromSlugs(countriesSlugs, "countries");

  const yearsHrefs = years.map((year, i) => {
    return `year=202${years.length - 1 - i}-202${years.length - 1 - i}`;
  });

  useEffect(() => {
    console.log("action");
    setGenresList(localizeAndLimitList(genresSlugs, "genres", 20, t));
    setCountriesList(localizeAndLimitList(countriesSlugs, "countries", 4, t));
  }, []);

  return (
    <div className={styles.list}>
      <div>
        <Links
          title={t("header:genreTitles.0")}
          links={genresList || []}
          hrefs={genresHrefs}
        />
      </div>
      <div className={styles.list__container}>
        <Links
          title={t("header:genreTitles.1")}
          links={countriesList || []}
          hrefs={countriesHrefs}
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
