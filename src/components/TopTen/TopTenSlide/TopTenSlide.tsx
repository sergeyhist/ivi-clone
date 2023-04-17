import { FC } from "react";
import styles from "./TopTenSlide.module.sass";
import Link from "next/link";

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
          <img className={styles.slide__img + " unselectable"} src={mainImgUrl} alt="" />
        </div>
        <img className={styles.slide__logo + " unselectable"} src={logoImgUrl} alt="" />
        <img className={styles.slide__number + " unselectable"} src={numberImgUrl} alt="" />
      </article>
    </Link>
  );
};

export default TopTenSlide;
