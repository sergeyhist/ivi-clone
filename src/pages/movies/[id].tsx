import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import FilmCover from "/src/components/FilmCover/FilmCover";
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
      <FilmCover />
    </Layout>
  );
};

export default Film;
