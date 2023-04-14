import { Provider } from "react-redux";
import Banner from "../components/Banner/BannerSlider";
import Layout from "../components/Layout/Layout";
import { store } from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <Banner />
      </Layout>
    </Provider>
  );
}
