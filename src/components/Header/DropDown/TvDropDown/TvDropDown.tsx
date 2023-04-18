import {FC} from "react";
import styles from './TvDropDown.module.sass';
import {tvSlides, tvSportSlides} from "/src/components/Header/DropDown/TvDropDown/TvDropDown.utils";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import TvLinks from "/src/components/Header/DropDown/TvDropDown/TvLinks/TvLinks";
import TvSlider from "/src/components/Header/DropDown/TvDropDown/TvSlider/TvSlider";
import SideWidget from "/src/components/Header/DropDown/SideWidget/SideWidget";

const TvDropDown: FC = () => {
    return (
        <>
            <div className={styles.tv__left_content}>
                <TvLinks/>
                <a href="https://www.ivi.ru/tvplus/tv-schedule-today" target="_blank">
                    <CustomButton className={styles.tv__links_button}>Телепрограмма</CustomButton>
                </a>
            </div>
            <div className={styles.channels__container}>
                <div className={styles.channels__slider_row}>
                    <h2 className={styles.channels__slider_title}>Федеральные каналы</h2>
                    <TvSlider slides={tvSlides}/>
                </div>
                <div className={styles.channels__slider_row}>
                    <h2 className={styles.channels__slider_title}>Спортивные каналы</h2>
                    <TvSlider slides={tvSportSlides}/>
                </div>
            </div>
            <SideWidget/>
        </>
    )
}

export default TvDropDown