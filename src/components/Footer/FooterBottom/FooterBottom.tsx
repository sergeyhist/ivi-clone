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
            {link.text}
          </CustomButton>
        ))}
      </div>
      <div className={styles.bottom__right}>
        {bottomRightLinks.map((link, i) => (
          <CustomButton
            key={i}
            borderRadius="50%"
            width="40px"
            padding="0"
            clickCallback={() => {
              linkTypeHandler(link);
            }}
          >
            {link.text}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
