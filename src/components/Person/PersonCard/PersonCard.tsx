import { FC } from "react";
import { IPerson } from "/src/types/IPerson";
import Image from "next/image";
import styles from "./PersonCard.module.sass";
import { getBackendImage } from "/src/utils/getBackendImg";

interface PersonCardProps {
  firstName: string;
  lastName: string;
  person: IPerson;
}

const PersonCard: FC<PersonCardProps> = ({ person, firstName, lastName }) => {
  return (
    <div className={styles.content} data-testid="person-card">
      <div className={styles.img}>
        <Image
          fill
          sizes="100%"
          src={getBackendImage(person.img)}
          alt={person.last_name_en}
          placeholder="blur"
          blurDataURL="/images/placeholder.svg"
        />
      </div>
      <h1 className={styles.title}>
        {`${firstName} ${lastName}`}
      </h1>
    </div>
  );
};

export default PersonCard;
