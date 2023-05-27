import { Dispatch, FC, SetStateAction } from "react";
import styles from "./AdminMoviesSearch.module.sass";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { useTranslation } from "next-i18next";

interface AdminMoviesSearchProps {
  setSearchName: Dispatch<SetStateAction<string>>;
  searchName: string;
}

const AdminMoviesSearch: FC<AdminMoviesSearchProps> = ({
  setSearchName,
  searchName,
}) => {
  const { t } = useTranslation("admin");

  return (
    <div data-testid="admin-search-movie" className={styles.search}>
      <ModalInput
        inputType="text"
        buttonText={t("find")}
        placeholderText={t("search")}
        className={styles.input}
        authData={searchName}
        setAuthData={setSearchName}
        isFocused={true}
        preventDefault={true}
      />
    </div>
  );
};

export default AdminMoviesSearch;
