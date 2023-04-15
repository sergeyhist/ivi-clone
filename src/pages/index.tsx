import {Provider} from "react-redux";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import {store} from "../store";
import PromoPlate from "../components/PromoPlate/PromoPlate";
import TopTen from "../components/TopTen/TopTen";
import IviOnlineCinema from "../components/IviOnlineCinema/IviOnlineCinema";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <BannerSlider />
        <PromoPlate />
        <TopTen />
        <IviOnlineCinema />
      </Layout>
    </Provider>
  );
}
