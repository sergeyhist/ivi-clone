import { FC } from "react";
import Container from "/src/UI/Container/Container";
import AdminGenre from "./AdminGenre/AdminGenre";
import { useGetGenres } from "/src/api/genres";

const AdminGenres: FC = () => {
  const genres = useGetGenres("/genres?limit=100");

  return (
    <section data-testid="admin-genres">
      <Container>
        {genres.data?.map((genre, index) => (
          <AdminGenre key={index} genre={genre} />
        ))}
      </Container>
    </section>
  );
};

export default AdminGenres;
