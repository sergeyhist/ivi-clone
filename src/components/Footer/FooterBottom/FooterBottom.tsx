import { FC } from "react";
import styles from "./FooterBottom.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { bottomLeftLinks, bottomRightLinks } from "./FooterBottom.utils";
import { useRouter } from "next/router";
import ILink from "/src/types/ILink";

const FooterBottom: FC = () => {
  const router = useRouter();

  const linkTypeHandler = (link: ILink) => {
    link.target && link.target === "_blank"
      ? window.open(link.url)
      : router.push(link.url);
  };

  return (
    <div className={styles.bottom}>
      <div className={styles.bottom__left}>
        {bottomLeftLinks.map((link, i) => (
          <CustomButton
            key={i}
            clickCallback={() => {
              linkTypeHandler(link);
            }}
          >
            {link.content}
          </CustomButton>
        ))}
      </div>
      <div className={styles.bottom__right}>
        {bottomRightLinks.map((link, i) => (
          <CustomButton
            key={i}
            type="icon"
            style={{borderRadius: '50%'}}
            clickCallback={() => {
              linkTypeHandler(link);
            }}
          >
            {link.content}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
