import {FC} from "react";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import Image from "next/image";
import styles from "./WatchAllDevices.module.sass";

interface WatchAllDevicesProps {
  imageUrl: string,
  movieTitle: string,
}

const WatchAllDevices: FC<WatchAllDevicesProps> = ({imageUrl, movieTitle}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.appeal}>
        <h2 className={styles.title}>{`Смотреть «${movieTitle}» на всех устройствах`}</h2>
        <p className={styles.subtitle}>
          Приложение доступно для скачивания на iOS, Android,
          SmartTV и приставках</p>
        <CustomButton className={styles.button} type="red">
          <div className={styles.button__text}>Подключить устройства</div>
        </CustomButton>
      </div>
      <div className={styles.devices}>
        <div className={styles.image__container}>
          <Image className={styles.image__tv}
                 src="/images/WatchAllDevices/tv-without-poster.png"
                 width={536}
                 height={272}
                 alt="Устройства для просмотра Иви"/>
          <Image
            className={styles.image__tablet}
            src="/images/WatchAllDevices/ipad-without-poster.png"
            width={200}
            height={136}
            alt="Устройства для просмотра Иви"/>
          <Image className={styles.poster__tv}
                 src={imageUrl} width={337}
                 height={192}
                 alt={movieTitle}/>
          <Image className={styles.poster__tablet}
                 src={imageUrl} width={188}
                 height={102}
                 alt={movieTitle}/>
        </div>
      </div>
    </div>
  )
}

export default WatchAllDevices;
