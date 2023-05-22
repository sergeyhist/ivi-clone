import { FC } from "react";
import styles from "./TopTenSlide.module.sass";
import Link from "next/link";
import Image from "next/image";
import { getBackendImage } from "/src/utils/getBackendImg";

interface TopTenSlideProps {
  image: string;
  number: number;
  route: string;
}

const TopTenSlide: FC<TopTenSlideProps> = ({ image, number, route }) => {
  return (
    <Link className={styles.link} href={route}>
      <article className={styles.slide}>
        <div className={styles.slide__wrapper}>
          <Image
            className={styles.slide__img}
            src={getBackendImage(image)}
            alt="movieImg"
            placeholder="blur"
            blurDataURL="/images/placeholder.svg"
            width={304}
            height={620}
          />
        </div>
        <Image
          width={32}
          height={44}
          className={styles.slide__number}
          src={`/images/num${number}.svg`}
          alt="number"
        />
      </article>
    </Link>
  );
};

export default TopTenSlide;
