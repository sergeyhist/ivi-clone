import { FC, useEffect, useState } from "react";
import { ICreator } from "/src/types/ICreator";
import styles from "./Creators.module.sass";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";
import {
  declensionMoviesEn,
  declensionMoviesRu,
} from "/src/components/ModalWindows/MovieInfoModal/CreatorsModalList/Creators/Creators.utils";
import { useRouter } from "next/router";

interface CreatorsProps {
  creators: ICreator[];
}

const Creators: FC<CreatorsProps> = ({ creators }) => {
  const [showAllCreators, setShowAllCreators] = useState(false);
  const [creatorsToShow, setCreatorsToShow] = useState<ICreator[]>(creators);
  const router = useRouter();
  const { t } = useTranslation("movieInfo");

  useEffect(() => {
    if (creatorsToShow.length > 16 && !showAllCreators)
      setCreatorsToShow(creatorsToShow.slice(0, 16));
  }, [creatorsToShow, setCreatorsToShow, showAllCreators]);

  useEffect(() => {
    if (showAllCreators) setCreatorsToShow(creators);
  }, [showAllCreators, setCreatorsToShow, creators]);

  return (
    <div>
      <div className={styles.creators__list}>
        {creatorsToShow.map((creator, i) => (
          <Link className={styles.creators__item} key={i} href="/">
            <div className={styles.creators__image}>
              <Image
                src={creator.imageUrl || "/images/creators/unnamed.png"}
                width={128}
                height={128}
                alt={creator.lastName}
              />
            </div>
            <div>
              <h4 className={styles.creators__name}>{creator.firstName}</h4>
              <h4 className={styles.creators__name}>{creator.lastName}</h4>
              <div className={styles.movies_count}>{`${
                router.locale === "en"
                  ? declensionMoviesEn((Math.random() * 10) ^ 0)
                  : declensionMoviesRu((Math.random() * 10) ^ 0)
              }`}</div>
            </div>
          </Link>
        ))}

      </div>
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
