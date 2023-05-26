import { ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";
import { isBrowser } from "./isBrowser";

const createAppPortal = (node: ReactNode): ReactPortal | null => {
  const documentRoot = isBrowser(typeof window !== "undefined")
    ? document.getElementById("__next")
    : undefined;

  return documentRoot ? createPortal(node, documentRoot) : null;
};

export default createAppPortal;
