import { FC } from "react";
import styles from "./CreatorsList.module.sass";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowModal } from "/src/store/slices/modalsSlice";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ICreator } from "/src/types/ICreator";

interface CreatorsListProps {
  creators: ICreator[];
}

const CreatorsList: FC<CreatorsListProps> = ({ creators }) => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();
  const { t } = useTranslation("creators");
  const { locale } = useRouter();

  const firstTenCreators = creators.slice(0, 10);

  return (
    <section className="container">
      <div className={styles.container}>
        <div className={styles.items}>
          {firstTenCreators.map((creator, i) => {
            return (
              <Link className={styles.item} key={i} href="/">
                <div className={styles.image}>
                  <Image
                    src={"https:" + creator.img || "/images/creators/unnamed.png"}
                    width={88}
                    height={88}
                    alt={creator.first_name_en}
                  ></Image>
                </div>
                <div>
                  <h4 className={styles.title}>
                    {creator[`first_name_${String(locale)}`] || creator.first_name_en}
                  </h4>
                  <h4 className={styles.second__title}>
                    {creator[`last_name_${String(locale)}`] || creator.last_name_en}
                  </h4>
                  <p className={styles.subtitle}>
                    {creator.film_role_slug === "actor" ? t("roles.1") : t("roles.0")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          className={styles.more__button}
          onClick={() => {
            dispatch(
              setShowModal({
                ...showModal,
                showMovieInfoModal: { isShow: true },
              })
            );
          }}
        >
          {t("moreButton")}
        </div>
      </div>
    </section>
  );
};

export default CreatorsList;
