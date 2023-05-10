import { FC } from "react";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import NotFound from "../components/NotFound/NotFound";

const Home: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("common:not_found.title")}>
      <NotFound title={t("common:not_found.content")} />
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
        "titles",
        "footer",
        "header",
        "home",
        "tooltips",
        "mobileMenu",
        "dropDownCategory",
        "registration",
        "genres",
        "countries",
      ])),
    },
  };
};

export default Home;
