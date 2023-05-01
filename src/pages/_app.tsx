import "/src/styles/global.sass";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import "../utils/i18n";
import { FC } from "react";
import { appWithTranslation } from "next-i18next";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App);
