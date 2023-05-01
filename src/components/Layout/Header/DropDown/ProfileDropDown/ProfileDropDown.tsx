import { FC } from "react";
import styles from "./ProfileDropDown.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { cardsIcons, profileLinks } from "./ProfileDropDown.utils";
import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowModal } from "/src/store/slices/modalsSlice";

const ProfileDropDown: FC = () => {
  const { t } = useTranslation("header");
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  const handleAuthClick = (): void => {
    dispatch(setShowModal({ ...showModal, showAuthModal: true }));
  };

  return (
    <div className={styles.profile__dropdown_container}>
      <div className={styles.profile__main}>
        {profileLinks.map((link, i) => {
          return (
            <a
              className={styles.profile__main_card}
              href={link}
              target="_blank"
              key={i}
            >
              <div className={styles.card__icon}>{cardsIcons[i]}</div>
              <div className={styles.card__text}>
                {t(`profile.cardsText.${i}`)}
              </div>
            </a>
          );
        })}
      </div>
      <div className={styles.profile__side}>
        <CustomButton clickCallback={handleAuthClick} type="red">
          <div>{t("profile.auth")}</div>
        </CustomButton>
        <div className={styles.profile__side_links}>
          <a href="https://www.ivi.ru/profile/settings" target="_blank">
            {t("profile.settings.0")}
          </a>
          <a href="https://ask.ivi.ru/" target="_blank">
            {t("profile.settings.1")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
