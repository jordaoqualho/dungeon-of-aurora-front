import { Slide, ToastOptions, TypeOptions, toast } from "react-toastify";

const getToastOptions = (
  message: string,
  type: TypeOptions = "error"
): ToastOptions => {
  return {
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
};

export const showToast = (message: string, type: TypeOptions = "error") => {
  if (message === "dismissAll") return toast.dismiss();

  const options = getToastOptions(message, type);
  return toast(message, options);
};

export const showPromiseToast = (
  successText: string,
  type: TypeOptions = "error",
  pendingText?: string,
  time?: number
) => {
  const options = getToastOptions(successText, type);

  const functionThatReturnsPromise = () =>
    new Promise((resolve) => setTimeout(resolve, time || 1000));

  return toast.promise(
    functionThatReturnsPromise,
    {
      pending: pendingText || "Rodando dados",
      success: successText,
    },
    options
  );
};
