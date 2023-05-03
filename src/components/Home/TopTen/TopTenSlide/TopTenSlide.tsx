import { FC } from "react";
import styles from "./TopTenSlide.module.sass";
import Link from "next/link";
import Image from "next/image";

interface TopTenSlideProps {
  id: number;
  mainImgUrl: string;
  logoImgUrl: string;
  numberImgUrl: string;
  route: string;
}

const TopTenSlide: FC<TopTenSlideProps> = ({
  mainImgUrl,
  logoImgUrl,
  numberImgUrl,
  route,
}) => {
  return (
    <Link className={styles.link} href={route}>
      <article className={styles.slide}>
        <div className={styles.slide__wrapper}>
          <Image
            width={304}
            height={620}
            loading="lazy"
            className={styles.slide__img}
            src={mainImgUrl}
            alt="movieImg"
          />
        </div>
        <Image
          width={460}
          height={200}
          loading="lazy"
          className={styles.slide__logo}
          src={logoImgUrl}
          alt="movieLogo"
        />
        <Image
          width={32}
          height={44}
          loading="lazy"
          className={styles.slide__number}
          src={numberImgUrl}
          alt="number"
        />
      </article>
    </Link>
  );
};

export default TopTenSlide;
