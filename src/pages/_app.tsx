import type { AppProps } from "next/app";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import "../utils/i18n";
import "/src/styles/global.sass";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const iviSans = localFont({
  src: [
    {
      path: "../assets/fonts/iviSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/iviSans-Medium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/iviSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--iviSans",
});

const iviIcons = localFont({ src: "../assets/fonts/ivi-icons.woff", variable: "--ivi-icons" });
const iconfont = localFont({ src: "../assets/fonts/iconfont.woff", variable: "--iconfont" });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className={`${iviSans.variable} ${iviIcons.variable} ${iconfont.variable}`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default appWithTranslation(App);
