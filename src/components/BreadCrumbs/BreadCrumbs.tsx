import { FC } from "react";
import styles from "./BreadCrumbs.module.sass";
import { useRouter } from "next/router";
import { getRoutes } from "./BreadCrumbs.utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface BreadCrumbsProps {
  type?: "dots" | "slash";
  currentTitle?: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ type = "dots", currentTitle }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const routes = getRoutes(router.pathname);
  const className = type == "dots" ? styles.list_dots : styles.list_slash;

  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        <ul className={`${styles.list} ${className}`}>
          {routes.map((route, index) => (
            <li key={index} className={styles.list__item}>
              <Link className={styles.list__link} href={route}>
                {t(`breadcrumbs.${route}`)}
              </Link>
            </li>
          ))}
          {currentTitle && (
            <li className={styles.list__item}>{currentTitle}</li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default BreadCrumbs;
