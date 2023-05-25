import { FC, useEffect, useState } from "react";
import Container from "/src/UI/Container/Container";
import AdminGenre from "./AdminGenre/AdminGenre";
import { useGetGenres } from "/src/api/genres";
import { useTranslation } from "next-i18next";
import { IGenre } from "/src/types/IGenre";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import styles from "./AdminGenres.module.sass";

const AdminGenres: FC = () => {
  const { t } = useTranslation("admin");
  const [genrePerView, setGenresPerView] = useState<IGenre[]>([]);
  const [page, setPage] = useState<number>(1);
  const genres = useGetGenres("/genres?limit=100");

  useEffect(() => {
    if (!genres.data) return;
    if (genres.data.length < 10) setGenresPerView(genres.data);
    setGenresPerView(genres.data.slice(0, page * 10));
  }, [genres.data, page]);

  return (
    <section data-testid="admin-genres">
      <Container>
        {genrePerView.map((genre, index) => (
          <AdminGenre key={index} genre={genre} />
        ))}
        {genres.data && genrePerView.length < genres.data.length && (
          <CustomButton
            className={styles.button}
            clickCallback={() => setPage(page + 1)}
            type="frame"
            dataTestId="more-genres-button"
          >
            {t("more")}
          </CustomButton>
        )}
      </Container>
    </section>
  );
};

export default AdminGenres;
