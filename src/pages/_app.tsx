import "/src/styles/global.sass";
import type { AppProps } from "next/app";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import { GoogleOAuthProvider } from "@react-oauth/google";
import localFont from "next/font/local";

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
  declarations: [{ prop: "ascent-override", value: "90%" }],
});
const iviIcons = localFont({
  src: "../assets/fonts/ivi-icons.woff",
  variable: "--ivi-icons",
});
const iconFont = localFont({
  src: "../assets/fonts/iconfont.woff",
  variable: "--iconfont",
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "err"}
    >
      <Provider store={store}>
        <div
          className={`${iviSans.className} ${iviIcons.variable} ${iconFont.variable}`}
        >
          <Component {...pageProps} />
        </div>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default appWithTranslation(App);
