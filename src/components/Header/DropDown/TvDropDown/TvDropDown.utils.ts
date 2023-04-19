import ITVSlide from "/src/types/ITVSlide";
import jsonChannelsSlides from '../../../../mockData/tvChannelsSlides.json'
import jsonSportChannelsSlides from '../../../../mockData/tvSportChannelsSlides.json'

export const tvSlides = (jsonChannelsSlides as ITVSlide[]);
export const tvSportSlides = (jsonSportChannelsSlides as ITVSlide[]);

export const tvSlideBreakpoints = {
    1160: {
        slidesPerView: 6,
        slidesPerGroup: 5,
        spaceBetween: 30,
    },
};