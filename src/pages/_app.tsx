import "/src/styles/global.sass";
import type { AppProps } from "next/app";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import "/src/styles/global.sass";
import "nprogress/nprogress.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "err"}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default appWithTranslation(App);
