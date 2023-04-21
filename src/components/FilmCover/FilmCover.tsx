import { FC } from "react";
import styles from "./FilmCover.module.sass";
import ContentColumn from "./ContentColumn/ContentColumn";
import TrailerColumn from "./TrailerColumn/TrailerColumn";
import Title from "./ContentColumn/Title/Title";
import Params from "./ContentColumn/Params/Params";
import Trailer from "./TrailerColumn/Trailer/Trailer";
import TrailerButtons from "./TrailerColumn/TrailerButtons/TrailerButtons";
import Medallions from "./ContentColumn/Medallions/Medallions";
import FilmButton from "./FilmButton/FilmButton";
import DropDown from "./DropDown/DropDown";
import Description from "./ContentColumn/DropDown/Description/Description";
import Raiting from "./ContentColumn/Raiting/Raiting";
import Option from "./Option/Option";
import Badge from "./Badge/Badge";

const FilmCover: FC = () => {
  return (
    <>
      <section className={styles.desctop}>
        <TrailerColumn />
        <ContentColumn />
      </section>

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
            <DropDown>
              <Description />
            </DropDown>
            <Raiting
              grade="8.9"
              title="Рейтинг Иви"
              category="Интересный сюжет"
              grades="143 908"
            />
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
          </div>
          <div className={styles.mobile__buttons}>
            <TrailerButtons />
          </div>
        </div>
      </section>
    </>
  );
};

export default FilmCover;
