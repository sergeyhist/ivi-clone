import {Genres} from "/src/types/genreType";
import {cartoonsTabs, moviesTabs, seriesTabs} from "/src/locales/tabsDropDownData";

export const getGenreTabs = (genre: Genres) =>{
    switch (genre){
        case "movie":
            return moviesTabs;
        case "series":
            return seriesTabs;
        case "cartoons":
            return cartoonsTabs
    }
}