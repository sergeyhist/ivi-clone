import { FC, useState } from "react";
import styles from "./AdminMovies.module.sass";
import Container from "/src/UI/Container/Container";
import AdminMovie from "./AdminMovie/AdminMovie";
import AdminMoviesSearch from "./AdminMoviesSearch/AdminMoviesSearch";
import { useGetMovies } from "/src/api/movie";

const AdminMovies: FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const query = searchName ? `/name/films?name=${searchName}` : "/films?limit=20";
  const movies = useGetMovies(query);

  return (
    <section data-testid="admin-movies" className={styles.section}>
      <Container>
        <AdminMoviesSearch searchName={searchName} setSearchName={setSearchName} />
        {movies.data?.map((movie, index) => (
          <AdminMovie key={index} movie={movie} />
        ))}
      </Container>
    </section>
  );
};

export default AdminMovies;
