import { FC } from "react";
import { useSwiperSlide } from "swiper/react";
import Link from "next/link";
import IBannerSlide from "/src/types/IBannerSlide";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import styles from "./BannerSlide.module.sass";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { getClassName } from "./BannerSlide.utils";

interface BannerSlideProps {
  slide: IBannerSlide;
}

const BannerSlide: FC<BannerSlideProps> = ({ slide }) => {
  const { t } = useTranslation("home");
  const swiperSlide = useSwiperSlide();
  const slideClassName = getClassName(swiperSlide.isActive);

  return (
    <Link className={styles.link} href={slide.route}>
      <article data-testid="banner-slide" className={slideClassName}>
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
          placeholder="blur"
          blurDataURL="/images/placeholder.svg"
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
          {slide.title && <h3 className={styles.promo__title}>{t(slide.title)}</h3>}
          <p className={styles.promo__text}>{t(slide.description)}</p>
          <CustomButton className={styles.promo__button} type="red">
            {t(slide.buttonText)}
          </CustomButton>
        </div>
      </article>
    </Link>
  );
};

export default BannerSlide;
