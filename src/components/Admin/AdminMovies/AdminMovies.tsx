import { FC } from "react";
import styles from "./AdminMovies.module.sass";
import Container from "/src/UI/Container/Container";
import AdminMovie from "./AdminMovie/AdminMovie";
import useSWR from "swr";
import { getMovies } from "/src/api/movie";

const AdminMovies: FC = () => {
  const { data } = useSWR("/films?limit=100", getMovies);

  return (
    <section className={styles.section}>
      <Container>
        {data?.map((movie, index) => (
          <AdminMovie key={index} movie={movie} />
        ))}
      </Container>
    </section>
  );
};

export default AdminMovies;
