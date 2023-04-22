import ITVSlide from "/src/types/ITVSlide";
import jsonChannelsSlides from '../../../../mockData/tvChannelsSlides.json'
import jsonSportChannelsSlides from '../../../../mockData/tvSportChannelsSlides.json'

export const tvSlides = (jsonChannelsSlides as ITVSlide[]);
export const tvSportSlides = (jsonSportChannelsSlides as ITVSlide[]);

export const tvLinks = {
    links: [
        'https://www.ivi.ru/tvplus',
        'https://www.ivi.ru/tvplus/razvlekatelnoe',
        'https://www.ivi.ru/tvplus/deti',
        'https://www.ivi.ru/tvplus/sport',
        'https://www.ivi.ru/tvplus/documentalnoe'
    ]
}

export const tvSlideBreakpoints = {
    1160: {
        slidesPerView: 6,
        slidesPerGroup: 5,
        spaceBetween: 30,
    },
};