import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import styles from "./Actions.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import {
  setShowAuthModal,
  setShowSearchModal,
} from "/src/store/slices/modalsSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { setAuth } from "/src/store/slices/authSlice";
import { notify } from "/src/utils/defaultToast";

interface ActionsProps {
  setDropDownType: Dispatch<SetStateAction<DropDownType>>;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
}

const Actions: FC<ActionsProps> = ({
  setDropDownType,
  setIsDropdownActive,
}) => {
  const { t } = useTranslation("header");
  const windowSizeWidth = useAppSelector((state) => state.windowSize.width);
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSearchClick = (): void => {
    dispatch(setShowSearchModal(true));
  };

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    dispatch(setAuth({ userEmail: "", isLogged: false }));
    notify(t("profile.logoutMessage"), 'logout');
  };

  const handleProfileClick = (): void => {
    if (!authState.isLogged) dispatch(setShowAuthModal(true));
  };

  return (
    <div className={styles.container} data-testid="actions-container">
      {router.pathname !== "/" ? (
        <Link href="https://www.ivi.ru/subscribe" target="_blank" data-testid="subscription-link">
          <div
            onMouseEnter={() => {
              setDropDownType("subscription");
              setIsDropdownActive(true);
            }}
            data-testid='subscription-content'
          >
            <CustomButton className={styles.subscription__button} type="red">
              {t("freeSubscription")}
            </CustomButton>
          </div>
        </Link>
      ) : (
        <div
          className={styles.purple__button}
          onMouseEnter={() => setIsDropdownActive(false)}
          data-testid="subscription-button"
        >
          <CustomButton type="purple">{t("subscription")}</CustomButton>
        </div>
      )}

      {windowSizeWidth > 1159 && (
        <div
          className={styles.search}
          onMouseEnter={() => setIsDropdownActive(false)}
          onClick={handleSearchClick}
          data-testid={"search-link"}
        >
          <div className={styles.icon}>
            <BsSearch />
          </div>
          <div>{t("search")}</div>
        </div>
      )}

      <Link
        href="https://www.ivi.ru/profile/pull_notifications"
        target="_blank"
      >
        <div
          className={styles.notifications}
          onMouseEnter={() => {
            setDropDownType("notification");
            setIsDropdownActive(true);
          }}
          data-testid="notification-button"
        >
          <AiOutlineBell />
        </div>
      </Link>
      <div
        className={styles.profile}
        onClick={handleProfileClick}
        onMouseEnter={() => {
          setDropDownType("profile");
          setIsDropdownActive(true);
        }}
        data-testid="auth-button"
      >
        <BiUser />
      </div>
      {authState.isLogged && (
          <CustomButton type="red" clickCallback={handleLogout} dataTestId={"logout-button"}>
            <FiLogOut />
          </CustomButton>
      )}
    </div>
  );
};

export default Actions;
