import "/src/styles/global.sass";
import type { AppProps } from "next/app";
import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from "next-i18next";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import "/src/styles/global.sass";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import nProgress from "nprogress";

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteStart = (): nProgress.NProgress => NProgress.start();
    const handleRouteDone = (): nProgress.NProgress => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

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
