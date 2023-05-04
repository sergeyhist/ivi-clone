import { FC, useEffect, useState } from "react";
import Layout from "/src/components/Layout/Layout";
import { GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import { personData } from "/src/utils/person";
import Filmography from "/src/components/Person/Filmography/Filmography";
import { useRouter } from "next/router";
import { IPerson } from "/src/types/IPerson";
import personApi from "/src/api/personApi";

const Person: FC = () => {
  const [person, setPerson] = useState<IPerson>();
  const router = useRouter();
  const { id } = router.query;
  const firstName =
    person && router.locale === "ru"
      ? person.first_name_ru
      : person?.first_name_en;
  const lastName =
    person && router.locale === "ru"
      ? person.last_name_ru
      : person?.last_name_en;

  useEffect(() => {
    personApi.getPersonById(id).then((res) => setPerson(res));
  }, [id]);

  return (
    <Layout title={"person"}>
      <PersonCard
        firstName={firstName}
        lastName={lastName}
        person={person || personData}
      />
      <Filmography
        firstName={firstName}
        lastName={lastName}
        moviesId={person?.films.map((film) => film.film_id) || []}
      />
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
        "person",
        "breadcrumbs",
      ])),
    },
  };
};
export default Person;
