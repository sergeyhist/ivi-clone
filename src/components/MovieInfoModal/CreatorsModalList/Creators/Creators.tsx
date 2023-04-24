import {FC, useEffect, useState} from "react";
import {ICreator} from "/src/types/ICreator";
import styles from "./Creators.module.sass";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";

interface CreatorsProps{
  creators: ICreator[]
}

const Creators:FC<CreatorsProps> =({creators})=>{
  const [showAllCreators,setShowAllCreators] = useState(false);
  const [creatorsToShow,setCreatorsToShow] = useState<ICreator[]>(creators);

  useEffect(()=>{
    if(creatorsToShow.length > 16 && !showAllCreators)
      setCreatorsToShow(creatorsToShow.slice(0,16))
  },[creatorsToShow,setCreatorsToShow,showAllCreators])

  useEffect(()=>{
    if(showAllCreators)
      setCreatorsToShow(creators);
  },[showAllCreators, setCreatorsToShow,creators]);

  return(
    <div className={styles.creators__list}>
      {
        creatorsToShow.map((creator,i)=>
          <Link className={styles.creators__item} key={i} href='/'>
            <div className={styles.creators__image}>
              <Image src={creator.imageUrl || "/images/creators/unnamed.png"} width={128} height={128} alt={creator.lastName}/>
            </div>
            <div>
              <h4 className={styles.creators__name}>{creator.firstName}</h4>
              <h4 className={styles.creators__name}>{creator.lastName}</h4>
              <div className={styles.movies_count}>0 фильмов</div>
            </div>
          </Link>
        )
      }
      {
        creators.length > 16 && !showAllCreators && <CustomButton clickCallback={()=>setShowAllCreators(true)} type="dark">Показать ещё</CustomButton>
      }
    </div>
  )
}

export default Creators;
