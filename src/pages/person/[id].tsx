import { FC } from "react";
import Layout from "/src/components/Layout/Layout";
import { GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import Filmography from "/src/components/Person/Filmography/Filmography";
import { useRouter } from "next/router";
import { IPerson } from "/src/types/IPerson";
import BreadCrumbs from "/src/UI/BreadCrumbs/BreadCrumbs";
import BackButton from "/src/components/Person/BackButton/BackButton";
import PersonLayout from "/src/components/Person/PersonLayout/PersonLayout";
import { getMoviesById } from "/src/api/movie";
import { IMovie } from "/src/types/IMovie";
import { getPersonById } from "/src/api/persons";
import { actorsList } from "/src/utils/mocks/actors";

interface PersonProps {
  person: IPerson;
  movies: IMovie[];
}

const Person: FC<PersonProps> = ({ person, movies }) => {
  const { locale } = useRouter();

  const firstName =
    person && (person[`first_name_${locale || "ru"}`] as string);
  const lastName = person && (person[`last_name_${locale || "ru"}`] as string);

  return (
    <Layout title={"person"}>
      <PersonLayout>
        <BackButton />
        <PersonCard firstName={firstName} lastName={lastName} person={person} />
        <Filmography movies={movies} />
      </PersonLayout>
      <BreadCrumbs type="slash" currentTitle={`${firstName} ${lastName}`} />
    </Layout>
  );
};
export const getServerSideProps = async ({
  locale,
  params,
}: {
  locale: string;
  params: { id: string };
}): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  const person = await getPersonById(params.id);
  const movies = await getMoviesById(
    person?.films.map((film) => film.film_id) ||
      actorsList[0].films.map((film) => film.film_id)
  );

  return {
    props: {
      person,
      movies,
      ...(await serverSideTranslations(locale, [
        "footer",
        "header",
        "mobileMenu",
        "dropDownCategory",
        "person",
        "common",
        "genres",
        "countries",
        "admin",
      ])),
    },
  };
};

export default Person;
