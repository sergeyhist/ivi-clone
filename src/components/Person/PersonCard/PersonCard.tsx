import { FC } from "react";
import { IPerson } from "/src/types/IPerson";
import Image from "next/image";
import styles from "./PersonCard.module.sass";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface PersonCardProps {
  person: IPerson;
}

const PersonCard: FC<PersonCardProps> = ({ person }) => {
  const { t } = useTranslation("person");
  const router = useRouter();
  const firstName =
    router.locale === "ru" ? person.first_name_ru : person.first_name_en;
  const lastName =
    router.locale === "ru" ? person.last_name_ru : person.last_name_en;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.header}>{t("backLink")}</div>
        </Link>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image
              width={120}
              height={120}
              src={"https://" + person.img}
              alt={person.last_name_en}
            />
          </div>
          <h1 className={styles.title}>{`${firstName} ${lastName}`}</h1>
        </div>
      </div>
    </section>
  );
};

export default PersonCard;
