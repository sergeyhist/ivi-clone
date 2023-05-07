import { FC, useEffect } from "react";
import BannerSlider from "../components/Home/BannerSlider/BannerSlider";
import Layout from "../components/Layout/Layout";
import PromoButtons from "../components/Home/PromoButtons/PromoButtons";
import TopTen from "../components/Home/TopTen/TopTen";
import CinemaDetails from "../components/Home/CinemaDetails/CinemaDetails";
import HomeSliders from "../components/Home/HomeSliders/HomeSliders";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import { useAppDispatch } from "/src/hooks/redux";
import { getCountriesSlugs, getGenresSlugs } from "/src/api/getData";
import { setSlugs } from "/src/store/slices/slugsSlice";

interface HomeProps {
  genresSlugs: string[];
  countriesSlugs: string[];
}

const Home: FC<HomeProps> = ({ genresSlugs, countriesSlugs }) => {
  const { t } = useTranslation("titles");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (genresSlugs) dispatch(setSlugs({ genresSlugs, countriesSlugs }));
  }, [dispatch, genresSlugs, countriesSlugs]);

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
  const genresSlugs = await getGenresSlugs();
  const countriesSlugs = await getCountriesSlugs();

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
      ])),
      genresSlugs: genresSlugs,
      countriesSlugs: countriesSlugs,
    },
  };
};

export default Home;
