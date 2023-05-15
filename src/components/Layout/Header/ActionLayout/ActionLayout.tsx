import { Dispatch, FC, LegacyRef, SetStateAction } from "react";
import styles from "./ActionLayout.module.sass";
import ToggleSwitch from "/src/UI/ToggleSwitch/ToggleSwitch";
import Actions from "/src/components/Layout/Header/ActionLayout/Actions/Actions";
import {NextRouter, useRouter} from "next/router";
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

  const handleLocaleClick = (result: string): void => {
    push(asPath, undefined, { locale: result, scroll: false });
  };

  return (
    <div ref={actionRef} className={styles.container} data-testid='actionLayout-container'>
      <ToggleSwitch
        className={styles.switch}
        leftContent="EN"
        rightContent="RU"
        defaultValue={locale === "ru" ? "right" : "left"}
        scale={"0.7"}
        clickCallback={(result) => {
          handleLocaleClick(result.toLowerCase());
        }}
        dataTestId="toggle-switch"
      />
      <Actions
        setIsDropdownActive={setIsDropdownActive}
        setDropDownType={setDropDownType}
      />
    </div>
  );
};

export default ActionLayout;
