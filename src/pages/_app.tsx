import type { AppProps } from "next/app";
import {FC, useEffect} from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import { GoogleOAuthProvider } from "@react-oauth/google";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "/src/styles/global.sass";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import nProgress from "nprogress";

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
const iviIcons = localFont({
  src: "../assets/fonts/ivi-icons.woff",
  variable: "--ivi-icons",
});
const iconfont = localFont({
  src: "../assets/fonts/iconfont.woff",
  variable: "--iconfont",
});

const App: FC<AppProps> = ({ Component, pageProps, router }) => {

  useEffect(()=>{
    const handleRouteStart = ():nProgress.NProgress => NProgress.start();
    const handleRouteDone = (): nProgress.NProgress => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  },[])

  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "err"}
    >
      <Provider store={store}>
        <div
          className={`${iviSans.variable} ${iviIcons.variable} ${iconfont.variable}`}
        >
          <Component {...pageProps} />
          <ToastContainer/>
        </div>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default appWithTranslation(App);
