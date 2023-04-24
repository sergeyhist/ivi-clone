import { FC } from "react";
import styles from "./MovieDescription.module.sass";

interface MovieDescriptionProps {
  descriptionHTML: string;
}

const MovieDescription: FC<MovieDescriptionProps> = ({ descriptionHTML }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      className={styles.description}
    ></div>
  );
};

export default MovieDescription;
