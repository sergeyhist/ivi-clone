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
        className={swiperSlide.isActive ? styles.slide : `${styles.slide} ${styles.slide_hidden}`}
      >
        <Image
          width={1216}
          height={524}
          className={styles.slide__img}
          src={slide.bannerUrl}
          alt="banner"
          placeholder="blur"
          blurDataURL="/images/placeholder.svg"
        />

        <Image
          width={1216}
          height={1358}
          className={styles.slide__img_mobile}
          src={slide.mobileBannerUrl}
          alt="mobileBanner"
        />

        <div className={styles.promo}>
          {slide.logoUrl && (
            <Image
              width={487}
              height={200}
              className={styles.promo__logo}
              src={slide.logoUrl}
              alt="logo"
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
