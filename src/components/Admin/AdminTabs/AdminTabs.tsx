import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminTabs.module.sass";
import Container from "/src/UI/Container/Container";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";

interface AdminTabsProps {
  setSelectedTab: Dispatch<SetStateAction<"movies" | "genres">>;
}

const AdminTabs: FC<AdminTabsProps> = ({ setSelectedTab }) => {
  const { t } = useTranslation(["titles", "admin"]);

  return (
    <section className={styles.section}>
      <Container>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <button
                onClick={() => {
                  setSelectedTab("movies");
                }}
                className={styles.tab}
              >
                <CustomTitle title={t("admin:tabs.movies")} type="link" />
              </button>
            </li>
            <li className={styles.nav__item}>
              <button
                onClick={() => {
                  setSelectedTab("genres");
                }}
                className={styles.tab}
              >
                <CustomTitle title={t("admin:tabs.genres")} type="link" />
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
};

export default AdminTabs;
