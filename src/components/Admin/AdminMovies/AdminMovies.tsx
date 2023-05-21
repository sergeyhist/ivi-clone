import { FC, useState } from "react";
import styles from "./AdminMovies.module.sass";
import Container from "/src/UI/Container/Container";
import AdminMovie from "./AdminMovie/AdminMovie";
import useSWR from "swr";
import { getMovies } from "/src/api/movie";
import AdminMoviesSearch from "./AdminMoviesSearch/AdminMoviesSearch";

const AdminMovies: FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const query = searchName ? `/name/films?name=${searchName}` : "/films?limit=20";
  const { data } = useSWR(query, getMovies);

  return (
    <section className={styles.section}>
      <Container>
        <AdminMoviesSearch searchName={searchName} setSearchName={setSearchName} />
        {data?.map((movie, index) => (
          <AdminMovie key={index} movie={movie} />
        ))}
      </Container>
    </section>
  );
};

export default AdminMovies;
