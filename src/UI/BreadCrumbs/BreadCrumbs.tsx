import { FC } from "react";
import styles from "./BreadCrumbs.module.sass";
import { useRouter } from "next/router";
import { getRoutes, getPrevRoute } from "./BreadCrumbs.utils";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Container from "../Container/Container";

interface BreadCrumbsProps {
  type?: "dots" | "slash";
  currentTitle?: string;
  mobileVersion?: boolean;
  customRoutes?: string[];
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({
  type = "dots",
  currentTitle,
  mobileVersion = false,
  customRoutes,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const routes = getRoutes(router.pathname);
  const listClassName = type == "dots" ? styles.list_dots : styles.list_slash;
  const sectionClassName = mobileVersion
    ? `${styles.section} ${styles.section_mobile}`
    : `${styles.section}`;

  return (
    <section data-testid="breadcrumbs" className={sectionClassName}>
      <Container>
        <nav className={styles.nav}>
          <ul
            data-testid="breadcrumbs-list"
            className={`${styles.list} ${listClassName}`}
          >
            {customRoutes &&
              customRoutes.map((route, index) => (
                <li
                  data-testid="custom-route"
                  key={index}
                  className={styles.list__item}
                >
                  <Link className={styles.list__link} href={route}>
                    {t(`breadcrumbs.${route}`)}
                  </Link>
                </li>
              ))}
            {!customRoutes &&
              routes.map((route, index) => (
                <li
                  data-testid="default-route"
                  key={index}
                  className={styles.list__item}
                >
                  <Link className={styles.list__link} href={route}>
                    {t(`breadcrumbs.${route}`)}
                  </Link>
                </li>
              ))}
            {currentTitle && (
              <li className={styles.list__item}>
                <span className={styles.list__current}>{currentTitle}</span>
              </li>
            )}
          </ul>
        </nav>
        {mobileVersion && (
          <div className={styles.back}>
            <Link
              href={getPrevRoute(router.pathname)}
              className={styles.back__link}
            ></Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BreadCrumbs;
