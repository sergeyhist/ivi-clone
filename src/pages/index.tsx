import { FC } from "react";
import BannerSlider from "../components/Home/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoButtons from "../components/Home/PromoButtons/PromoButtons";
import TopTen from "../components/Home/TopTen/TopTen";
import CinemaDetails from "../components/Home/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/Home/HomeSliders/HomeSliders";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: FC = () => {
  const { t } = useTranslation("titles");
  const { locale, locales } = useRouter();

  console.log(locale, locales);
  console.log(t("home"));

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

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<object> {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "titles",
        "footer",
        "header",
        "home",
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
