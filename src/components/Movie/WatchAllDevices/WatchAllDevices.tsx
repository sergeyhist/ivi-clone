import { FC } from "react";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import Image from "next/image";
import styles from "./WatchAllDevices.module.sass";
import { useTranslation } from "next-i18next";
import Container from "/src/UI/Container/Container";

interface WatchAllDevicesProps {
  imageUrl: string;
  movieTitle: string;
}

const WatchAllDevices: FC<WatchAllDevicesProps> = ({ movieTitle }) => {
  const { t } = useTranslation("movie");

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.appeal}>
            <h2 className={styles.title}>{`${t("devices.watch")} «${movieTitle}» ${t(
              "devices.title"
            )}`}</h2>
            <p className={styles.subtitle}>{t("devices.text")}</p>
            <CustomButton className={styles.button} type="red">
              <div className={styles.button__text}>{t("devices.button")}</div>
            </CustomButton>
          </div>
          <div className={styles.devices}>
            <div className={styles.image__container}>
              <Image
                className={styles.image__tv}
                src="/images/WatchAllDevices/tv-without-poster.png"
                width={536}
                height={272}
                alt="Устройства для просмотра Иви"
                loading="eager"
              />
              <Image
                className={styles.image__tablet}
                src="/images/WatchAllDevices/ipad-without-poster.png"
                width={200}
                height={136}
                alt="Устройства для просмотра Иви"
                loading="eager"
              />
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                width={337}
                height={192}
                className={styles.poster__tv}
              >
                <source src="/video/trailer2.mp4" type="video/mp4" />
              </video>
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                width={337}
                height={192}
                className={styles.poster__tablet}
              >
                <source src="/video/trailer2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WatchAllDevices;
