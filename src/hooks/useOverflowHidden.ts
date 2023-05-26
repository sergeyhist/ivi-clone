import { useLayoutEffect, useEffect } from "react";
import { useAppSelector } from "/src/hooks/redux";
import { isBrowser } from "../utils/isBrowser";

const useOverflowHidden = (isShow: boolean): void => {
  const showModal = useAppSelector((state) => state.showModal);

  const useIsomorphicLayoutEffect = isBrowser(window) ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    isShow
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showModal.showMovieModal.isShow]);
};

export default useOverflowHidden;
