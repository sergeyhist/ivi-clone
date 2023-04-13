import { FC } from "react";
import styles from './FooterCopyright.module.sass';

const today = new Date();

const FooterCopyright: FC = () => {
  return (
    <aside className={styles.copyright}>
      <span>
        © {today.getFullYear()} ООО «Иви.ру»
        <br /> HBO ® and related service marks are the property of Home Box
        Office, Inc
      </span>
    </aside>
  );
};

export default FooterCopyright;
