import { FC } from "react";
import LinkList from "../LinkList/LinkList";
import Tabs from "../Tabs/Tabs";
import { DropDownType } from "../../Header.utils";
import styles from "./EntertainmentGenresDropDown.module.sass";
import SideWidget from "../SideWidget/SideWidget";

interface EntertainmentGenresDropDownProps {
  selectedGenre: DropDownType;
}

const EntertainmentGenresDropDown: FC<EntertainmentGenresDropDownProps> = ({
  selectedGenre,
}) => {
  return (
    <>
      <div className={styles.dropdown} data-testid="ent-dropdown">
        <LinkList selectedGenre={selectedGenre} />
        <Tabs selectedGenre={selectedGenre} />
      </div>
      <SideWidget />
    </>
  );
};

export default EntertainmentGenresDropDown;
