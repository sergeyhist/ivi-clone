import {FC} from "react";
import styles from "./SideWidget.module.sass";
import HeaderWidget from "/src/components/Header/HeaderWidget/HeaderWidget";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {IoTvSharp} from "react-icons/io5";
import {useTranslation} from "react-i18next";

const SideWidget: FC = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.widget}>
            <HeaderWidget/>
            <a href="https://www.ivi.ru/pages/tvsmart/" target='_blank'>
                <CustomButton className={styles.button}>
                    <IoTvSharp/>
                    <div>
                        {t("header.headerWidget.smartTvButton")}
                    </div>
                </CustomButton>
            </a>

        </div>
    )
}

export default SideWidget