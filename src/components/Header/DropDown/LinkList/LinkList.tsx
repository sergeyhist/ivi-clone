import {FC} from "react";
import Links from "/src/components/Header/DropDown/Links/Links";
import {getLinksSectionTitles} from "/src/utils/headerUtils";
import {Genres} from "/src/types/genreType";

interface LinkListProps{
    selectedGenre: Genres
}

const LinkList: FC<LinkListProps> = ({selectedGenre}) => {

    return(
        <>
            <Links linksSection={getLinksSectionTitles('Жанры',selectedGenre)} rowDirection={true}/>
            <div>
                <Links linksSection={getLinksSectionTitles('Страны',selectedGenre)}/>
                <Links linksSection={getLinksSectionTitles('Годы',selectedGenre)}/>
            </div>
        </>
    )
}

export default LinkList