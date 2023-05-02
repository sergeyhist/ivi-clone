import { FC } from "react";
import { useSwiperSlide } from "swiper/react";
import Link from "next/link";
import IBannerSlide from "/src/types/IBannerSlide";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import styles from "./BannerSlide.module.sass";
import Image from "next/image";

interface BannerSlideProps {
  slide: IBannerSlide;
}

const BannerSlide: FC<BannerSlideProps> = ({ slide }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <Link className={styles.link} href={"/"}>
      <article
        className={
          swiperSlide.isActive ? styles.slide : `${styles.slide} ${styles.slide_hidden}`
        }
      >
        <img
          width={1216}
          height={524}
          className={styles.slide__img}
          src="https://sun9-13.userapi.com/impg/ulQhEIFwIBtLA5-9VZB4UTEgB0r2DLCfM2msxA/L0mIH4z_yCo.jpg?size=720x395&quality=96&sign=d2e9cc50c8a59cad8cf09b41a92c47ba&c_uniq_tag=qJOJ3szHFJAfuN5sG2WeeEe7QXnBwFyOGoWu4-Q8aeg&type=album"
          alt=""
        />

        <Image
          width={1216}
          height={1358}
          className={styles.slide__img_mobile}
          src={slide.mobileBannerUrl}
          alt=""
        />

        <div className={styles.promo}>
          {slide.logoUrl && (
            <Image
              width={487}
              height={200}
              className={styles.promo__logo}
              src={slide.logoUrl}
              alt=""
            />
          )}
          {slide.title && <h3 className={styles.promo__title}>{slide.title}</h3>}
          <p className={styles.promo__text}>{slide.description}</p>
          <CustomButton className={styles.promo__button} type="red">
            {slide.buttonText}
          </CustomButton>
        </div>
      </article>
    </Link>
  );
};

export default BannerSlide;
