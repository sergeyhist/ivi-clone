import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminMovie.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import { IMovie } from "/src/types/IMovie";
import { getMovieName } from "/src/utils/movie";
import { useRouter } from "next/router";
import ModalInput from "/src/UI/ModalInput/ModalInput";

interface AdminMovieProps {
  movie: IMovie;
}

const AdminMovie: FC<AdminMovieProps> = ({ movie }) => {
  const { t } = useTranslation("admin");
  const { locale } = useRouter();

  const submitHandler = (): void => {
    //
  };

  return (
    <article className={styles.movie}>
      <CustomTitle title={getMovieName(movie, locale)} />
      <form className={styles.form} onSubmit={submitHandler}>
        <CustomTitle className={styles.form__title} type="small" title={t("name")} />
        <ModalInput
          className={styles.input}
          inputType="text"
          buttonText={t("update")}
          placeholderText={t("name_ru")}
        />
        <ModalInput
          className={styles.input}
          inputType="text"
          buttonText={t("update")}
          placeholderText={t("name_en")}
        />
      </form>
    </article>
  );
};

export default AdminMovie;
