import { FC } from "react";
import styles from "./ProfileDropDown.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { cardsIcons, profileLinks } from "./ProfileDropDown.utils";
import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowAuthModal } from "/src/store/slices/modalsSlice";
import Link from "next/link";

const ProfileDropDown: FC = () => {
  const { t } = useTranslation("header");
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleAuthClick = (): void => {
    dispatch(setShowAuthModal(true));
  };

  return (
    <div className={styles.profile__dropdown_container} data-testid="profile-dropdown">
      <div className={styles.profile__main}>
        {profileLinks.map((link, i) => {
          return (
            <Link
              className={styles.profile__main_card}
              href={link}
              target="_blank"
              key={i}
            >
              <div className={styles.card__icon}>{cardsIcons[i]}</div>
              <div className={styles.card__text}>
                {t(`profile.cardsText.${i}`)}
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.profile__side}>
        {authState.isLogged ? (
          <div className={styles.profile__side_logs} data-testid="user-email">
            <div>{authState.userEmail}</div>
          </div>
        ) : (
          <CustomButton clickCallback={handleAuthClick} type="red" dataTestId="auth-btn">
            <div>{t("profile.auth")}</div>
          </CustomButton>
        )}

        <div className={styles.profile__side_links}>
          <Link href="https://www.ivi.ru/profile/settings" target="_blank">
            {t("profile.settings.0")}
          </Link>
          <Link href="https://ask.ivi.ru/" target="_blank">
            {t("profile.settings.1")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
