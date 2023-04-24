import enHeader from "../locales/en/header.json";
import enTitles from "../locales/en/titles.json";
import enFooter from "../locales/en/footer.json";
import enTabBar from "../locales/en/tabBar.json";
import enFilters from "../locales/en/filters.json";
import enGenres from "../locales/en/genres.json";
import enCountries from "../locales/en/countries.json";
import enMovie from "../locales/en/movie.json";
import enBreadcrumbs from "../locales/en/breadcrumbs.json";

import ruHeader from "../locales/ru/header.json";
import ruTitles from "../locales/ru/titles.json";
import ruFooter from "../locales/ru/footer.json";
import ruTabBar from "../locales/ru/tabBar.json";
import ruFilters from "../locales/ru/filters.json";
import ruGenres from "../locales/ru/genres.json";
import ruCountries from "../locales/ru/countries.json";
import ruMovie from "../locales/ru/movie.json";
import ruBreadcrumbs from "../locales/ru/breadcrumbs.json";

const translationResources = {
  en: {
    translation: {
      header: enHeader,
      titles: enTitles,
      footer: enFooter,
      tabBar: enTabBar,
      genres: enGenres,
      countries: enCountries,
      filters: enFilters,
      movie: enMovie,
      breadcrumbs: enBreadcrumbs,
    },
  },
  ru: {
    translation: {
      header: ruHeader,
      titles: ruTitles,
      footer: ruFooter,
      tabBar: ruTabBar,
      genres: ruGenres,
      countries: ruCountries,
      filters: ruFilters,
      movie: ruMovie,
      breadcrumbs: ruBreadcrumbs,
    },
  },
};

export default translationResources;
