import { FC, useEffect, useState } from "react";
import Layout from "/src/components/Layout/Layout";
import { GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import Filmography from "/src/components/Person/Filmography/Filmography";
import { useRouter } from "next/router";
import { IPerson } from "/src/types/IPerson";
import { getPersonById } from "/src/api/personApi";
import { mockPersons } from "/src/utils/person";
import BreadCrumbs from "/src/UI/BreadCrumbs/BreadCrumbs";
import BackButton from "/src/components/Person/BackButton/BackButton";
import PersonLayout from "/src/components/Person/PersonLayout/PersonLayout";

const Person: FC = () => {
  const [person, setPerson] = useState<IPerson>();
  const { locale, query } = useRouter();

  const firstName =
    person && (person[`first_name_${locale || "ru"}`] as string);
  const lastName = person && (person[`last_name_${locale || "ru"}`] as string);

  useEffect(() => {
    getPersonById(query.id).then((res) => setPerson(res));
  }, [query]);

  return (
    <Layout title={"person"}>
      <PersonLayout>
        <BackButton />
        {person && (
          <>
            <PersonCard
              firstName={firstName}
              lastName={lastName}
              person={person || mockPersons[0]}
            />
            <Filmography moviesId={person.films.map((film) => film.film_id)} />
          </>
        )}
      </PersonLayout>
      <BreadCrumbs
        type="slash"
        currentTitle={firstName && lastName && `${firstName} ${lastName}`}
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
        "common",
        "genres",
        "countries",
      ])),
    },
  };
};
export default Person;
