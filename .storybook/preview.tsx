import { Suspense } from "react";
import { initReactI18next, I18nextProvider } from "react-i18next";
import BackEnd from "i18next-http-backend";
import i18next from "i18next";
import { useGlobals } from "@storybook/addons";
import React from "react";

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
  (Story, Context) => {
    const [{ locale }] = useGlobals();

    i18next
    .use(BackEnd)
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: "en",
      ns: "common",
      defaultNS: "common",
      backend: {
        loadPath: "locales/{{lng}}/{{ns}}.json",
      },
      debug: true,
    });

    return (
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18next}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  },
];
