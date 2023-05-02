import { FC, useEffect, useState } from "react";
import Links from "../Links/Links";
import styles from "./LinkList.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import { IGenre } from "/src/types/IGenre";
import axios from "axios";

interface LinkListProps {
  selectedGenre: DropDownType;
}

const LinkList: FC<LinkListProps> = ({ selectedGenre }) => {
  const { t } = useTranslation(["header", "dropDownCategory", "genres"]);
  const [genresList, setGenresList] = useState<string[]>([]);
  const countries: string[] = t(`dropDownCategory:${selectedGenre}.countries`, {
    returnObjects: true,
  });
  const years: string[] = t(`dropDownCategory:${selectedGenre}.years`, {
    returnObjects: true,
  });

  useEffect(() => {
    const getAllGenres = async (): Promise<void> => {
      try {
        const response = await axios.get<IGenre[]>(
          "http://85.237.34.125:4000/genres"
        );
        setGenresList(
          response.data
            .map((genre: IGenre) => {
              return t(`genres:${genre.slug}`);
            })
            .slice(0, 20)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getAllGenres()
    console.log("o");

  }, [genresList,setGenresList,t]);

  return (
    <div className={styles.list}>
      <div>
        <Links title={t("header:genreTitles.0")} links={genresList} />
      </div>
      <div className={styles.list__container}>
        <Links title={t("genreTitles.1")} links={countries} />
        <Links title={t("genreTitles.2")} links={years} />
      </div>
    </div>
  );
};

export default LinkList;
