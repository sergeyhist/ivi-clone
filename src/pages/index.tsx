import { FC } from "react";
import BannerSlider from "../components/Home/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoButtons from "../components/Home/PromoButtons/PromoButtons";
import TopTen from "../components/Home/TopTen/TopTen";
import CinemaDetails from "../components/Home/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/Home/HomeSliders/HomeSliders";
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
