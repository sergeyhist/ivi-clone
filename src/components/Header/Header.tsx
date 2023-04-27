import { FC, useRef, useState, MouseEvent } from "react";
import styles from "./Header.module.sass";
import Navigation from "/src/components/Header/Navigation/Navigation";
import Actions from "/src/components/Header/Actions/Actions";
import DropDown from "/src/components/Header/DropDown/DropDown";
import SearchModal from "/src/components/SearchModal/SearchModal";
import { CSSTransition } from "react-transition-group";
import { DropDownType } from "/src/components/Header/Header.utils";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import Image from "next/image";
import AuthModal from "/src/components/AuthModal/AuthModal";
import createAppPortal from "/src/utils/createAppPortal";
import { setShowModal } from "/src/store/slices/modalsSlice";
import Link from "next/link";

const Header: FC = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [dropDownType, setDropDownType] = useState<DropDownType>("");
  const showModal = useAppSelector((state) => state.showModal);
  const windowSizeWidth = useAppSelector((state) => state.windowSize.width);
  const dispatch = useAppDispatch();

  const refDropDown = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);

  const handleHeaderMouseOver = (e: MouseEvent): void => {
    if (
      !navigationRef.current?.contains(e.target as Node) &&
      !refDropDown.current?.contains(e.target as Node) &&
      !actionRef.current?.contains(e.target as Node)
    ) {
      setIsDropdownActive(false);
    }
  };

  return (
    <header
      className={`${styles.header} container`}
      onMouseOver={handleHeaderMouseOver}
      onMouseLeave={() => setIsDropdownActive(false)}
    >
      {showModal.showAuthModal &&
        createAppPortal(
          <AuthModal
            closeCallback={() =>
              dispatch(setShowModal({ ...showModal, showAuthModal: false }))
            }
          />
        )}
      {showModal.showSearchModal &&
        createAppPortal(
          <SearchModal
            closeCallback={() =>
              dispatch(setShowModal({ ...showModal, showSearchModal: false }))
            }
          />
        )}
      <div
        className={`${styles.header__content} ${
          isDropdownActive && windowSizeWidth > 1160
            ? styles.header__content_active
            : ""
        }`}
      >
        <div className={styles.header__navigation}>
          {windowSizeWidth > 599 && (
            <Link href="/" className={styles.header__logo}>
              <Image
                src="/images/iviLogo.svg"
                alt="ivi logo"
                width={77}
                height={56}
              />
            </Link>
          )}
          <div ref={navigationRef} className={styles.header__navigation_layout}>
            {windowSizeWidth > 1160 && (
              <Navigation
                setIsDropdownActive={setIsDropdownActive}
                setDropDownType={setDropDownType}
              />
            )}
          </div>
        </div>
        <div ref={actionRef} className={styles.header__action_layout}>
          <Actions setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType} />
        </div>
      </div>
      <CSSTransition
        classNames={{
          enter: styles["header__dropdown-enter"],
          enterActive: styles["header__dropdown-enter-active"],
          exit: styles["header__dropdown-exit"],
          exitActive: styles["header__dropdown-exit-active"],
        }}
        nodeRef={refDropDown}
        in={isDropdownActive}
        timeout={400}
        unmountOnExit
      >
        <div ref={refDropDown} className={`${styles.header__dropdown}`}>
          <DropDown dropDownType={dropDownType} />
        </div>
      </CSSTransition>
    </header>
  );
};

export default Header;
