import { I18nextProvider } from "react-i18next";
import React from "react";
import i18next, { changeLanguage } from "i18next";
import { useGlobals } from "@storybook/addons";
import i18n from "./i18n";
import { iviSans, iviIcons, iconFont } from "../src/utils/fonts";
import { store } from "../src/store";
import { Provider } from "react-redux";
import { setWindowSize } from "../src/store/slices/windowSizeSlice";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  storySort: {
    method: "alphabetical",
    order: ["Components", "Icons", "Others"],
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#100e19",
      },
    ],
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

    changeLanguage(locale);

    if (Context.name.includes("Mobile")) {
      store.dispatch(setWindowSize({ width: 320, height: 1020 }));
    } else {
      store.dispatch(setWindowSize({ width: 1980, height: 1020 }));
    }

    return (
      <I18nextProvider i18n={i18n || i18next}>
        <Provider store={store}>
          <main
            className={`${iviSans.className} ${iviIcons.variable} ${iconFont.variable}`}
          >
            <Story />
          </main>
        </Provider>
      </I18nextProvider>
    );
  },
];
