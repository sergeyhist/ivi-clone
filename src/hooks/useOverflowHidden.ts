import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "../utils/isBrowser";

const useOverflowHidden = (isShow: boolean): void => {
  const useIsomorphicLayoutEffect = isBrowser(typeof window !== "undefined")
    ? useLayoutEffect
    : useEffect;

  useIsomorphicLayoutEffect(() => {
    isShow
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isShow]);
};

export default useOverflowHidden;
