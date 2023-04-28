import { FC } from "react";
import styles from "./BreadCrumbs.module.sass";
import { useRouter } from "next/router";
import { getRoutes, getPrevRoute } from "./BreadCrumbs.utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface BreadCrumbsProps {
  type?: "dots" | "slash";
  currentTitle?: string;
  mobileVersion?: boolean;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({
  type = "dots",
  currentTitle,
  mobileVersion = false,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const routes = getRoutes(router.pathname);
  const listClassName = type == "dots" ? styles.list_dots : styles.list_slash;
  const sectionClassName = mobileVersion
    ? `${styles.section} ${styles.section_mobile}`
    : `${styles.section}`;

  return (
    <section className={sectionClassName}>
      <div className="container">
        <nav className={styles.nav}>
          <ul className={`${styles.list} ${listClassName}`}>
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
        {mobileVersion === true && (
          <div className={styles.back}>
            <Link
              href={getPrevRoute(router.pathname)}
              className={styles.back__link}
            ></Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BreadCrumbs;
