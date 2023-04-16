import {cartoonsTabs, moviesTabs, seriesTabs} from "/src/locales/tabsDropDownData";
import {DropDownType} from "/src/components/Header/Header";

export const getGenreTabs = (genre: DropDownType) =>{
    switch (genre){
        case "movies":
            return moviesTabs;
        case "series":
            return seriesTabs;
        case "cartoons":
            return cartoonsTabs
    }
}