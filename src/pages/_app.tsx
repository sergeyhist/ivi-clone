import type { AppProps } from "next/app";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import "../utils/i18n";
import "/src/styles/global.sass";
import {GoogleOAuthProvider} from "@react-oauth/google";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "err"}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default appWithTranslation(App);
