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
import {mockMovies} from "/src/utils/mocks/movies";


const Home: FC= () => {
  const { t } = useTranslation(["titles", "home"]);

  const compilations = [
    {
      movies: mockMovies.slice(0,9),
      title: t("home:compilations.militants.title"),
      route: "/movies?genres=militant",
    },
    {
      movies: mockMovies.slice(9,19),
      title: t("home:compilations.comedies.title"),
      route: "/movies?genres=drama",
    },
  ];

  return (
    <Layout title={t("titles:home")}>
      <BannerSlider />
      <PromoButtons />
      <TopTen topTenMovies={mockMovies.slice(20,30)} />
      <CinemaDetails />
      <HomeSliders compilations={compilations} />
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
        "common",
        "titles",
        "footer",
        "header",
        "home",
        "tooltips",
        "mobileMenu",
        "dropDownCategory",
        "registration",
        "genres",
        "countries",
        "movie",
        "admin",
      ])),
    },
  };
};

export default Home;
