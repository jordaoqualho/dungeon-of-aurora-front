import { ToastOptions, TypeOptions, toast } from "react-toastify";

export const showToast = (message: string, type: TypeOptions = "error") => {
  const options: ToastOptions = {
    style: { fontSize: "1.6rem" },
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: type,
  };

  toast(message, options);
};
