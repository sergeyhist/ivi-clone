import { Dispatch, FC, LegacyRef, SetStateAction } from "react";
import styles from "./NavigationLayout.module.sass";
import Link from "next/link";
import Image from "next/image";
import Navigation from "/src/components/Layout/Header/NavigationLayout/Navigation/Navigation";
import { DropDownType } from "/src/components/Layout/Header/Header.utils";
import { useAppSelector } from "/src/hooks/redux";

interface NavigationLayoutProps {
  navigationRef?: LegacyRef<HTMLDivElement>;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  setDropDownType: Dispatch<SetStateAction<DropDownType>>;
}

const NavigationLayout: FC<NavigationLayoutProps> = ({
  navigationRef,
  setIsDropdownActive,
  setDropDownType,
}) => {
  const windowSizeWidth = useAppSelector((state) => state.windowSize.width);

  return (
    <div className={styles.container} data-testid="navigation-layout">
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/iviLogo.svg"
          alt="ivi logo"
          width={77}
          height={56}
        />
      </Link>
      <div ref={navigationRef} className={styles.content}>
        {windowSizeWidth > 1160 && (
          <Navigation
            setIsDropdownActive={setIsDropdownActive}
            setDropDownType={setDropDownType}
          />
        )}
      </div>
    </div>
  );
};

export default NavigationLayout;
