import { FC } from "react";
import styles from "./PageLoader.module.sass";
import { PropagateLoader } from "react-spinners";

const PageLoader: FC = () => {
  return (
    <div data-testid="page-loader" className={styles.loader}>
      <PropagateLoader color="#312b45" />
    </div>
  );
};

export default PageLoader;
