import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import styles from "./Actions.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { DropDownType } from "/src/components/Header/Header.utils";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowModal } from "/src/store/slices/modalsSlice";
import { useRouter } from "next/router";

interface ActionsProps {
  setDropDownType: Dispatch<SetStateAction<DropDownType>>;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
}

const Actions: FC<ActionsProps> = ({
  setDropDownType,
  setIsDropdownActive,
}) => {
  const { t } = useTranslation();
  const windowSizeWidth = useAppSelector((state) => state.windowSize.width);
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSearchClick = ():void =>{
    dispatch(setShowModal({ ...showModal, showSearchModal: true }))
  }

  return (
    <div className={styles.actions__container}>
      {router.pathname !== "/" ? (
        <div
          onMouseEnter={() => {
            setDropDownType("subscription");
            setIsDropdownActive(true);
          }}
        >
          <CustomButton className={styles.subscription__button} type="red">
            {t("header.freeSubscription")}
          </CustomButton>
        </div>
      ) : (
        <div className={styles.purple__button} onMouseEnter={() => setIsDropdownActive(false)}>
          <CustomButton type="purple">{t("header.subscription")}</CustomButton>
        </div>
      )}

      {windowSizeWidth > 1159 && (
        <div
          className={styles.actions__search}
          onMouseEnter={() => setIsDropdownActive(false)}
          onClick={handleSearchClick}
        >
          <div className={styles.search__icon}>
            <BsSearch />
          </div>
          <div>{t("header.search")}</div>
        </div>
      )}

      <a href="https://www.ivi.ru/profile/pull_notifications" target="_blank">
        <div
          className={styles.actions__notifications}
          onMouseEnter={() => {
            setDropDownType("notification");
            setIsDropdownActive(true);
          }}
        >
          <AiOutlineBell />
        </div>
      </a>
      <a href="https://www.ivi.ru/profile" target="_blank">
        <div
          className={styles.actions__profile}
          onMouseEnter={() => {
            setDropDownType("profile");
            setIsDropdownActive(true);
          }}
        >
          <BiUser />
        </div>
      </a>
    </div>
  );
};

export default Actions;
