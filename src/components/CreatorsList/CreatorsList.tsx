import {FC} from "react";
import styles from "./CreatorsList.module.sass";
import {ICreator} from "/src/types/ICreator";
import Image from "next/image";
import Link from "next/link";

interface CreatorsListProps {
  creators: ICreator[]
}

const CreatorsList: FC<CreatorsListProps> = ({creators}) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {
          creators.map((creator, i) => {
            return (
              <Link className={styles.item} key={i} href='/'>
                <div className={styles.image}>
                  <Image src={creator.imageUrl} width={88} height={88} alt={creator.firstName}></Image>
                </div>
                <div>
                  <h4 className={styles.title}>{creator.firstName}</h4>
                  <h4 className={styles.second__title}>{creator.lastName}</h4>
                  <p className={styles.subtitle}>{creator.role}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
      <div className={styles.more__button}>Ещё</div>
    </div>
  )
}

export default CreatorsList;