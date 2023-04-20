import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocale } from "../utils/locale";
import translationResources from "../utils/translationResources";

i18next.use(initReactI18next).init({
  resources: translationResources,
  lng: getLocale(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
