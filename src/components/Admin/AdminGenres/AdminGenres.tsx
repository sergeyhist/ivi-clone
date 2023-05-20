import { FC } from "react";
import styles from "./AdminGenres.module.sass";
import Container from "/src/UI/Container/Container";
import AdminGenre from "./AdminGenre/AdminGenre";
import { getGenres } from "/src/api/genres";
import useSWR from "swr";

const AdminGenres: FC = () => {
  const { data } = useSWR("/genres?limit=100", getGenres);

  return (
    <section className={styles.section}>
      <Container>
        {data?.map((genre, index) => (
          <AdminGenre key={index} genre={genre} />
        ))}
      </Container>
    </section>
  );
};

export default AdminGenres;
