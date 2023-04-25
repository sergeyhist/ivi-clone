import { FC } from "react";
import styles from "./MovieCardsChart.module.sass";
import IMovieCard from "../../../types/IMovieCard";
import ProgressBar from "../../ProgressBar/ProgressBar";

interface MovieCardsChartProps {
  content: IMovieCard;
}

const MovieCardsChart: FC<MovieCardsChartProps> = ({ content }) => {
  return (
    <div className={styles.chart}>
      <p className={styles.chart__name}>{content.chartName}</p>
      <ProgressBar value={content.chartRating} className={styles.chart__bar} />
    </div>
  );
};

export default MovieCardsChart;
