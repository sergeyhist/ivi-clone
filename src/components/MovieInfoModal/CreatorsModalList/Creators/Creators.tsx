import {FC} from "react";
import {ICreator} from "/src/types/ICreator";
import styles from "./Creators.module.sass";
import Link from "next/link";
import Image from "next/image";

interface CreatorsProps{
  creators: ICreator[]
}

const Creators:FC<CreatorsProps> =({creators})=>{
  return(
    <div className={styles.creators__list}>
      {
        creators.map((creator,i)=>
          <Link className={styles.creators__item} key={i} href='/'>
            <div className={styles.creators__image}>
              <Image src={creator.imageUrl || "/images/creators/unnamed.png"} width={128} height={128} alt={creator.lastName}/>
            </div>
            <div>
              <h4>{creator.firstName}</h4>
              <h4>{creator.lastName}</h4>
              <div>0 фильмов</div>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Creators;
