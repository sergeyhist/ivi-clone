import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoPlate from "../components/PromoPlate/PromoPlate";
import TopTen from "../components/TopTen/TopTen";
import CinemaDetails from "../components/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/HomeSliders/HomeSliders";
import RegistrationModal from "/src/components/RegistrationModal/RegistrationModal";

export default function Home() {
  return (
    <Layout>
        <RegistrationModal/>
      <BannerSlider />
      <PromoPlate />
      <TopTen />
      <CinemaDetails />
      <HomeSliders />
    </Layout>
  );
}
