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

const TopTenSlide: FC<TopTenSlideProps> = ({ mainImgUrl, logoImgUrl, numberImgUrl, route }) => {
  return (
    <Link className={styles.link + " unselectable"} href={route}>
      <article className={styles.slide + " unselectable"}>
        <div className={styles.slide__wrapper + " unselectable"}>
          <Image width={304} height={620} className={styles.slide__img + " unselectable"} src={mainImgUrl} alt="" />
        </div>
        <Image width={460} height={200} className={styles.slide__logo + " unselectable"} src={logoImgUrl} alt="" />
        <Image width={32} height={44} className={styles.slide__number + " unselectable"} src={numberImgUrl} alt="" />
      </article>
    </Link>
  );
};

export default TopTenSlide;
