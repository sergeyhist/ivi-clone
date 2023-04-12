import { FC } from "react";
import CustomButton from "/src/UI/customButton/CustomButton";
import styles from "./Footer.module.sass";
import { BsTelephone } from "react-icons/bs";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__btns}>
        <CustomButton clickCallback={() => {}}>Написать в чате</CustomButton>
        <CustomButton type="icon" clickCallback={() => {}}>
          <BsTelephone size={16} />
        </CustomButton>
        <CustomButton type="purple" clickCallback={() => {}}>
          Оплатить подписку
        </CustomButton>
        <CustomButton width="200px" type="red" clickCallback={() => {console.log('click')}}>
          Показать подборку
        </CustomButton>
      </div>
    </footer>
  );
};

export default Footer;
