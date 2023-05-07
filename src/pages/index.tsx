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
import { getMoviesByGenre } from "../api/movieApi";
import { IMovie } from "../types/IMovie";

interface HomeProps {
  bestFantasyMovies: IMovie[];
  bestDramaMovies: IMovie[];
}

const Home: FC<HomeProps> = ({ bestFantasyMovies, bestDramaMovies }) => {
  const { t } = useTranslation(["titles", "home"]);
  const compilations = [
    {
      movies: bestFantasyMovies,
      title: t("home:compilations.subscribe"),
    },
    {
      movies: bestDramaMovies,
      title: t("home:compilations.subscribe"),
    },
  ];

  return (
    <Layout title={t("titles:home")}>
      <BannerSlider />
      <PromoButtons />
      <TopTen />
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
  const bestFantasyMovies = await getMoviesByGenre("fantasy");
  const bestDramaMovies = await getMoviesByGenre("drama");
  return {
    props: {
      bestFantasyMovies,
      bestDramaMovies,
      ...(await serverSideTranslations(locale, [
        "common",
        "titles",
        "footer",
        "header",
        "home",
        "tooltips",
        "mobileMenu",
        "dropDownCategory",
        "genres",
      ])),
    },
  };
};

export default Home;
