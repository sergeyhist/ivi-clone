import {FC} from "react";
import styles from "./TopTenSlide.module.sass";
import Link from "next/link";

interface TopTenSlideProps {
  id: number;
  mainImgUrl: string;
  logoImgUrl: string;
  numberImgUrl: string;
  route: string;
}

const TopTenSlide: FC<TopTenSlideProps> = ({mainImgUrl, logoImgUrl, numberImgUrl, route}) => {
  return (
    <Link className={styles.link} href={route}>
      <article className={styles.slide}>
        <div className={styles.slide__wrapper}>
          <img className={styles.slide__img} src={mainImgUrl} alt="" />
        </div>
        <img className={styles.slide__logo} src={logoImgUrl} alt="" />
        <img className={styles.slide__number} src={numberImgUrl} alt="" />
      </article>
    </Link>
  );
};

export default TopTenSlide;
