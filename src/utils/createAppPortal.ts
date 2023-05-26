import { ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";
import { isBrowser } from "./isBrowser";

const createAppPortal = (node: ReactNode): ReactPortal | null => {
  console.log(isBrowser(window));

  const documentRoot = isBrowser(window)
    ? document.getElementById("__next")
    : undefined;

  console.log(documentRoot);

  return documentRoot ? createPortal(node, documentRoot) : null;
};

export default createAppPortal;
