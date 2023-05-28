import { Dispatch, FC, LegacyRef, SetStateAction } from "react";
import styles from "./ActionLayout.module.sass";
import Actions from "/src/components/Layout/Header/ActionLayout/Actions/Actions";
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
  return (
    <div
      ref={actionRef}
      className={styles.container}
      data-testid="actionLayout-container"
    >
      <Actions
        setIsDropdownActive={setIsDropdownActive}
        setDropDownType={setDropDownType}
      />
    </div>
  );
};

export default ActionLayout;
