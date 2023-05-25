import { FC, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import AdminTabs from "../components/Admin/AdminTabs/AdminTabs";
import AdminMovies from "../components/Admin/AdminMovies/AdminMovies";
import AdminGenres from "../components/Admin/AdminGenres/AdminGenres";
import { useAppSelector } from "../hooks/redux";
import NotFound from "../components/NotFound/NotFound";

const Admin: FC = () => {
  const { t } = useTranslation(["titles", "admin"]);
  const [selectedTab, setSelectedTab] = useState<"movies" | "genres">("movies");
  const { role } = useAppSelector((state) => state.auth);

  if (role === "admin") {
    return (
      <Layout title={t("titles:admin")}>
        <AdminTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "movies" && <AdminMovies />}
        {selectedTab === "genres" && <AdminGenres />}
      </Layout>
    );
  } else {
    return (
      <Layout title={t("admin:access_denied.title")}>
        <NotFound
          contentText={t("admin:access_denied.content")}
          linkText={t("admin:access_denied.link")}
          linkRoute="/"
        />
      </Layout>
    );
  }
};

export const getStaticProps = async ({
  locale,
}: {
  locale: string;
}): Promise<GetStaticPropsResult<Record<string, unknown>>> => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "genres",
        "countries",
        "mobileMenu",
        "dropDownCategory",
        "registration",
        "titles",
        "admin",
      ])),
    },
  };
};

export default Admin;
