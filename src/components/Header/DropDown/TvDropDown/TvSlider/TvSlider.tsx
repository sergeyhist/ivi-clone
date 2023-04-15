import {FC, useState} from "react";
import styles from "./TvSlider.module.sass";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import SliderButtons from "/src/UI/SliderButtons/SliderButtons";
import {Swiper as SwiperEvent} from "swiper/types";
import ITVSlide from "/src/types/ITVSlide";

interface TvSliderProps{
    slides: ITVSlide[]
}

const TvSlider:FC<TvSliderProps> = ({slides})=>{
    const [buttonsPosition, setButtonsPosition] = useState({prev: false, next: true});

    const handleSlideChange = (event: SwiperEvent): void => {
        setButtonsPosition({
            prev: !event.isBeginning,
            next: !event.isEnd,
        })
    }

    return(
        <Swiper
            slidesPerGroup={5}
            className={styles.channels__slider}
            spaceBetween={0}
            slidesPerView={6}
            onSlideChange={handleSlideChange}
        >
            {
                slides.map(slide =>
                    <SwiperSlide key={slide.id}>
                        <a href={slide.link} target='_blank'>
                            <Image className={styles.channels__slider_item + " unselectable"}
                                   src={slide.imageUrl} alt="slider item" width={88} height={58}/>
                        </a>
                    </SwiperSlide>
                )
            }
            <div className={styles.channels__slider_shadow}></div>
            <SliderButtons className={styles.channels__slider_buttons} state={buttonsPosition}/>
        </Swiper>
    )
}

export default TvSlider