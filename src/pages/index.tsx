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
import { getMoviesByGenre, getMovies } from "../api/movie";
import { IMovie } from "../types/IMovie";

interface HomeProps {
  bestMilitants: IMovie[];
  bestComedies: IMovie[];
  topTenMovies: IMovie[];
}

const Home: FC<HomeProps> = ({ bestMilitants, bestComedies, topTenMovies }) => {
  const { t } = useTranslation(["titles", "home"]);

  const compilations = [
    {
      movies: bestMilitants,
      title: t("home:compilations.militants.title"),
    },
    {
      movies: bestComedies,
      title: t("home:compilations.comedies.title"),
    },
  ];

  return (
    <Layout title={t("titles:home")}>
      <BannerSlider />
      <PromoButtons />
      <TopTen topTenMovies={topTenMovies} />
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
  const bestMilitants = await getMoviesByGenre("militant");
  const bestComedies = await getMoviesByGenre("comedy");
  const topTenMovies = await getMovies(
    "/filter/films?year_min=1998&year_max=2023&rating=8&assessments=3000&limit=10"
  );

  return {
    props: {
      bestMilitants,
      bestComedies,
      topTenMovies,
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
        "admin"
      ])),
    },
  };
};

export default Home;
