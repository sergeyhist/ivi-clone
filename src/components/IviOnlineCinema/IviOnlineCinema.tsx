import {FC, useState} from "react";
import styles from "./IviOnlineCinema.module.sass";

const IviOnlineCinema: FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClassName = showDropDown ? `${styles.dropdown} ${styles.dropdown_active}` : `${styles.dropdown}`;

  const toggleDropDown = (event: React.MouseEvent) => {
    if (showDropDown) {
      (event.target as HTMLButtonElement).innerHTML = "Развернуть";
      setShowDropDown(!showDropDown);
      return;
    }
    (event.target as HTMLButtonElement).innerHTML = "Свернуть";
    setShowDropDown(!showDropDown);
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>
          Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
        </h2>
        <div className={dropDownClassName}>
          <p className={styles.section__paragraf}>
            Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один
            из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас
            отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать
            программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.
          </p>
          <p className={styles.section__paragraf}>
            Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч
            отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали
            контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox,
            Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими
            компаниями и телеканалами.
          </p>
          <p className={styles.section__paragraf}>Онлайн-кинотеатр ivi.ru – это:</p>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то,
              что точно придется вам по душе;
            </li>
            <li className={styles.list__item}>
              просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до
              телевизоров с технологией Smart TV;
            </li>
            <li className={styles.list__item}>
              возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к
              Интернету;
            </li>
            <li className={styles.list__item}>
              уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и
              приятным;
            </li>
            <li className={styles.list__item}>
              удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы
              известим о появлении подходящим для вас способом;
            </li>
            <li className={styles.list__item}>
              возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;
            </li>
            <li className={styles.list__item}>
              контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;
            </li>
            <li className={styles.list__item}>просмотр онлайн контента хорошего разрешения без регистрации и смс.</li>
          </ul>

          <p className={styles.section__paragraf}>
            Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!
          </p>
        </div>
        <button onClick={toggleDropDown} className={styles.dropdown__toggle}>
          Развернуть
        </button>
      </div>
    </section>
  );
};

export default IviOnlineCinema;
