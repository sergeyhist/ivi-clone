import { FC, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import AdminTabs from "../components/Admin/AdminTabs/AdminTabs";
import AdminMovies from "../components/Admin/AdminMovies/AdminMovies";
import AdminGenres from "../components/Admin/AdminGenres/AdminGenres";
import { useAppSelector } from "../hooks/redux";
import NotFound from "../components/NotFound/NotFound";
import PageLoader from "../UI/PageLoader/PageLoader";

const Admin: FC = () => {
  const { t } = useTranslation(["titles", "admin"]);
  const [selectedTab, setSelectedTab] = useState<"movies" | "genres">("movies");
  const { role } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  const isAdmin = !isLoading && role === "admin";

  useEffect(() => {
    if (isLoading === true && role) {
      setIsLoading(false);
    }
  }, [isLoading, role]);

  return (
    <Layout
      title={t(
        role
          ? role === "admin"
            ? "titles:admin"
            : "admin:access_denied.title"
          : "titles:home"
      )}
    >
      {isLoading && <PageLoader />}
      {role && !isAdmin && (
        <NotFound
          contentText={t("admin:access_denied.content")}
          linkText={t("admin:access_denied.link")}
          linkRoute="/"
        />
      )}
      {isAdmin && (
        <AdminTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      )}
      {isAdmin && selectedTab === "movies" && <AdminMovies />}
      {isAdmin && selectedTab === "genres" && <AdminGenres />}
    </Layout>
  );
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
