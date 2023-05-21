import { FC } from "react";
import styles from "./NotFound.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import Link from "next/link";

interface NotFoundProps {
  contentText: string;
  linkText: string;
  linkRoute: string;
}

const NotFound: FC<NotFoundProps> = ({ contentText, linkText, linkRoute }) => {
  return (
    <section data-testid="not-found" className={styles.section + " container"}>
      <CustomTitle className={styles.title} title={contentText} />
      <Link href={linkRoute} className={styles.link}>
        {linkText}
      </Link>
    </section>
  );
};

export default NotFound;
