import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoPlate from "../components/PromoPlate/PromoPlate";
import TopTen from "../components/TopTen/TopTen";
import CinemaDetails from "../components/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/HomeSliders/HomeSliders";
import {useTranslation} from "react-i18next";
import RegistrationModal from "/src/components/RegistrationModal/RegistrationModal";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout title={t('titles.home')}>
        <RegistrationModal/>
      <BannerSlider />
      <PromoPlate />
      <TopTen />
      <CinemaDetails />
      <HomeSliders />
    </Layout>
  );
}
