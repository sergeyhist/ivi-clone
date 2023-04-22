import { FC } from "react";
import Mobile from "./Mobile/Mobile";
import Desctop from "./Desctop/Desctop";

const MovieCover: FC = () => {
  return (
    <>
      <Desctop />

      <Mobile />
    </>
  );
};

export default MovieCover;
