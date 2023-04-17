import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoPlate from "../components/PromoPlate/PromoPlate";
import TopTen from "../components/TopTen/TopTen";
import RegistrationModal from "/src/components/RegistrationModal/RegistrationModal";

export default function Home() {
  return (
    <Layout>
        <RegistrationModal/>
      <BannerSlider />
      <PromoPlate />
      <TopTen />
    </Layout>
  );
}
