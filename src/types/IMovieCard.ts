export default interface IMovieCard {
  id: number;
  imgUrl: string;
  route: string;
  rating: string;
  ratingBars: number[];
  chartRating: number;
  chartName: string;
  info: string;
  infoTime: string;
  title: string;
  type: number;
}
