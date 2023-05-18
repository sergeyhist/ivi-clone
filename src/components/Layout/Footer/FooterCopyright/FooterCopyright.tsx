import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FooterCopyright.module.sass";
import { useAppSelector } from "/src/hooks/redux";
import { RootState } from "/src/store";

const today = new Date();

const FooterCopyright: FC = () => {
  const windowSize = useAppSelector((state: RootState) => state.windowSize);
  const { t } = useTranslation("footer");

  return (
    <aside data-testid="copyright" className={styles.copyright}>
      <span>
        {windowSize.width > 1159 && (
          <span>
            © {today.getFullYear()} ООО «{t("copyright")}»
            <br />
          </span>
        )}
        HBO ® and related service marks are the property of Home Box Office, Inc
      </span>
    </aside>
  );
};

export default FooterCopyright;
