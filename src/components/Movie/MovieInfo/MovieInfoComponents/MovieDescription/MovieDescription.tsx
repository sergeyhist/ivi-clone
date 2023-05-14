import { FC, Dispatch, SetStateAction, useEffect, useRef } from "react";
import styles from "./MovieDescription.module.sass";
import { useAppSelector } from "/src/hooks/redux";

interface MovieDescriptionProps {
  description: string;
  setTextHeight: Dispatch<SetStateAction<number>>;
}

const MovieDescription: FC<MovieDescriptionProps> = ({
  description,
  setTextHeight,
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const windowSize = useAppSelector((state) => state.windowSize);

  useEffect(() => {
    setTextHeight(Number(textRef.current?.scrollHeight));
  }, [setTextHeight, windowSize.width]);

  return (
    <p ref={textRef} className={styles.description}>
      {description}
    </p>
  );
};

export default MovieDescription;
