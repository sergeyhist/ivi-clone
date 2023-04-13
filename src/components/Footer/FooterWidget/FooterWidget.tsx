import styles from "./FooterWidget.module.sass";
import { CiBullhorn } from "react-icons/ci";
import { BsSlashLg } from "react-icons/bs";
import Link from "next/link";

const FooterWidget = () => {
  return (
    <Link
      href="https://www.ivi.ru/subscribe?redirect_url=%2F"
      className={styles.widget}
    >
      <div className={styles.widget__icon}>
        <div className={styles.widget__svg}>
          <CiBullhorn size={56} />
          <BsSlashLg
            size={48}
            style={{
              position: "absolute",
              left: "0",
              top: "4px",
              transform: "rotate(110deg)",
            }}
          />
        </div>
      </div>
      <p className={styles.widget__text}>
        Смотрите фильмы, сериалы и мультфильмы без рекламы
      </p>
    </Link>
  );
};

export default FooterWidget;
