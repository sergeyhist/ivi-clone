import {FC} from "react";
import LinkList from "/src/components/Header/DropDown/LinkList/LinkList";
import Tabs from "/src/components/Header/DropDown/Tabs/Tabs";
import {DropDownType} from "/src/components/Header/Header.utils";
import HeaderWidget from "/src/components/Header/HeaderWidget/HeaderWidget";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {IoTvSharp} from 'react-icons/io5';

interface EntertainmentGenresDropDownProps{
    selectedGenre: DropDownType
}

const EntertainmentGenresDropDown:FC<EntertainmentGenresDropDownProps> = ({selectedGenre})=>{
    return(
        <>
            <LinkList selectedGenre={selectedGenre}/>
            <div>
                <Tabs selectedGenre={selectedGenre}/>
            </div>
            <div>
                <HeaderWidget/>
                <CustomButton >
                    <IoTvSharp/>
                    Смотреть на Smart TV
                </CustomButton>
            </div>
        </>
    )
}

export default EntertainmentGenresDropDown