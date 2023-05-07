import { FC } from "react";
import { IPerson } from "/src/types/IPerson";
import Image from "next/image";
import styles from "./PersonCard.module.sass";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface PersonCardProps {
  firstName?: string;
  lastName?: string;
  person: IPerson;
}

const PersonCard: FC<PersonCardProps> = ({ person, firstName, lastName }) => {
  const { t } = useTranslation("person");
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.header}>{t("backLink")}</div>
        </Link>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image
              fill
              sizes="100%"
              src={
                person.img.includes("yastatic.net")
                  ? person.img
                  : "https://" + person.img
              }
              alt={person.last_name_en}
            />
          </div>
          <h1 className={styles.title}>
            {(firstName && lastName) && `${firstName} ${lastName}`}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PersonCard;
