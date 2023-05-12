import {Id, toast} from "react-toastify";
import {DefaultTFuncReturn, TFuncReturn} from "i18next";

export const notify = (
  t: TFuncReturn<"registration", string, DefaultTFuncReturn>
): Id =>
  toast(t, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "dark",
  });