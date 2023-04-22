import { FC } from "react";
import styles from "./Mobile.module.sass";
import Title from "../Title/Title";
import Params from "../Params/Params";
import Trailer from "../Trailer/Trailer";
import TrailerButtons from "../TrailerButtons/TrailerButtons";
import Medallions from "../Medallions/Medallions";
import FilmButton from "../FilmButton/FilmButton";
import Description from "../Description/Description";
import Raiting from "../Raiting/Raiting";
import Option from "../Option/Option";
import Badge from "../Badge/Badge";
import Options from "../Options/Options";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";

const Mobile: FC = () => {
  return (
    <>
      <section className={styles.mobile}>
        <Title />
        <Params />
        <Trailer />
        <div className={styles.mobile__row}>
          <div className={styles.mobile__content}>
            <Medallions />
            <FilmButton className={styles.button}>
              <i
                className={`${styles.button__icon} ${styles.button__icon_film}`}
              ></i>
              <p className={styles.button__text}>Бесплатные фильмы</p>
            </FilmButton>
            <TextDropDown>
              <Description />
            </TextDropDown>
            <Raiting
              grade="8.9"
              title="Рейтинг Иви"
              category="Интересный сюжет"
              grades="143 908"
            />
            <Options>
              <Option className={styles.option} title="Языки">
                Русский, Французский
              </Option>
              <Option className={styles.option} title="Субтитры">
                Русский
              </Option>
              <Option className={styles.option} title="Качество">
                <Badge className={styles.badge}>4К</Badge>
                <Badge className={styles.badge}>FullHD</Badge>
                <Badge className={styles.badge}>HD</Badge>
                <Badge className={styles.badge}>1080</Badge>
                <Badge className={styles.badge}>720</Badge>
                <Badge className={styles.badge}>5.1</Badge>
              </Option>
            </Options>
          </div>
          <div className={styles.mobile__buttons}>
            <TrailerButtons />
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
