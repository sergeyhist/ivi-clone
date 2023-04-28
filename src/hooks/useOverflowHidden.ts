import { useEffect } from "react";

const useOverflowHidden = (): void => {
  useEffect(() => {
    const overflowBodyStyle = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowBodyStyle;
    };
  }, []);
};

export default useOverflowHidden;
