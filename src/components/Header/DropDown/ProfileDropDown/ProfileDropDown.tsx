import {FC} from "react";
import styles from './ProfileDropDown.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {profileDropDownCards} from "/src/locales/profileDropDownData";

const ProfileDropDown: FC = () => {
    return(
        <div className={styles.profile__dropdown_container}>
            <div className={styles.profile__main}>
                {
                    profileDropDownCards.icons.map((icon,i)=>{
                        return (
                            <div className={styles.profile__main_card} key={i}>
                                <div className={styles.card__icon}>{icon}</div>
                                <div className={styles.card__text}>{profileDropDownCards.cardsText[i]}</div>
                            </div>
                        )
                        }
                    )
                }
            </div>
            <div className={styles.profile__side}>
                <CustomButton type='red' width='324px' height='20px' padding='9px 15px'>
                    Войти или зарегестрироватся
                </CustomButton>
                <div className={styles.profile__side_links}>
                    <a href="" target='_blank'>Настройки</a>
                    <a href="" target='_blank'>Помощь</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropDown