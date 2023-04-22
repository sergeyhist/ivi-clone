import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import MovieCover from "../../components/MovieCover/MovieCover";
import BreadCrumbs from "/src/components/BreadCrumbs/BreadCrumbs";

const Film: FC = () => {
  return (
    <Layout title="1+1 (Фильм 2011)">
      <BreadCrumbs
        pages={[
          { route: "/", name: "Главная" },
          { route: "/films", name: "Фильмы" },
          { route: "/films", name: "Драмы" },
        ]}
      />
      <MovieCover />
    </Layout>
  );
};

export default Film;
