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
  const [inputTextRu, setInputTextRu] = useState<string>("");
  const [inputTextEn, setInputTextEn] = useState<string>("");

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    console.log(inputTextRu, inputTextEn);

    updateGenre(
      String(localStorage.getItem("token")),
      genre.genre_id,
      inputTextEn || genre.genre_en,
      inputTextRu || genre.genre_ru
    ).then((response) => {
      console.log(response);
      setInputTextRu("");
      setInputTextEn("");
    });
  };

  return (
    <article className={styles.movie}>
      <CustomTitle className={styles.movie__title} title={genre.genre_ru} />
      <form className={styles.form} onSubmit={submitHandler}>
        <CustomTitle className={styles.form__title} type="small" title={t("name")} />
        <ModalInput
          className={styles.input}
          authData={inputTextRu}
          setAuthData={setInputTextRu}
          inputType="text"
          buttonText={t("update")}
          placeholderText={t("name_ru")}
        />
        <ModalInput
          className={styles.input}
          authData={inputTextEn}
          setAuthData={setInputTextEn}
          inputType="text"
          buttonText={t("update")}
          placeholderText={t("name_en")}
        />
      </form>
    </article>
  );
};

export default AdminGenre;
