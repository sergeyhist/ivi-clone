import { FC } from "react";
import styles from "./Desctop.module.sass";
import Title from "../Title/Title";
import Params from "../Params/Params";
import Trailer from "../Trailer/Trailer";
import TrailerButtons from "../TrailerButtons/TrailerButtons";
import Medallions from "../Medallions/Medallions";
import DropDown from "../DropDown/DropDown";
import Description from "../Description/Description";
import Raiting from "../Raiting/Raiting";
import Option from "../Option/Option";
import Badge from "../Badge/Badge";
import Options from "../Options/Options";

const Desctop: FC = () => {
  return (
    <section className={styles.desctop}>
      <div className={styles.trailer}>
        <div className={styles.trailer__stiky}>
          <Trailer />
          <TrailerButtons />
        </div>
      </div>
      <div className={styles.content}>
        <Title />

        <Params />

        <Medallions />

        <DropDown>
          <Description />
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
        </DropDown>

        <Raiting
          grade="8.9"
          title="Рейтинг Иви"
          category="Интересный сюжет"
          grades="143 908"
        />
      </div>
    </section>
  );
};

export default Desctop;
