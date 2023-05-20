import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./AdminGenre.module.sass";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { IGenre } from "/src/types/IGenre";

interface AdminGenreProps {
  genre: IGenre;
}

const AdminGenre: FC<AdminGenreProps> = ({ genre }) => {
  const { t } = useTranslation("admin");

  const submitHandler = (): void => {
    //
  };

  return (
    <article className={styles.movie}>
      <CustomTitle className={styles.movie__title} title={genre.genre_ru} />
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

export default AdminGenre;
