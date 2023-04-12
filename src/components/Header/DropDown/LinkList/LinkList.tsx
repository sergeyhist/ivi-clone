import {FC} from "react";
import Links from "/src/components/Header/DropDown/Links/Links";
import {getGenreLinks} from "/src/utils/headerUtils";
import {GenreLinks, Genres} from "/src/types/genreType";

interface LinkListProps{
    selectedGenre: Genres
}

const LinkList: FC<LinkListProps> = ({selectedGenre}) => {

    const getLinksSectionTitles = (title:string):GenreLinks=>{
        const links = getGenreLinks(selectedGenre);
        return {title, links}
    }

    return(
        <Links linksSection={getLinksSectionTitles('Жанры')}/>
    )
}

export default LinkList