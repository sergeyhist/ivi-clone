import i18next from "i18next";
import { i18n } from "next-i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

i18next.use(HttpApi).use(initReactI18next).init({
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
