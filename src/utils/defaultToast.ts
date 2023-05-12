import { Id, toast } from "react-toastify";
import {LegacyRef, MutableRefObject, RefObject, useRef} from "react";

export const notify = (text: string, toastRef:MutableRefObject<Id> , callback: (result:Id)=>void): void => {
    if (!toast.isActive(toastRef.current)) {
      callback(toast(text, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
        toastId: "notify",
      }));
    }
};
