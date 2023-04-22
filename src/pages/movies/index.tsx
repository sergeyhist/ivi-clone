import {useTranslation} from "react-i18next";
import Filters from "/src/components/Filters/Filters";
import Layout from "/src/components/Layout/Layout";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout title={t('titles.movies')}>
      <Filters/>
    </Layout>
  );
}
