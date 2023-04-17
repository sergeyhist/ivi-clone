import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoPlate from "../components/PromoPlate/PromoPlate";
import TopTen from "../components/TopTen/TopTen";
import IviOnlineCinema from "../components/IviOnlineCinema/IviOnlineCinema";
import HomeSliders from "../components/HomeSliders/HomeSliders";

export default function Home() {
  return (
    <Layout>
      <BannerSlider />
      <PromoPlate />
      <TopTen />
      <IviOnlineCinema />
      <HomeSliders />
    </Layout>
  );
}
