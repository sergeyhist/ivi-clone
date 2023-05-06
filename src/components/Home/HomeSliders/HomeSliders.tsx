import { FC, useEffect, useState } from "react";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./HomeSliders.module.sass";
import { useTranslation } from "next-i18next";
import { mockMovie as movie } from "/src/utils/movie";
import { getSlides } from "./HomeSliders.utils";
import { AxiosResponse } from "axios";

const HomeSliders: FC = () => {
  const { t } = useTranslation("home");
  //   const [a,setA] = useState<AxiosResponse<IMovieCard[]>>();

  //  useEffect(()=>{
  //    getSlides().then(res=>{setA(res)})
  //  },[])

  return (
    <section className={styles.section}>
      <div className="container">
        <MovieSlider
          title={t("compilations.subscribe")}
          slides={[movie, movie, movie, movie, movie, movie, movie, movie, movie]}
        />
        <MovieSlider
          title={t("compilations.comedy")}
          slides={[movie, movie, movie, movie, movie, movie, movie, movie, movie]}
        />
      </div>
    </section>
  );
};

export default HomeSliders;
