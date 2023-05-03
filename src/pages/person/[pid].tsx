import { FC } from "react";
import Layout from "/src/components/Layout/Layout";
import { GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import {personData} from "/src/utils/person";

const Person: FC = () => {
  return (
      <Layout title={"person"}>
        <PersonCard person={personData}/>
      </Layout>
  );
};
export const getServerSideProps = async ({
  locale,
}: {
  locale: string;
}): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "footer",
        "header",
        "mobileMenu",
        "dropDownCategory",
      ])),
    },
  };
};
export default Person;
