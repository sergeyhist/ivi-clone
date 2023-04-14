import {FC} from "react";
import styles from './TvDropDown.module.sass';
import {Navigation} from "swiper";
import { Swiper } from 'swiper/react';
import {tvSlides} from "/src/components/Header/DropDown/TvDropDown/TvDropDown.utils";
import {SwiperSlide} from "swiper/react";

const TvDropDown: FC = () => {
    return (
        <>
            <div className={styles.tv__left_content}>
                <div className={styles.tv__links}>
                    <h2 className={styles.tv__links__title}>ТВ онлайн</h2>
                    <ul className={styles.tv__links__list}>
                        <li className={styles.list__item}>
                            <a href="https://www.ivi.ru/tvplus" target='_blank'>ТВ-каналы</a>
                        </li>
                        <li className={styles.list__item}>
                            <a href="https://www.ivi.ru/tvplus/razvlekatelnoe" target='_blank'>Развлекательное</a>
                        </li>
                        <li className={styles.list__item}>
                            <a href="https://www.ivi.ru/tvplus/deti" target='_blank'>Дети</a>
                        </li>
                        <li className={styles.list__item}>
                            <a href="https://www.ivi.ru/tvplus/sport" target='_blank'>Спортивное ТВ</a>
                        </li>
                        <li className={styles.list__item}>
                            <a href="https://www.ivi.ru/tvplus/documentalnoe" target='_blank'>Документальное</a>
                        </li>
                    </ul>
                </div>
                <button className={styles.tv__links_button}>Телепрограмма</button>
            </div>
            <div className={styles.channels__container}>
                <div>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={15}
                        slidesPerView={1.000001}
                        navigation={true}
                        loop={true}
                        centeredSlides={true}
                    >
                        {
                            tvSlides.map(slide=>
                            <SwiperSlide key={slide.id}>
                                <img src={slide.imageUrl} alt="" />
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default TvDropDown