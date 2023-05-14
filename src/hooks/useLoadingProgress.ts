import { Dispatch, SetStateAction, useEffect } from "react";
import { NextRouter } from "next/router";

export const useLoadingProgress = (
  router: NextRouter,
  startCondition: boolean,
  setProgress: Dispatch<SetStateAction<number>>
): void => {
  useEffect(() => {
    if (startCondition) {
      let loadingInterval: NodeJS.Timer | undefined;

      const resetInterval = (): void => {
        clearInterval(loadingInterval);
        loadingInterval = undefined;
      };

      const loadingEnd = (): void => {
        setProgress(100);
        resetInterval();
        setTimeout(() => {
          setProgress(0);
        }, 300);
      };

      const loadingError = (): void => {
        resetInterval();
      };

      const loadingProcess = (): void => {
        let progress = 1;

        !loadingInterval &&
          (loadingInterval = setInterval(() => {
            progress <= 30 && (progress += 1);
            progress <= 60 && (progress += 0.5);
            progress <= 90 && (progress += 0.3);
            progress < 100 && (progress += 0.1);
            setProgress(progress);
          }, 100));
      };

      router.events.on("routeChangeStart", loadingProcess);
      router.events.on("routeChangeComplete", loadingEnd);
      router.events.on("routeChangeError", loadingError);

      return () => {
        router.events.off("routeChangeStart", loadingProcess);
        router.events.off("routeChangeComplete", loadingEnd);
        router.events.on("routeChangeError", loadingError);
        resetInterval();
      };
    }
  }, [router.events, startCondition, setProgress]);
};
