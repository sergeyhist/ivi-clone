import { changeLanguage } from "i18next";

export const getLocale = () => {
  const locale =
    typeof window !== "undefined" && localStorage.getItem("currentLocale");

  return locale ? locale : "ru";
};

export const setLocale = (lang: string) => {
  changeLanguage(lang);
  typeof window !== "undefined" && localStorage.setItem("currentLocale", lang);
};
