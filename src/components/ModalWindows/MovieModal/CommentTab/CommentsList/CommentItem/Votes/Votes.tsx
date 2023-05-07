import {FC} from "react";
import styles from "./Votes.module.sass";

const Votes: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.like}></div>
      <div className={styles.count}>12</div>
      <div className={styles.dislike}></div>
    </div>
  )
}

export default Votes;
