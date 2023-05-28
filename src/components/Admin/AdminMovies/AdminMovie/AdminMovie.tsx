import { FC, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminMovie.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import { IMovie } from "/src/types/IMovie";
import { getMovieName } from "/src/utils/movie";
import { useRouter } from "next/router";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { updateMovie, deleteMovieById } from "/src/api/movie";
import Image from "next/image";
import { getBackendImage } from "/src/utils/getBackendImg";

interface AdminMovieProps {
  movie: IMovie;
}

const AdminMovie: FC<AdminMovieProps> = ({ movie }) => {
  const { t } = useTranslation("admin");
  const { locale } = useRouter();
  const [inputTextRu, setInputTextRu] = useState<string>(movie.name_ru);
  const [inputTextEn, setInputTextEn] = useState<string>(movie.name_en);
  const [isDelete, setDelete] = useState<boolean>(false);
  const [actualName, setActualName] = useState<string>(getMovieName(movie, locale));

  const clickSubmit = (): void => {
    updateMovie(
      String(localStorage.getItem("token")),
      movie.film_id,
      inputTextEn,
      inputTextRu
    ).then((response) => {
      if (!response) return;
      locale === "ru"
        ? setActualName(response.name_ru)
        : setActualName(response.name_en);
    });
  };

  const deleteClick = (): void => {
    deleteMovieById(movie.film_id, String(localStorage.getItem("token"))).then(
      () => {
        setDelete(true);
      }
    );
  };

  useEffect(() => {
    setActualName(getMovieName(movie, locale));
    setInputTextRu(movie.name_ru);
    setInputTextEn(movie.name_en);
  }, [locale, movie]);

  return (
    <>
      {!isDelete && (
        <article data-testid="admin-movie" className={styles.movie}>
          <div className={styles.movie__row}>
            <CustomTitle title={actualName} />
            <button
              onClick={deleteClick}
              className={styles.movie__delete}
              type="button"
              data-testid="delete-button"
            >
              {t("delete")}
            </button>
          </div>
          <div className={styles.movie__row}>
            <form data-testid="admin-movie-form" className={styles.form}>
              <CustomTitle
                className={styles.form__title}
                type="small"
                title={t("name")}
              />
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
                dataTestId="movie-input-ru"
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
                dataTestId="movie-input-en"
              />
            </form>
            <div className={styles.poster}>
              <Image
                className={styles.poster__img}
                src={getBackendImage(movie.img)}
                fill={true}
                sizes="100%"
                alt={movie.name_en}
                placeholder="blur"
                blurDataURL="/images/placeholder.svg"
              />
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default AdminMovie;
