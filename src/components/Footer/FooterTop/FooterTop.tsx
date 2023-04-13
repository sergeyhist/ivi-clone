import { FC } from "react";
import styles from "./FooterTop.module.sass";
import FooterList from "../FooterList/FooterList";
import Link from "next/link";
import FooterButtons from "../FooterButtons/FooterButtons";
import FooterAsk from "../FooterAsk/FooterAsk";
import FooterWidget from "../FooterWidget/FooterWidget";

const FooterTop: FC = () => {
  return (
    <div className={styles.top}>
      <div>
        <span className={styles.top__title}>О нас</span>
        <nav className={styles.top__nav}>
          <FooterList
            items={[
              {
                text: "О компании",
                link: "https://corp.ivi.ru/?_gl=1*15hvcv0*_ga*MTYyOTgwODIxOC4xNjgxMjEzNzAx*_ga_GETQ4387MJ*MTY4MTI5Mzg5My4zLjEuMTY4MTI5OTQ0Ny42MC4wLjA.",
              },
              {
                text: "Вакансии",
                link: "https://corp.ivi.ru/career/?_gl=1*2qtg9j*_ga*MTYyOTgwODIxOC4xNjgxMjEzNzAx*_ga_GETQ4387MJ*MTY4MTI5Mzg5My4zLjEuMTY4MTMwMTQwMy41Ny4wLjA.#career-vacancy-block",
              },
              {
                text: "Программа бета-тестирования",
                link: "https://www.ivi.ru/pages/beta",
              },
              {
                text: "Информация для партнёров",
                link: "https://www.ivi.ru/info/partners",
              },
              {
                text: "Размещение рекламы",
                link: "https://corp.ivi.ru/advertisers/?_gl=1*uhgz7x*_ga*MTYyOTgwODIxOC4xNjgxMjEzNzAx*_ga_GETQ4387MJ*MTY4MTI5Mzg5My4zLjEuMTY4MTMwMTQwMy41Ny4wLjA.",
              },
              {
                text: "Пользовательское соглашение",
                link: "https://www.ivi.ru/info/agreement",
              },
              {
                text: "Политика конфиденциальности",
                link: "https://www.ivi.ru/info/confidential",
              },
              {
                text: "Комплаенс",
                link: "https://www.ivi.ru/info/goryachaya-liniya-komplaens",
              },
            ]}
          />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>Разделы</span>
        <nav className={styles.top__nav}>
          <FooterList
            items={[
              { text: "Мой Иви", link: "https://www.ivi.ru/" },
              { text: "Что нового", link: "https://www.ivi.ru/new" },
              { text: "Фильмы", link: "" },
              { text: "Сериалы", link: "" },
              { text: "Мультфильмы", link: "" },
              { text: "TV+", link: "https://www.ivi.ru/tvplus" },
              { text: "Что посмотреть", link: "https://www.ivi.ru/goodmovies" },
            ]}
          />
          <div className={styles.top__cert}>
            <Link href="https://www.ivi.ru/cert">Активация сертификата</Link>
          </div>
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>Служба поддержки</span>
        <div className={styles.top__wrapper}>
          <p>
            Мы всегда готовы вам помочь.
            <br /> Наши операторы онлайн 24/7
          </p>
          <FooterButtons />
          <FooterAsk />
        </div>
      </div>
      <div>
        <FooterWidget />
      </div>
    </div>
  );
};

export default FooterTop;
