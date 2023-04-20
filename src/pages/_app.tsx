import "/src/styles/global.sass";
import "/src/styles/global-media.sass";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import '../utils/i18n';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
