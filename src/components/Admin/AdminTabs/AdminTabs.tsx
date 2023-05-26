import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminTabs.module.sass";
import Container from "/src/UI/Container/Container";

interface AdminTabsProps {
  setSelectedTab: Dispatch<SetStateAction<"movies" | "genres">>;
  selectedTab: "movies" | "genres";
}

const AdminTabs: FC<AdminTabsProps> = ({ setSelectedTab, selectedTab }) => {
  const { t } = useTranslation(["titles", "admin"]);

  return (
    <section data-testid="admin-tabs" className={styles.section}>
      <Container>
        <ul className={styles.tabs}>
          <li className={styles.tabs__item}>
            <button
              data-testid="button-movies-tab"
              onClick={() => {
                setSelectedTab("movies");
              }}
              className={
                selectedTab === "movies"
                  ? `${styles.tab} ${styles.tab_active}`
                  : styles.tab
              }
            >
              {t("admin:tabs.movies")}
            </button>
          </li>
          <li className={styles.tabs__item}>
            <button
              data-testid="button-genres-tab"
              onClick={() => {
                setSelectedTab("genres");
              }}
              className={
                selectedTab === "genres"
                  ? `${styles.tab} ${styles.tab_active}`
                  : styles.tab
              }
            >
              {t("admin:tabs.genres")}
            </button>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default AdminTabs;
