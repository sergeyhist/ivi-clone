import { FC, useEffect, useMemo, useState } from "react";
import MovieCoverMobile from "./MovieInfoMobile/MovieInfoMobile";
import MovieCoverDesktop from "./MovieInfoDesktop/MovieInfoDesktop";
import { IMovie } from "/src/types/IMovie";
import { useAppSelector } from "/src/hooks/redux";
import { IPerson } from "/src/types/IPerson";

interface MovieCoverProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieInfo: FC<MovieCoverProps> = ({ movie, persons }) => {
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

  const MovieInfoVersion = useMemo(() => {
    return isMobile ? (
      <MovieCoverMobile movie={movie} persons={persons} />
    ) : (
      <MovieCoverDesktop movie={movie} persons={persons} />
    );
  }, [isMobile, movie, persons]);

  return <>{MovieInfoVersion}</>;
};

export default MovieInfo;
