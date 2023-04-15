import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoPlate from "../components/PromoPlate/PromoPlate";
import TopTen from "../components/TopTen/TopTen";

export default function Home() {
  return (
    <Layout>
      <BannerSlider />
      <PromoPlate />
      <TopTen />
    </Layout>
  );
}
