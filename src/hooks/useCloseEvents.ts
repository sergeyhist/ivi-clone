import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
} from "react";

const useCloseEvents = (
  refs: RefObject<HTMLElement>[],
  action: Dispatch<SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const clickHandler = (e: MouseEvent): void => {
      refs.reduce(
        (result, ref) =>
          ref.current?.contains(e.target as Node) ? (result = false) : result,
        true
      ) && action(false);
    };

    const keydownHandler = (e: KeyboardEvent): void => {
      e.key === "Escape" && action(false);
    };

    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [refs, action]);
};

export default useCloseEvents;
