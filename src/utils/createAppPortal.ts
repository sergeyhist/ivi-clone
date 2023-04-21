import {ReactNode} from "react";
import {createPortal} from "react-dom";


const createAppPortal = (node: ReactNode) => {
  const documentRoot =  typeof window !== "undefined" ? document.getElementById("__next") : null;
  
  return documentRoot ? createPortal(node, documentRoot) : null;
};

export default createAppPortal;
