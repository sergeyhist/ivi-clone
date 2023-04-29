import { FC, ReactNode, useRef } from "react";
import styles from "./DropDown.module.sass";
import ProfileDropDown from "./ProfileDropDown/ProfileDropDown";
import NotificationDropDown from "./NotificationDropdown/NotificationDropDown";
import EntertainmentGenresDropDown from "./EntertainmentGenresDropDown/EntertainmentGenresDropDown";
import TvDropDown from "./TvDropDown/TvDropDown";
import { DropDownType } from "../Header.utils";
import { useAppSelector } from "/src/hooks/redux";
import { RootState } from "/src/store";
import SubscriptionDropdown from "./SubscriptionDropdown/SubscriptionDropdown";

interface DropDownProps {
  dropDownType: DropDownType;
}

const DropDown: FC<DropDownProps> = ({ dropDownType }) => {
  const dropDownContentRef = useRef<HTMLDivElement>(null);
  const windowSizeWidth = useAppSelector(
    (state: RootState) => state.windowSize.width
  );

  const getDropDownContent = (typeDropDown: DropDownType): ReactNode => {
    switch (typeDropDown) {
      case "movies":
      case "series":
      case "cartoons":
        return <EntertainmentGenresDropDown selectedGenre={dropDownType} />;
      case "tv":
        return <TvDropDown />;
      case "notification":
        return <NotificationDropDown />;
      case "profile":
        return <ProfileDropDown />;
      case "subscription":
        return <SubscriptionDropdown />;
    }
  };

  return (
    <>
      {windowSizeWidth > 1160 && (
        <div ref={dropDownContentRef} className={styles.dropdown__container}>
          {getDropDownContent(dropDownType)}
        </div>
      )}
    </>
  );
};

export default DropDown;
