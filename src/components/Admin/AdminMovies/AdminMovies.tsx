import { FC, useEffect, useState } from "react";
import Container from "/src/UI/Container/Container";
import AdminMovie from "./AdminMovie/AdminMovie";
import AdminMoviesSearch from "./AdminMoviesSearch/AdminMoviesSearch";
import { useGetMovies } from "/src/api/movie";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";
import styles from "./AdminMovies.module.sass";

const AdminMovies: FC = () => {
  const { t } = useTranslation("admin");
  const [searchName, setSearchName] = useState<string>("");
  const [moviePerView, setMoviePerView] = useState<IMovie[]>([]);
  const [page, setPage] = useState<number>(1);
  const query = searchName ? `/name/films?name=${searchName}` : "/films?limit=20";
  const movies = useGetMovies(query);

  useEffect(() => {
    if (!movies.data) return;
    if (movies.data.length < 10) setMoviePerView(movies.data);
    setMoviePerView(movies.data.slice(0, page * 10));
  }, [movies.data, page]);

  return (
    <section data-testid="admin-movies">
      <Container>
        <AdminMoviesSearch searchName={searchName} setSearchName={setSearchName} />
        {moviePerView.map((movie, index) => (
          <AdminMovie key={index} movie={movie} />
        ))}
        {movies.data && moviePerView.length < movies.data.length && (
          <CustomButton
            className={styles.button}
            clickCallback={() => setPage(page + 1)}
            type="frame"
            dataTestId="more-movies-button"
          >
            {t("more")}
          </CustomButton>
        )}
      </Container>
    </section>
  );
};

export default AdminMovies;
