import type { AppProps } from "next/app";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import "../utils/i18n";
import "/src/styles/global.sass";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App);
