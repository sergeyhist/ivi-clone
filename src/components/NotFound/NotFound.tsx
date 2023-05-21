import { FC } from "react";
import styles from "./NotFound.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface NotFoundProps {
  title: string;
}

const NotFound: FC<NotFoundProps> = ({ title }) => {
  const { t } = useTranslation("common");

  return (
    <section data-testid="not-found" className={styles.section + " container"}>
      <CustomTitle className={styles.title} title={title} />
      <Link href={"/"} className={styles.link}>
        {t("not_found.link")}
      </Link>
    </section>
  );
};

export default NotFound;
