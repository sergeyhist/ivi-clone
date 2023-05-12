import { toast } from "react-toastify";

export const notify = (text: string, id: string): void => {
  if (!toast.isActive(id)) {
    toast(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
      toastId: id,
    });
  }
};
