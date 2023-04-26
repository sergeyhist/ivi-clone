import {FC} from "react";
import styles from "./CreatorsList.module.sass";
import {ICreator} from "/src/types/ICreator";
import Image from "next/image";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "/src/hooks/redux";
import {setShowModal} from "/src/store/slices/modalsSlice";

interface CreatorsListProps {
  creators: ICreator[]
}

const CreatorsList: FC<CreatorsListProps> = ({creators}) => {
  const showModal = useAppSelector(state => state.showModal);
  const dispatch = useAppDispatch();
  const firstTenCreators = creators.slice(0, 10);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {
          firstTenCreators.map((creator, i) => {
            return (
              <Link className={styles.item} key={i} href='/'>
                <div className={styles.image}>
                  <Image src={creator.imageUrl || "/images/creators/unnamed.png"} width={88} height={88}
                         alt={creator.firstName}></Image>
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
      <div className={styles.more__button} onClick={() => {
        dispatch(setShowModal({...showModal, showMovieInfoModal: true}))
      }}>Ещё
      </div>
    </div>
  )
}

export default CreatorsList;
