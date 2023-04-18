import {FC} from "react";
import styles from "./SideWidget.module.sass";
import HeaderWidget from "/src/components/Header/HeaderWidget/HeaderWidget";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {IoTvSharp} from "react-icons/io5";

const SideWidget: FC = () => {
    return (
        <div className={styles.widget}>
            <HeaderWidget/>
            <a href="https://www.ivi.ru/pages/tvsmart/" target='_blank'>
                <CustomButton className={styles.button}>
                    <IoTvSharp/>
                    <div>
                        Смотреть на Smart TV
                    </div>
                </CustomButton>
            </a>

        </div>
    )
}

export default SideWidget