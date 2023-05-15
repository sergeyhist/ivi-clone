import { I18nextProvider } from "react-i18next";
import React from "react";
import i18next, { changeLanguage } from "i18next";
import { useGlobals } from "@storybook/addons";
import i18n from "./i18n";
import { iviSans, iviIcons, iconFont } from "../src/utils/fonts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  storySort: {
    method: "alphabetical",
    order: ["Components", "Icons", "Others"],
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "ru",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Русский" },
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    const [{ locale }] = useGlobals();

    changeLanguage(locale);

    return (
      <I18nextProvider i18n={i18n || i18next}>
        <main
          className={`${iviSans.className} ${iviIcons.variable} ${iconFont.variable}`}
        >
          <Story />
        </main>
      </I18nextProvider>
    );
  },
];
