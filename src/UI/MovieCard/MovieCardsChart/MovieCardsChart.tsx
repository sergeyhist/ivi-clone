import { FC } from "react";
import styles from "./MovieCardsChart.module.sass";
import IMovieCard from "../../../types/IMovieCard";
import ProgressBar from "../../ProgressBar/ProgressBar";

interface MovieCardsChartProps {
  slide: IMovieCard;
}

const MovieCardsChart: FC<MovieCardsChartProps> = ({ slide }) => {
  return (
    <div className={styles.chart}>
      <p className={styles.chart__name}>{slide.chartName}</p>
      <ProgressBar value={slide.chartRating} className={styles.chart__bar} />
    </div>
  );
};

export default MovieCardsChart;
