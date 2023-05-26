import { FC } from "react";
import { useAppSelector } from "/src/hooks/redux";
import { useTranslation } from "next-i18next";
import styles from "./AdminButton.module.sass";
import Link from "next/link";
import { useRouter } from "next/router";

const AdminButton: FC = () => {
  const router = useRouter();
  const userRole = useAppSelector((state) => state.auth.role);
  const { t } = useTranslation("admin");

  if (userRole === "admin" && router.pathname !== "/admin")
    return (
      <Link href="/admin" className={styles.button} data-testid="admin-button">
        {t("button")}
      </Link>
    );
  return <></>;
};

export default AdminButton;
