import "/src/styles/global.sass";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import "../utils/i18n";
import { ReactNode } from "react";

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
