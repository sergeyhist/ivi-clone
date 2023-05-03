import { FC } from "react";
import styles from "./MovieCardsChart.module.sass";
import { IMovie } from "/src/types/IMovie";
import ProgressBar from "../../ProgressBar/ProgressBar";

interface MovieCardsChartProps {
  content: IMovie;
}

const MovieCardsChart: FC<MovieCardsChartProps> = ({ content }) => {
  return (
    <div className={styles.chart}>
      <p className={styles.chart__name}>{"Рейтинг"}</p>
      <ProgressBar value={content.rating * 10} className={styles.chart__bar} />
    </div>
  );
};

export default MovieCardsChart;
