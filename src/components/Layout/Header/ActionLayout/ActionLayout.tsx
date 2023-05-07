import {
  ChangeEvent,
  Dispatch,
  FC,
  LegacyRef,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "./ActionLayout.module.sass";
import ToggleSwitch from "/src/UI/ToggleSwitch/ToggleSwitch";
import Actions from "/src/components/Layout/Header/ActionLayout/Actions/Actions";
import { useRouter } from "next/router";
import { DropDownType } from "/src/components/Layout/Header/Header.utils";

interface ActionLayout {
  actionRef?: LegacyRef<HTMLDivElement>;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  setDropDownType: Dispatch<SetStateAction<DropDownType>>;
}

const ActionLayout: FC<ActionLayout> = ({
  actionRef,
  setIsDropdownActive,
  setDropDownType,
}) => {
  const { locale, push, asPath } = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  useEffect(() => {
    locale === "ru" ? setSelectedLanguage(true) : setSelectedLanguage(false);
  }, [setSelectedLanguage, locale]);
  const handleLocaleClick = (e?: ChangeEvent<HTMLInputElement>): void => {
    if (e && e.target.checked)
      push(asPath, undefined, { locale: "ru", scroll: false });
    else push(asPath, undefined, { locale: "en", scroll: false });
    setSelectedLanguage((prevState) => !prevState);
  };

  return (
    <div ref={actionRef} className={styles.container}>
      <ToggleSwitch
        className={styles.switch}
        leftContent="EN"
        rightContent="RU"
        scale={"0.7"}
        isChecked={selectedLanguage}
        clickCallback={handleLocaleClick}
      />
      <Actions
        setIsDropdownActive={setIsDropdownActive}
        setDropDownType={setDropDownType}
      />
    </div>
  );
};

export default ActionLayout;