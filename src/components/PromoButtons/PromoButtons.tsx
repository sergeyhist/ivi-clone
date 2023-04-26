import { FC } from "react";
import Link from "next/link";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import styles from "./PromoButtons.module.sass";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const PromoButtons: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <Link className={styles.link} href={"/"}>
          <CustomButton
            type="promo"
            className={`${styles.button} ${styles.button_subscribe}`}
          >
            <Image
              width={24}
              height={32}
              className={styles.button__icon}
              src="/images/thunder.svg"
              alt=""
            />
            {t("home.buttons.subscribe")}
          </CustomButton>
        </Link>

        <CustomButton type="promo" className={`${styles.button}`}>
          <Image
            width={56}
            height={32}
            className={`${styles.button__icon} ${styles.button__icon_present}`}
            src="/images/present.svg"
            alt=""
          />{" "}
          {t("home.buttons.activate")}
        </CustomButton>
      </div>
    </section>
  );
};

export default PromoButtons;
