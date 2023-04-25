import { FC } from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoButtons from "../components/PromoButtons/PromoButtons";
import TopTen from "../components/TopTen/TopTen";
import CinemaDetails from "../components/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/HomeSliders/HomeSliders";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("titles.home")}>
      <BannerSlider />
      <PromoButtons />
      <TopTen />
      <CinemaDetails />
      <HomeSliders />
    </Layout>
  );
};

export default Home;
