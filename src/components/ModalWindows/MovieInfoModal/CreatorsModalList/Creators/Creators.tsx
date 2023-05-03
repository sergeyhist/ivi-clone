import { FC, useEffect, useState } from "react";
import { ICreator } from "/src/types/ICreator";
import styles from "./Creators.module.sass";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {declOfNum} from "/src/utils/declOfNum";

interface CreatorsProps {
  creators: ICreator[];
}

const Creators: FC<CreatorsProps> = ({ creators }) => {
  const [showAllCreators, setShowAllCreators] = useState(false);
  const [creatorsToShow, setCreatorsToShow] = useState<ICreator[]>(creators);
  const router = useRouter();
  const { t } = useTranslation("movieInfo");
  const { locale } = useRouter();

  const randNum = (Math.random() * 10) ^ 0;

  useEffect(() => {
    if (creatorsToShow.length > 16 && !showAllCreators)
      setCreatorsToShow(creatorsToShow.slice(0, 16));
  }, [creatorsToShow, setCreatorsToShow, showAllCreators]);

  useEffect(() => {
    if (showAllCreators) setCreatorsToShow(creators);
  }, [showAllCreators, setCreatorsToShow, creators]);

  return (
    <div className={styles.creators__list}>
      {creatorsToShow.map((creator, i) => (
        <Link className={styles.creators__item} key={i} href="/">
          <div className={styles.creators__image}>
            <Image
              src={"https:" + creator.img || "/images/creators/unnamed.png"}
              width={128}
              height={128}
              alt={creator.last_name_en}
            />
          </div>
          <div>
            <h4 className={styles.creators__name}>
              {creator[`first_name_${String(locale)}`] || creator.first_name_en}
            </h4>
            <h4 className={styles.creators__name}>
              {creator[`last_name_${String(locale)}`] || creator.last_name_en}
            </h4>
            <div className={styles.movies_count}>{`${
              router.locale === "en"
                ? randNum.toString() + " " + declOfNum(randNum,["movie","movies","movies"])
                : randNum.toString() + " " + declOfNum(randNum,["фильм","фильма",'фильмов'])
            }`}</div>
          </div>
        </Link>
      ))}
      {creators.length > 16 && !showAllCreators && (
        <CustomButton
          className={styles.button}
          clickCallback={() => setShowAllCreators(true)}
          type="frame"
        >
          {t("showButton")}
        </CustomButton>
      )}
    </div>
  );
};

export default Creators;
