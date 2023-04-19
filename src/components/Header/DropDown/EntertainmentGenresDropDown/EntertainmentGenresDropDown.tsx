import {FC} from "react";
import LinkList from "/src/components/Header/DropDown/LinkList/LinkList";
import Tabs from "/src/components/Header/DropDown/Tabs/Tabs";
import {DropDownType} from "/src/components/Header/Header.utils";
import styles from "./EntertainmentGenresDropDown.module.sass";
import SideWidget from "/src/components/Header/DropDown/SideWidget/SideWidget";

interface EntertainmentGenresDropDownProps {
    selectedGenre: DropDownType
}

const EntertainmentGenresDropDown: FC<EntertainmentGenresDropDownProps> = ({selectedGenre}) => {
    return (
        <>
            <div className={styles.dropdown}>
                <LinkList selectedGenre={selectedGenre}/>
                <Tabs selectedGenre={selectedGenre}/>
            </div>
            <SideWidget/>
        </>
    )
}

export default EntertainmentGenresDropDown