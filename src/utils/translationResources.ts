import enHeader from '../locales/en/header.json';
import enTitles from '../locales/en/titles.json';
import enFooter from '../locales/en/footer.json';
import enTabBar from '../locales/en/tabBar.json';
import enGenres from '../locales/en/genres.json';

import ruHeader from '../locales/ru/header.json';
import ruTitles from '../locales/ru/titles.json';
import ruFooter from '../locales/ru/footer.json';
import ruTabBar from '../locales/ru/tabBar.json';
import ruGenres from '../locales/ru/genres.json';

const translationResources = {
  en: {
    translation: {
      header: enHeader,
      titles: enTitles,
      footer: enFooter,
      tabBar: enTabBar,
      genres: enGenres,
    },
  },
  ru: {
    translation: {
      header: ruHeader,
      titles: ruTitles,
      footer: ruFooter,
      tabBar: ruTabBar,
      genres: ruGenres,
    },
  },
};

export default translationResources;
