import {FC} from "react";
import {Genres} from "/src/types/genreType";
import {getGenreTabs} from "/src/components/Header/DropDown/Tabs/Tabs.utils";

interface TabsProps{
    selectedGenre: Genres
}

const Tabs: FC<TabsProps> = ({selectedGenre})=>{
    return(
        <div>
            {
                getGenreTabs(selectedGenre).map((tab,i)=>{
                    return (
                        <div key={i}>{tab}</div>
                    )
                })
            }
        </div>
    )
}

export default Tabs