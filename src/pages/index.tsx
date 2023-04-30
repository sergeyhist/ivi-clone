import { FC } from "react";
import BannerSlider from "../components/Home/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoButtons from "../components/Home/PromoButtons/PromoButtons";
import TopTen from "../components/Home/TopTen/TopTen";
import CinemaDetails from "../components/Home/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/Home/HomeSliders/HomeSliders";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";

const Home: FC = () => {
  const { t } = useTranslation("titles");

  return (
    <Layout title={t("home")}>
      <BannerSlider />
      <PromoButtons />
      <TopTen />
      <CinemaDetails />
      <HomeSliders />
    </Layout>
  );
};

export const getStaticProps = async ({
  locale,
}: {
  locale: string;
}): Promise<GetStaticPropsResult<Record<string, unknown>>> => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "titles",
        "footer",
        "header",
        "home",
        "tooltips",
      ])),
    },
  };
};

export default Home;
