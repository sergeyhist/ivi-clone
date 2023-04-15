import "/src/styles/global.sass";
import "/src/styles/global-media.sass";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
