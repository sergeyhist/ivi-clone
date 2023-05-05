import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import styles from "./Actions.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { DropDownType } from "../Header.utils";
import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowModal } from "/src/store/slices/modalsSlice";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSearchClick = (): void => {
    dispatch(setShowModal({ ...showModal, showSearchModal: true }));
  };

  const handleProfileClick = (): void => {
    dispatch(setShowModal({ ...showModal, showAuthModal: true }));
  };
  return (
    <div className={styles.container}>
      {router.pathname !== "/" ? (
        <Link href="https://www.ivi.ru/subscribe" target="_blank">
          <div
            onMouseEnter={() => {
              setDropDownType("subscription");
              setIsDropdownActive(true);
            }}
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
          >
            <CustomButton type="purple">{t("subscription")}</CustomButton>
          </div>
      )}

      {windowSizeWidth > 1159 && (
        <div
          className={styles.search}
          onMouseEnter={() => setIsDropdownActive(false)}
          onClick={handleSearchClick}
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
        >
          <BiUser />
        </div>
    </div>
  );
};

export default Actions;
