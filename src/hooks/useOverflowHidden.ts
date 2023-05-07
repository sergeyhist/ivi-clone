import { useLayoutEffect, useEffect } from "react";
import { useAppSelector } from "/src/hooks/redux";

const useOverflowHidden = (): void => {
  const showModal = useAppSelector((state) => state.showModal);

  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (showModal.showMovieModal.isShow) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [showModal.showMovieModal.isShow]);
};

export default useOverflowHidden;
