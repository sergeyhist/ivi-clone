import { FC } from 'react'
import styles from './BannerSlide.module.sass'
import Link from 'next/link';
import ISlide from '../../../types/ISlide';
import { useSwiperSlide } from 'swiper/react';

interface BannerSlideProps {
    slide: ISlide
}

const BannerSlide:FC<BannerSlideProps> = ({slide}) => {

    const swiperSlide = useSwiperSlide();

    return (
        <Link className={styles.slide__link} href={'/'}>
            <article className={swiperSlide.isActive ? styles.slide : `${styles.slide} ${styles.slide_hidden}`}>

                <img className={styles.slide__img} src={slide.bannerUrl} alt="" />

                <img className={styles.slide__img_mobile} src={slide.mobileBannerUrl} alt="" />

                <div className={styles.promo}>
                    {slide.logoUrl && <img className={styles.promo__logo} src={slide.logoUrl} alt="" /> }
                    {slide.title && <h3 className={styles.promo__title}>{slide.title}</h3> }
                    <p className={styles.promo__text}>{slide.description}</p>
                    <button className={styles.promo__button}>Смотреть</button>
                </div>
                
            </article>
        </Link>
    )
}

export default BannerSlide