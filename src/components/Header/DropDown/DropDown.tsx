import {FC, ReactElement, useRef} from "react";
import styles from './DropDown.module.sass';
import ProfileDropDown from "/src/components/Header/DropDown/ProfileDropDown/ProfileDropDown";
import NotificationDropDown from "/src/components/Header/DropDown/NotificationDropdown/NotificationDropDown";
import EntertainmentGenresDropDown
    from "/src/components/Header/DropDown/EntertainmentGenresDropDown/EntertainmentGenresDropDown";
import TvDropDown from "/src/components/Header/DropDown/TvDropDown/TvDropDown";
import {DropDownType} from "/src/components/Header/Header";
import {CSSTransition} from "react-transition-group";

interface DropDownProps {
    dropDownType: DropDownType
}


const DropDown: FC<DropDownProps> = ({dropDownType}) => {
    const dropDownContentRef = useRef<HTMLDivElement>(null);

    const getDropDownContent = (typeDropDown: DropDownType): ReactElement => {
        switch (typeDropDown) {
            case 'movies':
            case 'series':
            case 'cartoons':
                return <EntertainmentGenresDropDown selectedGenre={dropDownType}/>;
            case 'tv':
                return <TvDropDown/>;
            case 'notification':
                return <NotificationDropDown/>;
            case 'profile':
                return <ProfileDropDown/>;
        }
    }

    return (
    <CSSTransition classNames={{
        enter: styles["dropdown-enter"],
        enterActive: styles["dropdown-enter-active"],
        exit: styles["dropdown-exit"],
        exitActive: styles["dropdown-exit-active"],
    }} nodeRef={dropDownContentRef} timeout={400} unmountOnExit>
        <div ref={dropDownContentRef} className={styles.dropdown__container}>
            { getDropDownContent(dropDownType) }
        </div>
    </CSSTransition>
    )
}

export default DropDown