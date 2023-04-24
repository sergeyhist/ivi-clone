import { FC, useEffect, useMemo, useState } from "react";
import MovieCoverMobile from "./MovieInfoMobile/MovieInfoMobile";
import MovieCoverDesktop from "./MovieInfoDesktop/MovieInfoDesktop";
import { IMovie } from "/src/types/IMovie";
import { useAppSelector } from "/src/hooks/redux";

interface MovieCoverProps {
  movie: IMovie;
}

const MovieCover: FC<MovieCoverProps> = ({ movie }) => {
  const windowSize = useAppSelector((state) => state.windowSize);
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    if (windowSize.width <= 1160 && !isMobile) {
      setMobile(true);
    }
    if (windowSize.width > 1160 && isMobile) {
      setMobile(false);
    }
  }, [isMobile, windowSize.width]);

  const MovieCover = useMemo(() => {
    return isMobile ? (
      <MovieCoverMobile movie={movie} />
    ) : (
      <MovieCoverDesktop movie={movie} />
    );
  }, [isMobile, movie]);

  return <>{MovieCover}</>;
};

export default MovieCover;
