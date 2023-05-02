import {FC, useEffect,useState} from "react";
import {getSlides, slides} from "./HomeSliders.utils";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./HomeSliders.module.sass";
import { useTranslation } from "next-i18next";
import {AxiosResponse} from "axios";
import IMovieCard from "/src/types/IMovieCard";

const HomeSliders: FC = () => {
  const { t } = useTranslation("home");
  const [a,setA] = useState<AxiosResponse<IMovieCard[]>>();

 useEffect(()=>{
   getSlides().then(res=>{setA(res)})
 },[])


  return (
    <section className={styles.section}>
      <div className="container">
        <MovieSlider title={t("compilations.subscribe")} slides={slides} />
        <MovieSlider title={t("compilations.comedy")} slides={slides} />
      </div>
    </section>
  );
};

export default HomeSliders;
