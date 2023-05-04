import {FC} from "react";
import {IPerson} from "/src/types/IPerson";
import Image from "next/image";
import styles from "./PersonCard.module.sass";
import {useRouter} from "next/router";

interface PersonCardProps{
  person: IPerson;
}

const PersonCard:FC<PersonCardProps> = ({person})=>{
  const router = useRouter();
  const firstName = router.locale ==="ru" ? person.first_name_ru : person.first_name_en;
  const lastName = router.locale ==="ru" ? person.last_name_ru : person.last_name_en;

  return(
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image width={120} height={120} src={"https://" + person.img} alt={person.last_name_en}/>
          </div>
          <h1 className={styles.title}>{`${firstName} ${lastName}`}</h1>
          <div className={styles.movies}>{`${person.movies.length} фильмов`}</div>
        </div>
      </div>
    </section>
  )
}

export default PersonCard;
