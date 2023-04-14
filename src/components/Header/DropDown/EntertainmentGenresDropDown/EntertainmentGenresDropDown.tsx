import {FC} from "react";
import LinkList from "/src/components/Header/DropDown/LinkList/LinkList";
import Tabs from "/src/components/Header/DropDown/Tabs/Tabs";
import {Genres} from "/src/types/genreType";

interface EntertainmentGenresDropDownProps{
    selectedGenre: Genres
}

const EntertainmentGenresDropDown:FC<EntertainmentGenresDropDownProps> = ({selectedGenre})=>{
    return(
        <>
            <LinkList selectedGenre={selectedGenre}/>
            <div>
                <Tabs selectedGenre={selectedGenre}/>
            </div>
        </>
    )
}

export default EntertainmentGenresDropDown