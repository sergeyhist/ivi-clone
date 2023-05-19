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
import { getMoviesByGenre } from "../api/movie";
import { IMovie } from "../types/IMovie";
import { mockMovie } from "../utils/movie";

interface HomeProps {
  bestMilitants: IMovie[];
  bestComedies: IMovie[];
}

const Home: FC<HomeProps> = ({ bestMilitants, bestComedies }) => {
  const { t } = useTranslation(["titles", "home"]);
  const compilations = [
    {
      movies: bestMilitants.length ? bestMilitants : [mockMovie],
      title: t("home:compilations.militants.title"),
    },
    {
      movies: bestComedies.length ? bestComedies : [mockMovie],
      title: t("home:compilations.comedies.title"),
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
  const bestMilitants = await getMoviesByGenre("militant");
  const bestComedies = await getMoviesByGenre("comedy");

  return {
    props: {
      bestMilitants,
      bestComedies,
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
      ])),
    },
  };
};

export default Home;
