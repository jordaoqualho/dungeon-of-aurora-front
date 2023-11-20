import { Slide, ToastOptions, TypeOptions, toast } from "react-toastify";

export const showToast = (message: string, type: TypeOptions = "error") => {
  const options: ToastOptions = {
    style: { fontSize: "1.6rem" },
    position: "bottom-center",
    hideProgressBar: false,
    progress: undefined,
    closeOnClick: true,
    pauseOnHover: true,
    closeButton: false,
    transition: Slide,
    toastId: message,
    autoClose: 4000,
    draggable: true,
    theme: "dark",
    type: type,
  };

  if (message === "dismissAll") return toast.dismiss();

  return toast(message, options);
};
