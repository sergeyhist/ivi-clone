import {FC, useState} from "react";
import styles from './TvDropDown.module.sass';
import {Swiper} from 'swiper/react';
import {tvSlides} from "/src/components/Header/DropDown/TvDropDown/TvDropDown.utils";
import {SwiperSlide} from "swiper/react";
import SliderButtons from "/src/UI/SliderButtons/SliderButtons";
import {Swiper as SwiperEvent} from "swiper/types";

const TvDropDown: FC = () => {
    const [buttonsPosition, setButtonsPosition] = useState({prev: false, next: true});

    const handleSlideChange = (event: SwiperEvent): void => {
        setButtonsPosition({
            prev: !event.isBeginning,
            next: !event.isEnd,
        })
    }

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
                <div className={styles.channels__slider_row}>
                    <Swiper
                        className={styles.channels__slider}
                        spaceBetween={1}
                        slidesPerView={5}
                        onSlideChange={handleSlideChange}
                    >
                        {
                            tvSlides.map(slide =>
                                <SwiperSlide key={slide.id}>
                                    <img src={slide.imageUrl} alt=""/>
                                </SwiperSlide>
                            )
                        }
                        <SliderButtons state={buttonsPosition}/>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default TvDropDown