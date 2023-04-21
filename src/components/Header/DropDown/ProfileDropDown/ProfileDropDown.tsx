import {FC} from "react";
import styles from './ProfileDropDown.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {cardsIcons, profileLinks} from "/src/components/Header/DropDown/ProfileDropDown/ProfileDropDown.utils";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "/src/hooks/redux";
import {setShowAuthModal} from "/src/store/slices/authSlice";

const ProfileDropDown: FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const handleAuthClick = ():void =>{
        dispatch(setShowAuthModal(true));
    }

    return (
        <div className={styles.profile__dropdown_container}>

            <div className={styles.profile__main}>
                {
                    profileLinks.map((link, i) => {
                            return (
                                <a className={styles.profile__main_card} href={link} target='_blank' key={i}>
                                    <div className={styles.card__icon}>{cardsIcons[i]}</div>
                                    <div className={styles.card__text}>{t(`header.profile.cardsText.${i}`)}</div>
                                </a>
                            )
                        }
                    )
                }
            </div>
            <div className={styles.profile__side}>
                <CustomButton clickCallback={handleAuthClick} type='red'>
                    <div>
                        {t("header.profile.auth")}
                    </div>
                </CustomButton>
                <div className={styles.profile__side_links}>
                    <a href="https://www.ivi.ru/profile/settings" target='_blank'>{t("header.profile.settings.0")}</a>
                    <a href="https://ask.ivi.ru/" target='_blank'>{t("header.profile.settings.1")}</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropDown