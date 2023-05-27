import { FC, FormEvent, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminGenre.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { IGenre } from "/src/types/IGenre";
import { updateGenre } from "/src/api/genres";

interface AdminGenreProps {
  genre: IGenre;
}

const AdminGenre: FC<AdminGenreProps> = ({ genre }) => {
  const { t } = useTranslation("admin");
  const [inputTextRu, setInputTextRu] = useState<string>(genre.genre_ru);
  const [inputTextEn, setInputTextEn] = useState<string>(genre.genre_en);

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();

    updateGenre(
      String(localStorage.getItem("token")),
      genre.genre_id,
      inputTextEn || genre.genre_en,
      inputTextRu || genre.genre_ru
    ).then(() => {
      setInputTextRu("");
      setInputTextEn("");
    });
  };

  return (
    <article data-testid="admin-genre" className={styles.movie}>
      <CustomTitle className={styles.movie__title} title={genre.genre_ru} />
      <form
        data-testid="admin-genre-form"
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <CustomTitle className={styles.form__title} type="small" title={t("name")} />
        <ModalInput
          className={styles.input}
          authData={inputTextRu}
          setAuthData={setInputTextRu}
          inputType="text"
          buttonText={t("update")}
          placeholderText={t("name_ru")}
          isFocused={false}
          preventDefault={true}
        />
        <ModalInput
          className={styles.input}
          authData={inputTextEn}
          setAuthData={setInputTextEn}
          inputType="text"
          buttonText={t("update")}
          placeholderText={t("name_en")}
          isFocused={false}
          preventDefault={true}
        />
      </form>
    </article>
  );
};

export default AdminGenre;
