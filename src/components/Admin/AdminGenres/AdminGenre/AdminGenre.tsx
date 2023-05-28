import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminGenre.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { IGenre } from "/src/types/IGenre";
import { updateGenre } from "/src/api/genres";
import { useRouter } from "next/router";

interface AdminGenreProps {
  genre: IGenre;
}

const AdminGenre: FC<AdminGenreProps> = ({ genre }) => {
  const { t } = useTranslation("admin");
  const { locale } = useRouter();
  const [inputTextRu, setInputTextRu] = useState<string>(genre.genre_ru);
  const [inputTextEn, setInputTextEn] = useState<string>(genre.genre_en);
  const [actualName, setActualName] = useState<string>(
    locale === "ru" ? genre.genre_ru : genre.genre_en
  );

  const clickSubmit = (): void => {
    updateGenre(
      String(localStorage.getItem("token")),
      genre.genre_id,
      inputTextEn,
      inputTextRu
    ).then((response) => {
      if (!response) return;
      locale === "ru"
        ? setActualName(response.genre_ru)
        : setActualName(response.genre_en);
    });
  };

  useEffect(() => {
    locale === "ru" ? setActualName(genre.genre_ru) : setActualName(genre.genre_en);
    setInputTextRu(genre.genre_ru);
    setInputTextEn(genre.genre_en);
  }, [genre.genre_en, genre.genre_ru, locale]);

  return (
    <article data-testid="admin-genre" className={styles.movie}>
      <CustomTitle className={styles.movie__title} title={actualName} />
      <form data-testid="admin-genre-form" className={styles.form}>
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
          clickCallback={clickSubmit}
          dataTestId="genre-input-ru"
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
          clickCallback={clickSubmit}
          dataTestId="genre-input-en"
        />
      </form>
    </article>
  );
};

export default AdminGenre;
