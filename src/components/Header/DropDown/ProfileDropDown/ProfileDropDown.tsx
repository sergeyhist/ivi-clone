import {FC} from "react";
import styles from './ProfileDropDown.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {profileDropDownCards} from "/src/locales/profileDropDownData";
import {profileLinks} from "/src/components/Header/DropDown/ProfileDropDown/ProfileDropDown.utils";

const ProfileDropDown: FC = () => {
    return(
        <div className={styles.profile__dropdown_container}>
            <div className={styles.profile__main}>
                {
                    profileDropDownCards.icons.map((icon,i)=>{
                        return (
                            <a className={styles.profile__main_card} href={profileLinks[i]} target='_blank' key={i}>
                                <div className={styles.card__icon}>{icon}</div>
                                <div className={styles.card__text}>{profileDropDownCards.cardsText[i]}</div>
                            </a>
                        )
                        }
                    )
                }
            </div>
            <div className={styles.profile__side}>
                <CustomButton type='red' width='95%' height='40px' padding='9px 15px'>
                    <div>
                        Войти или зарегестрироватся
                    </div>
                </CustomButton>
                <div className={styles.profile__side_links}>
                    <a href="https://www.ivi.ru/profile/settings" target='_blank'>Настройки</a>
                    <a href="https://ask.ivi.ru/" target='_blank'>Помощь</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropDown