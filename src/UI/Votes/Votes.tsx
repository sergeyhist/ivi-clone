import { FC } from "react";
import styles from "./Votes.module.sass";

interface VotesProps {
  ClassName?: string;
}

const Votes: FC<VotesProps> = ({ ClassName = "" }) => {
  return (
    <div className={`${styles.container} ${ClassName}`}>
      <div className={styles.like}></div>
      <div className={styles.count}>12</div>
      <div className={styles.dislike}></div>
    </div>
  );
};

export default Votes;
