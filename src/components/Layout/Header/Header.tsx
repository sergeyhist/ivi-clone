import { FC, useRef, useState, MouseEvent } from "react";
import styles from "./Header.module.sass";
import DropDown from "./DropDown/DropDown";
import { CSSTransition } from "react-transition-group";
import { DropDownType } from "./Header.utils";
import { useAppSelector } from "/src/hooks/redux";
import ActionLayout from "/src/components/Layout/Header/ActionLayout/ActionLayout";
import NavigationLayout from "/src/components/Layout/Header/NavigationLayout/NavigationLayout";
import ModalContainer from "/src/components/Layout/Header/ModalContainer/ModalContainer";
import Container from "/src/UI/Container/Container";

const Header: FC = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [dropDownType, setDropDownType] = useState<DropDownType>("");
  const windowSizeWidth = useAppSelector((state) => state.windowSize.width);
  const headerContentClassName =
    isDropdownActive && windowSizeWidth > 1160
      ? styles.header__content_active
      : "";

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
      onMouseOver={handleHeaderMouseOver}
      onMouseLeave={() => setIsDropdownActive(false)}
      data-testid="header"
    >
      <Container>
        <ModalContainer />
        <div
          className={`${styles.header__content} ${headerContentClassName}`}
          data-testid="header-content"
        >
          <NavigationLayout
            navigationRef={navigationRef}
            setIsDropdownActive={setIsDropdownActive}
            setDropDownType={setDropDownType}
          />
          <ActionLayout
            actionRef={actionRef}
            setDropDownType={setDropDownType}
            setIsDropdownActive={setIsDropdownActive}
          />
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
      </Container>
    </header>
  );
};

export default Header;
